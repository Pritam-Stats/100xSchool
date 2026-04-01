import { vaults } from "../storage";

export function getVaultData(
  vaultId: string,
): { data: Record<string, string> } | null {
  const vault = vaults.get(vaultId);
  if (!vault) return null;

  const data: Record<string, string> = {};
  for (const [key, value] of vault.data) {
    data[key] = value;
  }
  return { data };
}
