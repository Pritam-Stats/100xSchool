import {
  Proposal,
  CreateProposalRequest,
  ApproveRequest,
  CancelRequest,
} from "../types";
import { vaults, proposals } from "../storage";
import { verifySignature } from "../utils/crypto";
import {
  validateTransferParams,
  validateSetDataParams,
  validateMemoParams,
} from "../utils/validation";

export function createProposal(
  vaultId: string,
  request: CreateProposalRequest,
): Proposal | null {
  const vault = vaults.get(vaultId);
  if (!vault) return null;

  let params: any;
  if (request.action === "transfer") {
    if (!validateTransferParams(request.params)) return null;
    params = request.params as { to: string; amount: number };
  } else if (request.action === "set_data") {
    if (!validateSetDataParams(request.params)) return null;
    params = request.params as { key: string; value: string };
  } else if (request.action === "memo") {
    if (!validateMemoParams(request.params)) return null;
    params = request.params as { content: string };
  } else {
    return null;
  }

  const vaultProposals = proposals.get(vaultId) || new Map<number, Proposal>();
  const proposalId = vaultProposals.size + 1;

  const proposal: Proposal = {
    id: proposalId,
    vaultId,
    proposer: request.proposer,
    action: request.action as "transfer" | "set_data" | "memo",
    params,
    status: "pending",
    signatures: [],
    createdAt: new Date().toISOString(),
  };

  vaultProposals.set(proposalId, proposal);
  proposals.set(vaultId, vaultProposals);
  vault.proposalCount++;
  return proposal;
}

export function approveProposal(
  vaultId: string,
  proposalId: number,
  request: ApproveRequest,
): Proposal | null {
  const vault = vaults.get(vaultId);
  const vaultProposals = proposals.get(vaultId);
  if (!vault || !vaultProposals) return null;

  const proposal = vaultProposals.get(proposalId);
  if (!proposal) return null;

  const message = `approve:${proposalId}`;
  if (!verifySignature(message, request.signature, request.signer)) return null;

  proposal.signatures.push({
    signer: request.signer,
    createdAt: new Date().toISOString(),
  });

  // Check threshold
  if (proposal.signatures.length >= vault.threshold) {
    proposal.status = "executed";
    proposal.executedAt = new Date().toISOString();
    executeProposal(vault, proposal);
  }

  return proposal;
}

export function cancelProposal(
  vaultId: string,
  proposalId: number,
  request: CancelRequest,
): Proposal | null {
  const vaultProposals = proposals.get(vaultId);
  if (!vaultProposals) return null;

  const proposal = vaultProposals.get(proposalId);
  if (!proposal) return null;

  const message = `cancel:${proposalId}`;
  if (!verifySignature(message, request.signature, request.signer)) return null;

  proposal.status = "cancelled";
  return proposal;
}

export function getProposal(
  vaultId: string,
  proposalId: number,
): Proposal | null {
  const vaultProposals = proposals.get(vaultId);
  return vaultProposals?.get(proposalId) || null;
}

export function listProposals(vaultId: string, status?: string): Proposal[] {
  const vaultProposals = proposals.get(vaultId);
  if (!vaultProposals) return [];

  const allProposals = Array.from(vaultProposals.values());
  if (!status) return allProposals;
  return allProposals.filter((p) => p.status === status);
}

function executeProposal(vault: any, proposal: Proposal): void {
  if (proposal.action === "set_data") {
    const params = proposal.params as { key: string; value: string };
    vault.data.set(params.key, params.value);
  }
  // transfer and memo are simulated, just mark as executed
}
