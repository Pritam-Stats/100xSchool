import { Router } from "express";
import { HttpError } from "../errors";
import { documents, generateDocumentId, nowIso } from "../store";
import type { Document } from "../types";
import { parseTags, requireNonEmptyString } from "../validate";

export const documentsRouter = Router();

documentsRouter.post("/documents", (req, res) => {
  const title = requireNonEmptyString(req.body?.title, "title");
  const content = requireNonEmptyString(req.body?.content, "content");
  const tags = parseTags(req.body?.tags);

  const createdAt = nowIso();
  const doc: Document = {
    id: generateDocumentId(),
    title,
    content,
    tags,
    version: 1,
    createdAt,
    updatedAt: createdAt,
    history: [
      {
        version: 1,
        title,
        content,
        tags,
        updatedAt: createdAt,
      },
    ],
  };

  documents.set(doc.id, doc);
  res.status(201).json(doc);
});

documentsRouter.get("/documents/:id", (req, res) => {
  const doc = documents.get(req.params.id);
  if (!doc) throw new HttpError(404, "Document not found");
  res.json(doc);
});

documentsRouter.get("/documents/:id/history", (req, res) => {
  const doc = documents.get(req.params.id);
  if (!doc) throw new HttpError(404, "Document not found");
  const versions = [...doc.history].sort((a, b) => a.version - b.version);
  res.json({ versions });
});

documentsRouter.put("/documents/:id", (req, res) => {
  const doc = documents.get(req.params.id);
  if (!doc) throw new HttpError(404, "Document not found");

  const title = requireNonEmptyString(req.body?.title, "title");
  const content = requireNonEmptyString(req.body?.content, "content");
  const tags = parseTags(req.body?.tags);

  const updatedAt = nowIso();
  const nextVersion = doc.version + 1;

  doc.title = title;
  doc.content = content;
  doc.tags = tags;
  doc.version = nextVersion;
  doc.updatedAt = updatedAt;
  doc.history.push({
    version: nextVersion,
    title,
    content,
    tags,
    updatedAt,
  });

  res.json(doc);
});

