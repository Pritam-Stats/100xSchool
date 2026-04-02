import type { AnswersResponse, Citation, SearchRequest } from "../types";
import { searchDocuments } from "../retrieval";

export function buildAnswer(req: SearchRequest): AnswersResponse {
  const results = searchDocuments(req);

  if (results.length === 0) {
    return { answer: "No relevant context found.", citations: [] };
  }

  const citations: Citation[] = results.map((r, idx) => ({
    rank: idx + 1,
    documentId: r.documentId,
    score: r.score,
    snippet: r.snippet,
  }));

  const answerLines = ["Relevant context:"];
  for (const c of citations) {
    answerLines.push(`[${c.rank}] ${c.snippet}`);
  }

  return { answer: answerLines.join("\n"), citations };
}
