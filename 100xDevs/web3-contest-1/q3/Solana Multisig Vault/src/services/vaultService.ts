import crypto from "crypto";
import { Vault, CreateVaultRequest } from "../types";
import { vaults } from "../storage";
import { deriveVaultAddress } from "../utils/pda";
import {
  validateSigners,
  validateThreshold,
  validateLabel,
} from "../utils/validation";

export interface CreateVaultResult {
  vault?: Vault;
  error?: "invalid_inputs" | "duplicate_vault";
}

export function createVault(request: CreateVaultRequest): CreateVaultResult {
  if (
    !validateSigners(request.signers) ||
    !validateThreshold(request.threshold, request.signers.length) ||
    !validateLabel(request.label)
  ) {
    return { error: "invalid_inputs" };
  }

  const { address, bump } = deriveVaultAddress(request.signers);

  // Check for duplicate vault
  for (const vault of vaults.values()) {
    if (vault.address === address) {
      return { error: "duplicate_vault" };
    }
  }

  const vault: Vault = {
    id: crypto.randomUUID(),
    label: request.label.trim(),
    address,
    bump,
    signers: [...request.signers].sort(),
    threshold: request.threshold,
    createdAt: new Date().toISOString(),
    proposalCount: 0,
    data: new Map(),
  };

  vaults.set(vault.id, vault);
  return { vault };
}

export function getVault(vaultId: string): Vault | null {
  return vaults.get(vaultId) || null;
}
