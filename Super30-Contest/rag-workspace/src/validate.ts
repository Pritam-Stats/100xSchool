import { HttpError } from "./errors";

export function requireNonEmptyString(value: unknown, field: string): string {
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new HttpError(400, `${field} must be a non-empty string`);
  }
  return value;
}

export function parseTags(value: unknown): string[] {
  if (value === undefined) return [];
  if (!Array.isArray(value)) {
    throw new HttpError(400, "tags must be an array of non-empty strings");
  }
  const tags: string[] = [];
  for (const t of value) {
    if (typeof t !== "string" || t.trim().length === 0) {
      throw new HttpError(400, "tags must be an array of non-empty strings");
    }
    tags.push(t);
  }
  return tags;
}

export function parseTopK(value: unknown): number | undefined {
  if (value === undefined) return undefined;
  if (typeof value !== "number" || !Number.isInteger(value) || value < 1 || value > 10) {
    throw new HttpError(400, "topK must be an integer from 1 to 10");
  }
  return value;
}

export function parseOptionalTag(value: unknown): string | undefined {
  if (value === undefined) return undefined;
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new HttpError(400, "tag must be a non-empty string");
  }
  return value;
}
