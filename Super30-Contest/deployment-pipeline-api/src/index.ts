import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

type DeploymentStatus =
  | "PENDING"
  | "DEPLOYING"
  | "LIVE"
  | "SUPERSEDED"
  | "DEAD"
  | "ROLLED_BACK";

type HistoryEventType =
  | "CREATED"
  | "CLAIMED"
  | "DEPLOYED"
  | "FAILED"
  | "DEAD"
  | "SUPERSEDED"
  | "ROLLED_BACK"
  | "REVIVED";

interface Service {
  id: string;
  name: string;
  repository: string;
  environments: string[];
  maxAttempts: number;
  backoffSeconds: number;
  createdAt: string;
}

interface Deployment {
  id: string;
  serviceId: string;
  environment: string;
  commitHash: string;
  status: DeploymentStatus;
  attempts: number;
  createdAt: string;
  claimedAt: string | null;
  completedAt: string | null;
  nextAttemptAt: string | null;
  lastError?: string;
}

interface DeploymentHistoryEntry {
  type: HistoryEventType;
  at: string;
  attempt: number;
}

const services: Service[] = [];
const deployments: Deployment[] = [];
const deploymentHistories: Record<string, DeploymentHistoryEntry[]> = {};

let idCounter = 1;
const generateId = (): string => {
  idCounter += 1;
  return `id-${idCounter}`;
};

const isValidIsoDateTime = (value: string): boolean => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return false;
  if (!value.includes("T")) return false;
  if (!/[zZ]|[+-]\d{2}:\d{2}$/.test(value)) return false;
  return true;
};

const nowOrError = (
  nowOverride: unknown
): { ok: true; date: Date } | { ok: false; error: string } => {
  if (nowOverride === undefined || nowOverride === null) {
    return { ok: true, date: new Date() };
  }
  if (typeof nowOverride !== "string" || !isValidIsoDateTime(nowOverride)) {
    return {
      ok: false,
      error: 'Invalid "now": must be a full ISO datetime with timezone',
    };
  }
  return { ok: true, date: new Date(nowOverride) };
};

const addHistory = (
  deploymentId: string,
  type: HistoryEventType,
  at: Date,
  attempt: number
) => {
  const list = deploymentHistories[deploymentId] || [];
  list.push({
    type,
    at: at.toISOString(),
    attempt,
  });
  list.sort((a, b) => a.at.localeCompare(b.at));
  deploymentHistories[deploymentId] = list;
};

const findService = (id: string): Service | undefined =>
  services.find((s) => s.id === id);

const findDeployment = (id: string): Deployment | undefined =>
  deployments.find((d) => d.id === id);

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.post("/api/services", (req: Request, res: Response) => {
  const { name, repository, environments, maxAttempts, backoffSeconds } =
    req.body ?? {};

  if (
    typeof name !== "string" ||
    name.trim() === "" ||
    typeof repository !== "string" ||
    repository.trim() === "" ||
    !Array.isArray(environments) ||
    environments.length === 0 ||
    !environments.every((e) => typeof e === "string" && e.trim() !== "") ||
    typeof maxAttempts !== "number" ||
    !Number.isInteger(maxAttempts) ||
    maxAttempts <= 0 ||
    typeof backoffSeconds !== "number" ||
    !Number.isInteger(backoffSeconds) ||
    backoffSeconds <= 0
  ) {
    return res.status(400).json({ error: "Invalid service payload" });
  }

  const seen = new Set<string>();
  const dedupedEnvs: string[] = [];
  for (const env of environments) {
    if (!seen.has(env)) {
      seen.add(env);
      dedupedEnvs.push(env);
    }
  }

  const id = generateId();
  const createdAt = new Date().toISOString();
  const service: Service = {
    id,
    name,
    repository,
    environments: dedupedEnvs,
    maxAttempts,
    backoffSeconds,
    createdAt,
  };
  services.push(service);

  return res.status(201).json(service);
});

app.get("/api/services", (_req: Request, res: Response) => {
  return res.json({ services });
});

