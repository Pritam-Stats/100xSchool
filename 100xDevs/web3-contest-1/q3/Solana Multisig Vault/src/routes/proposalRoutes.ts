import { Router } from "express";
import {
  createProposal,
  approveProposal,
  cancelProposal,
  getProposal,
  listProposals,
} from "../services/proposalService";
import { vaults, proposals } from "../storage";
import { CreateProposalRequest, ApproveRequest, CancelRequest } from "../types";

const router = Router({ mergeParams: true });

router.post("/propose", (req, res) => {
  const vaultId = req.params.vaultId;
  const request: CreateProposalRequest = req.body;
  const vault = vaults.get(vaultId);
  if (!vault) {
    return res.status(404).json({ error: "Vault not found" });
  }
  if (!vault.signers.includes(request.proposer)) {
    return res.status(403).json({ error: "Not a vault signer" });
  }
  const proposal = createProposal(vaultId, request);
  if (!proposal) {
    return res.status(400).json({ error: "Invalid action or params" });
  }
  res.status(201).json(proposal);
});

router.post("/proposals/:proposalId/approve", (req, res) => {
  const vaultId = req.params.vaultId;
  const proposalId = parseInt(req.params.proposalId);
  const request: ApproveRequest = req.body;

  const vault = vaults.get(vaultId);
  if (!vault) {
    return res.status(404).json({ error: "Vault not found" });
  }

  const vaultProposals = proposals.get(vaultId);
  if (!vaultProposals) {
    return res.status(404).json({ error: "Vault not found" });
  }

  const proposal = vaultProposals.get(proposalId);
  if (!proposal) {
    return res.status(404).json({ error: "Proposal not found" });
  }

  if (proposal.status !== "pending") {
    return res.status(409).json({ error: "Proposal already executed" });
  }

  if (!vault.signers.includes(request.signer)) {
    return res.status(403).json({ error: "Not a vault signer" });
  }

  if (proposal.signatures.some((s) => s.signer === request.signer)) {
    return res.status(409).json({ error: "Already signed" });
  }

  const updatedProposal = approveProposal(vaultId, proposalId, request);
  if (!updatedProposal) {
    return res.status(400).json({ error: "Invalid signature" });
  }

  res.json(updatedProposal);
});

router.get("/proposals", (req, res) => {
  const vaultId = req.params.vaultId;
  const status = req.query.status as string | undefined;
  if (status && !["pending", "executed", "cancelled"].includes(status)) {
    return res.status(400).json({ error: "Invalid status filter" });
  }
  const proposalsList = listProposals(vaultId, status);
  res.json(proposalsList);
});

router.get("/proposals/:proposalId", (req, res) => {
  const vaultId = req.params.vaultId;
  const proposalId = parseInt(req.params.proposalId);
  const proposal = getProposal(vaultId, proposalId);
  if (!proposal) {
    return res.status(404).json({ error: "Proposal not found" });
  }
  res.json(proposal);
});

router.post("/proposals/:proposalId/cancel", (req, res) => {
  const vaultId = req.params.vaultId;
  const proposalId = parseInt(req.params.proposalId);
  const request: CancelRequest = req.body;

  const vault = vaults.get(vaultId);
  if (!vault) {
    return res.status(404).json({ error: "Vault not found" });
  }

  const vaultProposals = proposals.get(vaultId);
  if (!vaultProposals) {
    return res.status(404).json({ error: "Vault not found" });
  }

  const proposal = vaultProposals.get(proposalId);
  if (!proposal) {
    return res.status(404).json({ error: "Proposal not found" });
  }

  if (proposal.status !== "pending") {
    const error =
      proposal.status === "executed"
        ? "Proposal already executed"
        : "Proposal already cancelled";
    return res.status(409).json({ error });
  }

  if (request.signer !== proposal.proposer) {
    return res.status(403).json({ error: "Only the proposer can cancel" });
  }

  const updatedProposal = cancelProposal(vaultId, proposalId, request);
  if (!updatedProposal) {
    return res.status(400).json({ error: "Invalid signature" });
  }

  res.json(updatedProposal);
});

export default router;
