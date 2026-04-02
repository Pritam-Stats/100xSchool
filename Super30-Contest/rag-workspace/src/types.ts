export type ISOString = string;

export type DocumentVersion = {
  version: number;
  title: string;
  content: string;
  tags: string[];
  updatedAt: ISOString;
};

export type Document = {
  id: string;
  title: string;
  content: string;
  tags: string[];
  version: number;
  createdAt: ISOString;
  updatedAt: ISOString;
  history: DocumentVersion[];
};

export type SearchRequest = {
  query: string;
  topK?: number;
  tag?: string;
};

export type SearchResult = {
  documentId: string;
  title: string;
  version: number;
  score: number;
  snippet: string;
};

export type Citation = {
  rank: number;
  documentId: string;
  score: number;
  snippet: string;
};

export type MessageRole = "user" | "assistant";

export type Message = {
  id: string;
  role: MessageRole;
  content: string;
  createdAt: ISOString;
  citations?: Citation[];
};

export type Conversation = {
  id: string;
  name: string;
  createdAt: ISOString;
  messages: Message[];
};

export type AnswersResponse = {
  answer: string;
  citations: Citation[];
};