app.post("/api/deployments", (req: Request, res: Response) => {
  const { serviceId, environment, commitHash, now } = req.body ?? {};

  const timeResult = nowOrError(now);
  if (!timeResult.ok) {
    return res.status(400).json({ error: timeResult.error });
  }
  const nowDate = timeResult.date;

  if (
    typeof serviceId !== "string" ||
    typeof environment !== "string" ||
    typeof commitHash !== "string" ||
    commitHash.trim() === ""
  ) {
    return res.status(400).json({ error: "Invalid deployment payload" });
  }

  const service = findService(serviceId);
  if (!service) {
    return res.status(404).json({ error: "Service not found" });
  }

  if (!service.environments.includes(environment)) {
    return res
      .status(400)
      .json({ error: "Environment not part of service environments" });
  }

  const existing = deployments.find(
    (d) =>
      d.serviceId === serviceId &&
      d.environment === environment &&
      d.commitHash === commitHash
  );
  if (existing) {
    return res.status(200).json(existing);
  }

  const envIndex = service.environments.indexOf(environment);
  if (envIndex > 0) {
    const prevEnv = service.environments[envIndex - 1];
    const hasLivePrev = deployments.some(
      (d) =>
        d.serviceId === serviceId &&
        d.environment === prevEnv &&
        d.commitHash === commitHash &&
        d.status === "LIVE"
    );
    if (!hasLivePrev) {
      return res
        .status(400)
        .json({ error: "Promotion rule violated: previous env not LIVE" });
    }
  }

  const id = generateId();
  const createdAtIso = nowDate.toISOString();
  const deployment: Deployment = {
    id,
    serviceId,
    environment,
    commitHash,
    status: "PENDING",
    attempts: 0,
    createdAt: createdAtIso,
    claimedAt: null,
    completedAt: null,
    nextAttemptAt: createdAtIso,
  };
  deployments.push(deployment);
  addHistory(id, "CREATED", nowDate, 0);

  return res.status(201).json(deployment);
});

app.get("/api/deployments/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const deployment = findDeployment(id as string);
  if (!deployment) {
    return res.status(404).json({ error: "Deployment not found" });
  }
  return res.json(deployment);
});

app.post("/api/deployments/claim", (req: Request, res: Response) => {
  const { now } = req.body ?? {};
  const timeResult = nowOrError(now);
  if (!timeResult.ok) {
    return res.status(400).json({ error: timeResult.error });
  }
  const nowDate = timeResult.date;
  const nowIso = nowDate.toISOString();

  const due = deployments
    .filter(
      (d) =>
        d.status === "PENDING" &&
        d.nextAttemptAt !== null &&
        d.nextAttemptAt <= nowIso
    )
    .sort((a, b) => {
      if (a.nextAttemptAt === b.nextAttemptAt) {
        return a.createdAt.localeCompare(b.createdAt);
      }
      if (a.nextAttemptAt === null) return 1;
      if (b.nextAttemptAt === null) return -1;
      return a.nextAttemptAt.localeCompare(b.nextAttemptAt);
    });

  if (due.length === 0) {
    return res.status(204).send();
  }

  const deployment = due[0];
  deployment.status = "DEPLOYING";
  deployment.attempts += 1;
  deployment.claimedAt = nowIso;
  addHistory(deployment.id, "CLAIMED", nowDate, deployment.attempts);

  return res.json({ deployment });
});

app.post("/api/deployments/:id/complete", (req: Request, res: Response) => {
  const { id } = req.params;
  const { now } = req.body ?? {};

  const deployment = findDeployment(id as string);
  if (!deployment) {
    return res.status(404).json({ error: "Deployment not found" });
  }
  if (deployment.status !== "DEPLOYING") {
    return res
      .status(400)
      .json({ error: "Deployment must be DEPLOYING to complete" });
  }

  const timeResult = nowOrError(now);
  if (!timeResult.ok) {
    return res.status(400).json({ error: timeResult.error });
  }
  const nowDate = timeResult.date;
  const nowIso = nowDate.toISOString();

  deployments.forEach((d) => {
    if (
      d.id !== deployment.id &&
      d.serviceId === deployment.serviceId &&
      d.environment === deployment.environment &&
      d.status === "LIVE"
    ) {
      d.status = "SUPERSEDED";
      addHistory(d.id, "SUPERSEDED", nowDate, d.attempts);
    }
  });

  deployment.status = "LIVE";
  deployment.completedAt = nowIso;
  deployment.nextAttemptAt = null;
  addHistory(deployment.id, "DEPLOYED", nowDate, deployment.attempts);

  return res.json(deployment);
});

