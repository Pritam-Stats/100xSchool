import bs58 from "bs58";

export function isValidPublicKey(pubkey: string): boolean {
  try {
    const decoded = bs58.decode(pubkey);
    return decoded.length === 32;
  } catch {
    return false;
  }
}

export function validateSigners(signers: string[]): boolean {
  if (signers.length < 2) return false;
  const uniqueSigners = new Set(signers);
  if (uniqueSigners.size !== signers.length) return false;
  return signers.every(isValidPublicKey);
}

export function validateThreshold(
  threshold: number,
  signersCount: number,
): boolean {
  return threshold >= 1 && threshold <= signersCount;
}

export function validateLabel(label: string): boolean {
  return typeof label === "string" && label.trim().length > 0;
}

export function validateTransferParams(
  params: any,
): params is { to: string; amount: number } {
  return (
    typeof params === "object" &&
    typeof params.to === "string" &&
    isValidPublicKey(params.to) &&
    typeof params.amount === "number" &&
    params.amount > 0
  );
}

export function validateSetDataParams(
  params: any,
): params is { key: string; value: string } {
  return (
    typeof params === "object" &&
    typeof params.key === "string" &&
    params.key.trim().length > 0 &&
    typeof params.value === "string" &&
    params.value.trim().length > 0
  );
}

export function validateMemoParams(params: any): params is { content: string } {
  return (
    typeof params === "object" &&
    typeof params.content === "string" &&
    params.content.trim().length > 0
  );
}
