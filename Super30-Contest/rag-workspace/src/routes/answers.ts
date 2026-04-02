import { Router } from "express";
import { buildAnswer } from "../services/answers";
import { parseOptionalTag, parseTopK, requireNonEmptyString } from "../validate";

export const answersRouter = Router();

answersRouter.post("/answers", (req, res) => {
  const query = requireNonEmptyString(req.body?.query, "query");
  const topK = parseTopK(req.body?.topK);
  const tag = parseOptionalTag(req.body?.tag);

  const out = buildAnswer({ query, topK, tag });
  res.json(out);
});

