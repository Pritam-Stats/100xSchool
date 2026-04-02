import type { Document, SearchRequest, SearchResult } from "./types";
import { documents } from "./store";
import { HttpError } from "./errors";

export function tokenize(text: string): string[] {
  return text.toLowerCase().match(/[a-z0-9]+/g) ?? [];
}

export function uniquePreserveOrder(tokens: string[]): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const t of tokens) {
    if (seen.has(t)) continue;
    seen.add(t);
    out.push(t);
  }
  return out;
}

function requireQueryTokens(query: string): { queryLower: string; queryTokens: string[] } {
  if (typeof query !== "string" || query.trim().length === 0) {
    throw new HttpError(400, "query must be a non-empty string");
  }
  const queryLower = query.toLowerCase();
  const queryTokens = uniquePreserveOrder(tokenize(query));
  if (queryTokens.length === 0) {
    throw new HttpError(400, "query must contain at least one alphanumeric token");
  }
  return { queryLower, queryTokens };
}

function parseTopK(topK: unknown): number {
  if (topK === undefined) return 3;
  if (typeof topK !== "number" || !Number.isInteger(topK) || topK < 1 || topK > 10) {
    throw new HttpError(400, "topK must be an integer from 1 to 10");
  }
  return topK;
}

function parseOptionalTag(tag: unknown): string | undefined {
  if (tag === undefined) return undefined;
  if (typeof tag !== "string" || tag.trim().length === 0) {
    throw new HttpError(400, "tag must be a non-empty string");
  }
  return tag;
}

function splitSegments(content: string): string[] {
  const segments: string[] = [];
  let buf = "";
  for (let i = 0; i < content.length; i++) {
    const ch = content[i];

    if (ch === "\n") {
      segments.push(buf);
      buf = "";
      continue;
    }

    if (ch === "!" || ch === "?") {
      segments.push(buf);
      buf = "";
      continue;
    }

    if (ch === "." && content[i + 1] === " ") {
      segments.push(buf);
      buf = "";
      i += 1;
      continue;
    }

    buf += ch;
  }
  segments.push(buf);
  return segments;
}

function makeSnippet(doc: Document, queryTokens: string[]): string {
  const tokensSet = new Set(queryTokens);
  const segments = splitSegments(doc.content);

  for (const seg of segments) {
    const trimmed = seg.trim();
    if (trimmed.length === 0) continue;
    const segTokens = tokenize(trimmed);
    for (const t of segTokens) {
      if (tokensSet.has(t)) {
        return trimmed.length > 160 ? trimmed.slice(0, 160) : trimmed;
      }
    }
  }

  const fallback = doc.content.slice(0, 160).trim();
  return fallback.length > 160 ? fallback.slice(0, 160) : fallback;
}

function scoreDocument(doc: Document, queryLower: string, queryTokens: string[]): number {
  const titleSet = new Set(tokenize(doc.title));
  const contentSet = new Set(tokenize(doc.content));

  let titleHits = 0;
  let contentHits = 0;
  for (const qt of queryTokens) {
    if (titleSet.has(qt)) titleHits += 1;
    if (contentSet.has(qt)) contentHits += 1;
  }

  let score = 3 * titleHits + 1 * contentHits;

  const titleLower = doc.title.toLowerCase();
  const contentLower = doc.content.toLowerCase();
  if (titleLower.includes(queryLower)) score += 2;
  if (contentLower.includes(queryLower)) score += 5;

  return score;
}

export function searchDocuments(req: SearchRequest): SearchResult[] {
  const { query, topK, tag } = req ?? ({} as SearchRequest);
  const { queryLower, queryTokens } = requireQueryTokens(query);
  const k = parseTopK(topK);
  const tagFilter = parseOptionalTag(tag);

  const scored: Array<{ doc: Document; score: number; snippet: string }> = [];

  for (const doc of documents.values()) {
    if (tagFilter && !doc.tags.includes(tagFilter)) continue;

    const score = scoreDocument(doc, queryLower, queryTokens);
    if (score === 0) continue;

    const snippet = makeSnippet(doc, queryTokens);
    scored.push({ doc, score, snippet });
  }

  scored.sort((a, b) => {
    if (a.score !== b.score) return b.score - a.score;
    if (a.doc.createdAt !== b.doc.createdAt) return a.doc.createdAt < b.doc.createdAt ? -1 : 1;
    if (a.doc.id !== b.doc.id) return a.doc.id < b.doc.id ? -1 : 1;
    return 0;
  });

  return scored.slice(0, k).map(({ doc, score, snippet }) => ({
    documentId: doc.id,
    title: doc.title,
    version: doc.version,
    score,
    snippet,
  }));
}
