Read ../persona.md and ../skills.md and strictly follow them.

You are building:

"Multi-Sig Vault REST API"

Core requirements:
- M-of-N signing
- PDA-based vault address
- Proposal lifecycle (pending → executed / cancelled)
- ed25519 signature verification
- Deterministic vault identity (sorted signers + sha256)

Rules:
- Follow execution protocol strictly
- Do NOT skip steps
- Do NOT generate code unless explicitly asked
- Use Node.js + TypeScript + Express
- Use @solana/web3.js, bs58, tweetnacl, crypto
- In-memory storage only
- Server runs on port 3000

Wait for next instruction.