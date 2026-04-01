import { Router } from "express";
import { createVault, getVault } from "../services/vaultService";
import { CreateVaultRequest } from "../types";

const router = Router();

router.post("/create", (req, res) => {
  const request: CreateVaultRequest = req.body;
  const result = createVault(request);
  if (result.error === "invalid_inputs") {
    return res.status(400).json({ error: "Invalid inputs" });
  }
  if (result.error === "duplicate_vault") {
    return res
      .status(409)
      .json({ error: "Vault with same signer set already exists" });
  }
  const vault = result.vault!;
  res.status(201).json({
    id: vault.id,
    label: vault.label,
    address: vault.address,
    threshold: vault.threshold,
    bump: vault.bump,
    signers: vault.signers,
    createdAt: vault.createdAt,
  });
});

router.get("/:vaultId", (req, res) => {
  const vault = getVault(req.params.vaultId);
  if (!vault) {
    return res.status(404).json({ error: "Vault not found" });
  }
  res.json({
    id: vault.id,
    label: vault.label,
    address: vault.address,
    threshold: vault.threshold,
    bump: vault.bump,
    signers: vault.signers,
    proposalCount: vault.proposalCount,
    createdAt: vault.createdAt,
  });
});

export default router;