app.post("/api/deployments/:id/fail", (req: Request, res: Response) => {
  const { id } = req.params;
  const { error, now } = req.body ?? {};

  const deployment = findDeployment(id as string);
  if (!deployment) {
    return res.status(404).json({ error: "Deployment not found" });
  }
  if (deployment.status !== "DEPLOYING") {
    return res
      .status(400)
      .json({ error: "Deployment must be DEPLOYING to fail" });
  }
  if (typeof error !== "string" || error.trim() === "") {
    return res.status(400).json({ error: "Error message is required" });
  }

  const timeResult = nowOrError(now);
  if (!timeResult.ok) {
    return res.status(400).json({ error: timeResult.error });
  }
  const nowDate = timeResult.date;

  deployment.lastError = error;

  const service = findService(deployment.serviceId);
  if (!service) {
    return res.status(404).json({ error: "Service not found" });
  }

  if (deployment.attempts < service.maxAttempts) {
    deployment.status = "PENDING";
    deployment.claimedAt = null;
    const retrySeconds = deployment.attempts * service.backoffSeconds;
    const nextDate = new Date(nowDate.getTime() + retrySeconds * 1000);
    deployment.nextAttemptAt = nextDate.toISOString();
    addHistory(deployment.id, "FAILED", nowDate, deployment.attempts);
  } else {
    deployment.status = "DEAD";
    deployment.completedAt = nowDate.toISOString();
    deployment.nextAttemptAt = null;
    addHistory(deployment.id, "FAILED", nowDate, deployment.attempts);
    addHistory(deployment.id, "DEAD", nowDate, deployment.attempts);
  }

  return res.json(deployment);
});

app.post("/api/deployments/:id/rollback", (req: Request, res: Response) => {
  const { id } = req.params;
  const { now } = req.body ?? {};

  const current = findDeployment(id as string);
  if (!current) {
    return res.status(404).json({ error: "Deployment not found" });
  }
  if (current.status !== "LIVE") {
    return res
      .status(400)
      .json({ error: "Deployment must be LIVE to rollback" });
  }

  const timeResult = nowOrError(now);
  if (!timeResult.ok) {
    return res.status(400).json({ error: timeResult.error });
  }
  const nowDate = timeResult.date;

  const candidates = deployments
    .filter(
      (d) =>
        d.serviceId === current.serviceId &&
        d.environment === current.environment &&
        d.status === "SUPERSEDED"
    )
    .sort((a, b) => a.createdAt.localeCompare(b.createdAt));

  if (candidates.length === 0) {
    return res.status(400).json({ error: "No deployment to roll back to" });
  }

  const revived = candidates[candidates.length - 1];
  revived.status = "LIVE";
  addHistory(revived.id, "REVIVED", nowDate, revived.attempts);

  current.status = "ROLLED_BACK";
  addHistory(current.id, "ROLLED_BACK", nowDate, current.attempts);

  return res.json({ rolledBack: current, revived });
});

app.get(
  "/api/services/:id/deployments",
  (req: Request, res: Response): void => {
    const { id } = req.params;
    const { environment, status } = req.query;

    const service = findService(id as string);
    if (!service) {
      res.status(404).json({ error: "Service not found" });
      return;
    }

    let list = deployments.filter((d) => d.serviceId === (id as string));

    if (typeof environment === "string") {
      list = list.filter((d) => d.environment === environment);
    }

    if (typeof status === "string") {
      list = list.filter((d) => d.status === status);
    }

    list.sort((a, b) => a.createdAt.localeCompare(b.createdAt));

    res.json({ deployments: list });
  }
);

app.get("/api/deployments/:id/history", (req: Request, res: Response) => {
  const { id } = req.params;
  const deployment = findDeployment(id as string);
  if (!deployment) {
    return res.status(404).json({ error: "Deployment not found" });
  }
  const history = deploymentHistories[id as string] || [];
  const sorted = [...history].sort((a, b) => a.at.localeCompare(b.at));
  return res.json({ history: sorted });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
