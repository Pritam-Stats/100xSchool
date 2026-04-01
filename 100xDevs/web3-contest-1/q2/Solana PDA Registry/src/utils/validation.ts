import { PublicKey } from "@solana/web3.js";
import bs58 from "bs58";

export function isValidBase58PublicKey(key: string): boolean {
  try {
    const decoded = bs58.decode(key);
    return decoded.length === 32;
  } catch {
    return false;
  }
}

export function isValidBase58Signature(sig: string): boolean {
  try {
    const decoded = bs58.decode(sig);
    return decoded.length === 64;
  } catch {
    return false;
  }
}

export function validateSeeds(seeds: string[]): boolean {
  return seeds.every(seed => Buffer.from(seed, 'utf8').length <= 32);
}