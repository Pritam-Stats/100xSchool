---
name: deployment-pipeline-api
overview: Implement an in-memory Express REST API to manage services and deployments with promotion rules, retries with backoff, rollbacks, and history tracking.
todos:
  - id: model-data
    content: Define TypeScript models and in-memory stores for services, deployments, and histories in src/index.ts
    status: completed
  - id: helpers
    content: Implement ID, time validation, and history helper utilities
    status: completed
  - id: services-endpoints
    content: Implement POST/GET /api/services endpoints with validation and environment deduplication
    status: completed
  - id: deployments-core
    content: Implement POST /api/deployments and GET /api/deployments/:id with promotion rule and idempotency
    status: completed
  - id: deployments-claim-complete-fail
    content: Implement POST /api/deployments/claim, /api/deployments/:id/complete, and /api/deployments/:id/fail with retries and backoff
    status: completed
  - id: deployments-rollback-history-listing
    content: Implement POST /api/deployments/:id/rollback, GET /api/services/:id/deployments, and GET /api/deployments/:id/history
    status: completed
  - id: validation-error-handling
    content: Standardize validation, 400/404 responses, and timestamp serialization
    status: completed
isProject: false
---

### Overview

We will extend the existing Express server to implement all required endpoints for services and deployments, using in-memory data structures for storage and carefully enforcing promotion rules, retry/backoff logic, rollbacks, and history tracking.

### Data modelling

- **Define TypeScript types/interfaces** in `src/index.ts` (or a small `src/types.ts` if needed) for:
  - **Service**: `id`, `name`, `repository`, `environments` (deduped ordered list), `maxAttempts`, `backoffSeconds`, `createdAt`.
  - **DeploymentStatus**: union of `"PENDING" | "DEPLOYING" | "LIVE" | "SUPERSEDED" | "DEAD" | "ROLLED_BACK"`.
  - **HistoryEventType**: union of event types from the README.
  - **Deployment**: `id`, `serviceId`, `environment`, `commitHash`, status, `attempts`, timestamp fields (`createdAt`, `claimedAt?`, `completedAt?`, `nextAttemptAt?`), error fields (`lastError?`).
  - **DeploymentHistoryEntry**: `{ type, at, attempt }`.
- **In-memory stores** (module-level variables) in `src/index.ts`:
  - `services: Service[]` (preserve insertion order and implicit IDs).
  - `deployments: Deployment[]`.
  - `deploymentHistories: Map<string, DeploymentHistoryEntry[]>` or plain object keyed by deployment id.

### Utility helpers

- **ID and time utilities**:
  - Helper `generateId()` for unique string IDs (e.g., incremental counter or timestamp-based).
  - Helper `nowOrValidate(bodyNow?: string): Date | { errorCode, message }` that:
    - Uses current time when `bodyNow` is missing.
    - Validates that provided `now` is a full ISO datetime with timezone; if invalid, signals a `400` error.
- **History helper**:
  - `addHistory(deploymentId, type, at, attempt)` to append a history entry and keep entries sorted by `at`.
- **Lookup helpers**:
  - `findServiceOr404(id)` and `findDeploymentOr404(id)` to centralize `404` behavior.

### Endpoint: Health

- **GET `/api/health`**:
  - Already implemented; keep as-is, ensure it returns `200` with `{ status: "ok" }`.

### Endpoints: Services

- **POST `/api/services`**:
  - Parse and validate body: non-empty `name`, `repository`, `environments` (non-empty array of strings), positive integer `maxAttempts`, positive integer `backoffSeconds`.
  - Deduplicate `environments` while preserving first-occurrence order.
  - Create a new `Service` with generated `id` and `createdAt` timestamp.
  - Push to `services` array and return `201` with the created service.
- **GET `/api/services`**:
  - Return `200` with `{ services }` using insertion order preserved by the array.

### Endpoints: Deployments creation and retrieval

- **POST `/api/deployments`**:
  - Validate body: `serviceId`, `environment`, `commitHash`, and optional `now` via the helper.
  - Ensure service exists and `environment` is in the service’s `environments` list.
  - Enforce **promotion rule**:
    - If `environment` is not the first in that list, find a `LIVE` deployment for same `(serviceId, commitHash)` in the immediately preceding environment; if none, return `400`.
  - Enforce **idempotency**:
    - Check if a deployment already exists with that `(serviceId, environment, commitHash)`; if so, return `200` with the existing deployment.
  - On first create:
    - Status `PENDING`, `attempts = 0`, `createdAt = now`, `nextAttemptAt = now`, `claimedAt`, `completedAt`, `lastError` unset.
    - Add to `deployments` array and create initial history entry `CREATED` with `attempt = 0`.
    - Return `201` with the new deployment.
