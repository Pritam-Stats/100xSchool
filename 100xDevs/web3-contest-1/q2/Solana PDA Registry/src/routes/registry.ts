import { Router } from "express";
import { registryService } from "../services/registryService.js";

const router = Router();

// POST /api/registry/register
router.post("/register", (req, res) => {
  const { name, programId, owner } = req.body;
  const result = registryService.registerTopLevel(name, programId, owner);
  res.status(result.status).json(result.success ? result.data : { error: result.error });
});

// GET /api/registry/resolve/:programId/:name
router.get("/resolve/:programId/:name", (req, res) => {
  const { programId, name } = req.params;
  const result = registryService.resolveTopLevel(programId, name);
  res.status(result.status).json(result.success ? result.data : { error: result.error });
});

// POST /api/registry/sub/register
router.post("/sub/register", (req, res) => {
  const { parentName, subName, programId, owner } = req.body;
  const result = registryService.registerSub(parentName, subName, programId, owner);
  res.status(result.status).json(result.success ? result.data : { error: result.error });
});

// GET /api/registry/sub/resolve/:programId/:parentName/:subName
router.get("/sub/resolve/:programId/:parentName/:subName", (req, res) => {
  const { programId, parentName, subName } = req.params;
  const result = registryService.resolveSub(programId, parentName, subName);
  res.status(result.status).json(result.success ? result.data : { error: result.error });
});

// POST /api/registry/transfer
router.post("/transfer", (req, res) => {
  const { programId, name, newOwner, signature, message } = req.body;
  const result = registryService.transfer(programId, name, newOwner, signature, message);
  res.status(result.status).json(result.success ? result.data : { error: result.error });
});

// POST /api/registry/verify
router.post("/verify", (req, res) => {
  const { address, programId, seeds } = req.body;
  const result = registryService.verify(address, programId, seeds);
  res.status(result.status).json(result.success ? result.data : { error: result.error });
});

// GET /api/registry/list/:programId
router.get("/list/:programId", (req, res) => {
  const { programId } = req.params;
  const { owner } = req.query;
  const result = registryService.listTopLevel(programId, owner as string);
  res.status(result.status).json(result.success ? result.data : { error: result.error });
});

// GET /api/registry/list/:programId/:name/subs
router.get("/list/:programId/:name/subs", (req, res) => {
  const { programId, name } = req.params;
  const result = registryService.listSubs(programId, name);
  res.status(result.status).json(result.success ? result.data : { error: result.error });
});

export default router;