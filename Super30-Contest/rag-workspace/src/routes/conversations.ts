import { Router } from "express";
import { HttpError } from "../errors";
import {
  conversations,
  generateConversationId,
  generateMessageId,
  nowIso,
} from "../store";
import type { Conversation, Message } from "../types";
import { buildAnswer } from "../services/answers";
import { parseOptionalTag, parseTopK, requireNonEmptyString } from "../validate";

export const conversationsRouter = Router();

conversationsRouter.post("/conversations", (req, res) => {
  const name = requireNonEmptyString(req.body?.name, "name");
  const createdAt = nowIso();
  const conv: Conversation = {
    id: generateConversationId(),
    name,
    createdAt,
    messages: [],
  };
  conversations.set(conv.id, conv);
  res.status(201).json({ id: conv.id, name: conv.name, messages: [] });
});

conversationsRouter.get("/conversations/:id", (req, res) => {
  const conv = conversations.get(req.params.id);
  if (!conv) throw new HttpError(404, "Conversation not found");
  res.json(conv);
});

conversationsRouter.post("/conversations/:id/messages", (req, res) => {
  const conv = conversations.get(req.params.id);
  if (!conv) throw new HttpError(404, "Conversation not found");

  const query = requireNonEmptyString(req.body?.query, "query");
  const topK = parseTopK(req.body?.topK);
  const tag = parseOptionalTag(req.body?.tag);

  const userMessage: Message = {
    id: generateMessageId(),
    role: "user",
    content: query,
    createdAt: nowIso(),
  };
  conv.messages.push(userMessage);

  const { answer, citations } = buildAnswer({ query, topK, tag });
  const assistantMessage: Message = {
    id: generateMessageId(),
    role: "assistant",
    content: answer,
    createdAt: nowIso(),
    citations,
  };
  conv.messages.push(assistantMessage);

  res.status(201).json({ userMessage, assistantMessage, citations });
});

