import type { Conversation, Document, ISOString, Message } from "./types";

export const documents = new Map<string, Document>();
export const conversations = new Map<string, Conversation>();

let docCounter = 1;
let convCounter = 1;
let msgCounter = 1;

export function generateDocumentId(): string {
  return `doc_${docCounter++}`;
}

export function generateConversationId(): string {
  return `conv_${convCounter++}`;
}

export function generateMessageId(): string {
  return `msg_${msgCounter++}`;
}

export function nowIso(): ISOString {
  return new Date().toISOString();
}

export function assertNever(_x: never): never {
  throw new Error("Unreachable");
}

export function cloneMessage(m: Message): Message {
  return {
    ...m,
    citations: m.citations ? m.citations.map((c) => ({ ...c })) : undefined,
  };
}
