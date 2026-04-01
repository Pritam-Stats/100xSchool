import { Vault, Proposal } from "./types";

export const vaults = new Map<string, Vault>();
export const proposals = new Map<string, Map<number, Proposal>>();
