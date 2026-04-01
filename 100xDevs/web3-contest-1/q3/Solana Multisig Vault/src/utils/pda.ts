import { PublicKey } from "@solana/web3.js";
import crypto from "crypto";

const PROGRAM_ID = new PublicKey("11111111111111111111111111111111");

export function deriveVaultAddress(signers: string[]): {
  address: string;
  bump: number;
} {
  const sortedSigners = [...signers].sort();
  const hash = crypto
    .createHash("sha256")
    .update(sortedSigners.join(":"))
    .digest();
  const [address, bump] = PublicKey.findProgramAddressSync(
    [Buffer.from("vault"), hash],
    PROGRAM_ID,
  );
  return { address: address.toBase58(), bump };
}
