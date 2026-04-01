import { PublicKey } from "@solana/web3.js";
import nacl from "tweetnacl";
import bs58 from "bs58";

export function deriveTopLevelPDA(name: string, programId: PublicKey): { pda: PublicKey; bump: number } {
  const [pda, bump] = PublicKey.findProgramAddressSync(
    [Buffer.from("name"), Buffer.from(name)],
    programId
  );
  return { pda, bump };
}

export function deriveSubPDA(parentPda: PublicKey, subName: string, programId: PublicKey): { pda: PublicKey; bump: number } {
  const [pda, bump] = PublicKey.findProgramAddressSync(
    [Buffer.from("sub"), parentPda.toBuffer(), Buffer.from(subName)],
    programId
  );
  return { pda, bump };
}

export function verifyTransferSignature(
  name: string,
  newOwner: string,
  signature: string,
  currentOwner: string
): boolean {
  const message = `transfer:${name}:to:${newOwner}`;
  const messageBytes = Buffer.from(message, 'utf8');
  const signatureBytes = bs58.decode(signature);
  const ownerBytes = bs58.decode(currentOwner);
  return nacl.sign.detached.verify(messageBytes, signatureBytes, ownerBytes);
}

export function verifyPDA(address: string, programId: PublicKey, seeds: string[]): { valid: boolean; expectedPda: string; bump: number } {
  const seedBuffers = seeds.map(seed => Buffer.from(seed, 'utf8'));
  const [expectedPda, bump] = PublicKey.findProgramAddressSync(seedBuffers, programId);
  const valid = expectedPda.toBase58() === address;
  return { valid, expectedPda: expectedPda.toBase58(), bump };
}