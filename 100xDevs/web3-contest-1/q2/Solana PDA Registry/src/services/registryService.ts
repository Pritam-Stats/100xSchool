import { PublicKey } from "@solana/web3.js";
import { deriveTopLevelPDA, deriveSubPDA, verifyTransferSignature, verifyPDA } from "../utils/crypto.js";
import { isValidBase58PublicKey, isValidBase58Signature, validateSeeds } from "../utils/validation.js";

export interface Registration {
  id: string;
  name: string;
  programId: string;
  pda: string;
  bump: number;
  owner: string;
  parentPda: string | null;
  parentName: string | null;
  createdAt: string;
}

class RegistryService {
  private topLevelRegistry = new Map<string, Registration>();
  private subRegistry = new Map<string, Registration>();
  private programIndex = new Map<string, Set<string>>();
  private parentIndex = new Map<string, Set<string>>();
  private idCounter = 1;

  private generateId(): string {
    return (this.idCounter++).toString();
  }

  registerTopLevel(name: string, programId: string, owner: string): { success: boolean; data?: Registration; error?: string; status: number } {
    if (!name || !programId || !owner) {
      return { success: false, error: "Missing fields", status: 400 };
    }
    if (!isValidBase58PublicKey(programId) || !isValidBase58PublicKey(owner)) {
      return { success: false, error: "Invalid programId or owner", status: 400 };
    }
    const key = `${programId}:${name}`;
    if (this.topLevelRegistry.has(key)) {
      return { success: false, error: "Name already registered for this programId", status: 409 };
    }

    const programIdPub = new PublicKey(programId);
    const { pda, bump } = deriveTopLevelPDA(name, programIdPub);
    const registration: Registration = {
      id: this.generateId(),
      name,
      programId,
      pda: pda.toBase58(),
      bump,
      owner,
      parentPda: null,
      parentName: null,
      createdAt: new Date().toISOString(),
    };
    this.topLevelRegistry.set(key, registration);
    if (!this.programIndex.has(programId)) {
      this.programIndex.set(programId, new Set());
    }
    this.programIndex.get(programId)!.add(name);
    return { success: true, data: registration, status: 201 };
  }

  resolveTopLevel(programId: string, name: string): { success: boolean; data?: Registration; error?: string; status: number } {
    if (!isValidBase58PublicKey(programId)) {
      return { success: false, error: "Invalid programId", status: 400 };
    }
    const key = `${programId}:${name}`;
    const reg = this.topLevelRegistry.get(key);
    if (!reg) {
      return { success: false, error: "Name not found", status: 404 };
    }
    return { success: true, data: reg, status: 200 };
  }

  registerSub(parentName: string, subName: string, programId: string, owner: string): { success: boolean; data?: Registration; error?: string; status: number } {
    if (!parentName || !subName || !programId || !owner) {
      return { success: false, error: "Missing fields", status: 400 };
    }
    if (!isValidBase58PublicKey(programId) || !isValidBase58PublicKey(owner)) {
      return { success: false, error: "Invalid inputs", status: 400 };
    }
    const parentKey = `${programId}:${parentName}`;
    const parentReg = this.topLevelRegistry.get(parentKey);
    if (!parentReg) {
      return { success: false, error: "Parent name not found", status: 404 };
    }
    const subKey = `${programId}:${parentName}:${subName}`;
    if (this.subRegistry.has(subKey)) {
      return { success: false, error: "Sub-name already exists under this parent", status: 409 };
    }

    const programIdPub = new PublicKey(programId);
    const parentPdaPub = new PublicKey(parentReg.pda);
    const { pda, bump } = deriveSubPDA(parentPdaPub, subName, programIdPub);
    const registration: Registration = {
      id: this.generateId(),
      name: subName,
      programId,
      pda: pda.toBase58(),
      bump,
      owner,
      parentPda: parentReg.pda,
      parentName,
      createdAt: new Date().toISOString(),
    };
    this.subRegistry.set(subKey, registration);
    const parentIndexKey = `${programId}:${parentName}`;
    if (!this.parentIndex.has(parentIndexKey)) {
      this.parentIndex.set(parentIndexKey, new Set());
    }
    this.parentIndex.get(parentIndexKey)!.add(subName);
    return { success: true, data: registration, status: 201 };
  }

