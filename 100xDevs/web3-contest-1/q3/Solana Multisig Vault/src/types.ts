export interface Vault {
  id: string;
  label: string;
  address: string;
  bump: number;
  signers: string[];
  threshold: number;
  createdAt: string;
  proposalCount: number;
  data: Map<string, string>;
}

export interface ProposalSignature {
  signer: string;
  createdAt: string;
}

export interface Proposal {
  id: number;
  vaultId: string;
  proposer: string;
  action: "transfer" | "set_data" | "memo";
  params: TransferParams | SetDataParams | MemoParams;
  status: "pending" | "executed" | "cancelled";
  signatures: ProposalSignature[];
  createdAt: string;
  executedAt?: string;
}

export interface TransferParams {
  to: string;
  amount: number;
}

export interface SetDataParams {
  key: string;
  value: string;
}

export interface MemoParams {
  content: string;
}

export interface CreateVaultRequest {
  signers: string[];
  threshold: number;
  label: string;
}

export interface CreateProposalRequest {
  proposer: string;
  action: string;
  params: object;
}

export interface ApproveRequest {
  signer: string;
  signature: string;
}

export interface CancelRequest {
  signer: string;
  signature: string;
}