- **GET `/api/deployments/:id`**:
  - Look up deployment by id, return `200` with it or `404` if not found.

### Endpoint: Claim next deployment

- **POST `/api/deployments/claim`**:
  - Parse and validate optional `now` via helper.
  - Filter `deployments` for status `PENDING` and `nextAttemptAt <= now`.
  - Sort filtered list by `nextAttemptAt` ascending, tie-break `createdAt` ascending.
  - If none due, return `204` with no body.
  - For the first due deployment:
    - Increment `attempts` by 1.
    - Set status to `DEPLOYING`, `claimedAt = now` (and keep `nextAttemptAt` as-is until changed by success/fail), ensure `completedAt` unchanged.
    - Add history entry `CLAIMED` with current `attempts` value.
    - Return `200` with `{ deployment }`.

### Endpoints: Complete and fail deployments

- **POST `/api/deployments/:id/complete`**:
  - Parse and validate optional `now`.
  - Ensure deployment exists and status is `DEPLOYING`; otherwise `400`.
  - Set status to `LIVE`, `completedAt = now`, `nextAttemptAt = null`.
  - Find any previous deployment in `deployments` with same `(serviceId, environment)` and status `LIVE`; if found, set that deployment’s status to `SUPERSEDED` and append `SUPERSEDED` history for that deployment.
  - For the completed deployment, append `DEPLOYED` history (and possibly `REVIVED` or `SUPERSEDED` for others as appropriate).
  - Return `200` with updated deployment.
- **POST `/api/deployments/:id/fail`**:
  - Parse and validate body with required non-empty `error` string and optional `now`.
  - Ensure deployment exists and status is `DEPLOYING`; otherwise `400`.
  - Store `lastError = error`.
  - If `attempts < maxAttempts` (from related service):
    - Set status to `PENDING`, clear `claimedAt`, keep `completedAt` unset.
    - Compute `nextAttemptAt = now + attempts * backoffSeconds` seconds, using the current attempt count.
    - Add `FAILED` history entry.
  - Else (no retries left):
    - Set status to `DEAD`, `completedAt = now`, `nextAttemptAt = null`.
    - Add `FAILED` and `DEAD` history entries, or a single `DEAD` entry including failure semantics (we will follow the README by adding both `FAILED` and then `DEAD`).
  - Return `200` with the updated deployment.

### Endpoint: Rollback

- **POST `/api/deployments/:id/rollback`**:
  - Parse and validate optional `now`.
  - Ensure deployment exists and status is `LIVE`; otherwise `400`.
  - Among `deployments` for same `(serviceId, environment)` with status `SUPERSEDED`, find the most recent by `createdAt` or `completedAt` (we will use `createdAt` as history is separately tracked).
  - If none found, return `400` with appropriate message.
  - Otherwise:
    - Set the found deployment’s status to `LIVE` and append `REVIVED` history with its current `attempts`.
    - Set the current deployment’s status to `ROLLED_BACK` and append `ROLLED_BACK` history.
  - Return `200` with `{ rolledBack, revived }` payload as specified.

### Endpoints: Service deployments & deployment history

- **GET `/api/services/:id/deployments`**:
  - Look up service; if not found, return `404`.
  - From `deployments`, filter those with matching `serviceId`.
  - Apply optional query filters `environment` and `status` if provided.
  - Sort the filtered list by `createdAt` ascending (insertion order in the array already ensures this if we never reorder).
  - Return `200` with `{ deployments: [...] }`.
- **GET `/api/deployments/:id/history`**:
  - Ensure deployment exists; if not, `404`.
  - Look up its history list; if missing, treat as empty array.
  - Sort by `at` ascending (either on insert or at read-time; we can maintain insertion order already sorted by `at`).
  - Return `200` with `{ history }`.

### Error handling & validation

- **Shared validation behavior**:
  - For any endpoint that accepts `now`, validate using the helper and respond with `400` and a descriptive error when invalid.
  - For missing service or deployment IDs, always return `404` with a simple message like `{ error: "Service not found" }` or `{ error: "Deployment not found" }`.
  - For invalid state transitions (e.g. completing a non-`DEPLOYING` deployment, rolling back a non-`LIVE` deployment), return `400` with informative error.
  - Ensure timestamps in all responses are serialized as ISO strings via `toISOString()`.

### Implementation approach

- **Single-file implementation** in `src/index.ts` for simplicity, using module-level state for services, deployments, and histories.
- **Incremental build**:
  1. Implement data models and helpers.
  2. Implement services endpoints and basic deployments creation & retrieval.
  3. Add claim/complete/fail logic with retries and backoff.
  4. Add rollback, history, and service deployments listing.
  5. Do a quick manual test of each endpoint with `curl` or a REST client using the documented flows.
- We will ensure that all new code adheres to TypeScript typing and Express patterns as already set up by the starter.

