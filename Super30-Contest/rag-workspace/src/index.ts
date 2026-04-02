import express from "express";
import { isHttpError } from "./errors";
import { answersRouter } from "./routes/answers";
import { conversationsRouter } from "./routes/conversations";
import { documentsRouter } from "./routes/documents";
import { searchRouter } from "./routes/search";

const app = express();
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api", documentsRouter);
app.use("/api", searchRouter);
app.use("/api", answersRouter);
app.use("/api", conversationsRouter);

app.use((err: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  if (isHttpError(err)) {
    const status = (err as any).status ?? 500;
    const message = (err as any).message ?? "Error";
    return res.status(status).json({ error: message });
  }
  console.error(err);
  return res.status(500).json({ error: "Internal Server Error" });
});

const port = Number(process.env.PORT) || 3000;
const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

server.on("error", (err: any) => {
  if (err?.code === "EADDRINUSE") {
    console.error(
      `Port ${port} is already in use. Try: PORT=3001 npm start (or stop the other process).`,
    );
    process.exit(1);
  }
  throw err;
});
