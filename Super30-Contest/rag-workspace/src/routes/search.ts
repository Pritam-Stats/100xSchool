import { Router } from "express";
import { searchDocuments } from "../retrieval";
import { parseOptionalTag, parseTopK, requireNonEmptyString } from "../validate";

export const searchRouter = Router();

searchRouter.post("/search", (req, res) => {
  const query = requireNonEmptyString(req.body?.query, "query");
  const topK = parseTopK(req.body?.topK);
  const tag = parseOptionalTag(req.body?.tag);

  const results = searchDocuments({ query, topK, tag });
  res.json({ results });
});