  resolveSub(programId: string, parentName: string, subName: string): { success: boolean; data?: Registration; error?: string; status: number } {
    if (!isValidBase58PublicKey(programId)) {
      return { success: false, error: "Invalid programId", status: 400 };
    }
    const key = `${programId}:${parentName}:${subName}`;
    const reg = this.subRegistry.get(key);
    if (!reg) {
      return { success: false, error: "Not found", status: 404 };
    }
    return { success: true, data: reg, status: 200 };
  }

  transfer(programId: string, name: string, newOwner: string, signature: string, message: string): { success: boolean; data?: Registration; error?: string; status: number } {
    if (!programId || !name || !newOwner || !signature || !message) {
      return { success: false, error: "Missing fields", status: 400 };
    }
    if (!isValidBase58PublicKey(programId) || !isValidBase58PublicKey(newOwner) || !isValidBase58Signature(signature)) {
      return { success: false, error: "Invalid inputs", status: 400 };
    }
    const expectedMessage = `transfer:${name}:to:${newOwner}`;
    if (message !== expectedMessage) {
      return { success: false, error: "Message doesn't match expected format", status: 400 };
    }
    const key = `${programId}:${name}`;
    const reg = this.topLevelRegistry.get(key);
    if (!reg) {
      return { success: false, error: "Name not found", status: 404 };
    }
    if (!verifyTransferSignature(name, newOwner, signature, reg.owner)) {
      return { success: false, error: "Invalid signature", status: 403 };
    }
    reg.owner = newOwner;
    return { success: true, data: reg, status: 200 };
  }

  verify(address: string, programId: string, seeds: string[]): { success: boolean; data?: { valid: boolean; expectedPda: string; bump: number }; error?: string; status: number } {
    if (!address || !programId || !seeds) {
      return { success: false, error: "Missing fields", status: 400 };
    }
    if (!isValidBase58PublicKey(programId) || !isValidBase58PublicKey(address)) {
      return { success: false, error: "Invalid programId or address", status: 400 };
    }
    if (!validateSeeds(seeds)) {
      return { success: false, error: "Invalid seeds", status: 400 };
    }
    const programIdPub = new PublicKey(programId);
    const result = verifyPDA(address, programIdPub, seeds);
    return { success: true, data: result, status: 200 };
  }

  listTopLevel(programId: string, owner?: string): { success: boolean; data?: Registration[]; error?: string; status: number } {
    if (!isValidBase58PublicKey(programId)) {
      return { success: false, error: "Invalid programId", status: 400 };
    }
    if (owner && !isValidBase58PublicKey(owner)) {
      return { success: false, error: "Invalid owner", status: 400 };
    }
    const names = this.programIndex.get(programId);
    if (!names) {
      return { success: true, data: [], status: 200 };
    }
    const regs: Registration[] = [];
    for (const name of names) {
      const key = `${programId}:${name}`;
      const reg = this.topLevelRegistry.get(key)!;
      if (!owner || reg.owner === owner) {
        regs.push(reg);
      }
    }
    return { success: true, data: regs, status: 200 };
  }

  listSubs(programId: string, name: string): { success: boolean; data?: Registration[]; error?: string; status: number } {
    if (!isValidBase58PublicKey(programId)) {
      return { success: false, error: "Invalid programId", status: 400 };
    }
    const parentKey = `${programId}:${name}`;
    const parentReg = this.topLevelRegistry.get(parentKey);
    if (!parentReg) {
      return { success: false, error: "Parent name not found", status: 404 };
    }
    const subNames = this.parentIndex.get(parentKey);
    if (!subNames) {
      return { success: true, data: [], status: 200 };
    }
    const regs: Registration[] = [];
    for (const subName of subNames) {
      const key = `${programId}:${name}:${subName}`;
      const reg = this.subRegistry.get(key)!;
      regs.push(reg);
    }
    return { success: true, data: regs, status: 200 };
  }
}

export const registryService = new RegistryService();