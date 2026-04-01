:::writing{variant=“standard” id=“48291”}

🧠 Web3 AI Interview Prep — Solana Systems (Address Book, PDA Registry, Multi-Sig Vault)

⸻

🎯 Objective

This document prepares you for an AI-driven technical interview based on:
	•	Solana primitives (PDA, wallets, signatures)
	•	Backend system design (Node.js + Express)
	•	Security and correctness thinking
	•	Multi-step reasoning (architecture → execution)

⸻

🧩 How to Approach Answers

Use this structure in every answer:
	1.	Concept (What)
	2.	Mechanism (How)
	3.	Reasoning (Why)
	4.	Edge Case / Security Insight

⸻

🔹 SECTION 1 — CORE SOLANA CONCEPTS

⸻

❓ What is a PDA?

Answer:

A PDA (Program Derived Address) is a deterministic address generated using seeds and a program ID, but it does not have a private key.
	•	How:
Derived using findProgramAddressSync(seeds, programId)
	•	Why:
It allows programs to own accounts securely without needing private keys.
	•	Key Insight:
PDAs are off-curve, meaning no one can sign for them.

⸻

❓ Difference between Wallet and PDA?

Answer:
	•	Wallet:
	•	On-curve
	•	Has private key
	•	Can sign transactions
	•	PDA:
	•	Off-curve
	•	No private key
	•	Controlled by program logic

⸻

❓ Why check isOnCurve?

Answer:

To distinguish:
	•	User-controlled accounts (wallets)
	•	Program-controlled accounts (PDAs)

This is critical for:
	•	Correct classification
	•	Preventing incorrect assumptions about ownership

⸻

❓ What makes PDA deterministic?

Answer:

Same:
	•	seeds
	•	programId

→ always produces same address

This ensures:
	•	No duplicates
	•	Predictable state access

⸻

🔹 SECTION 2 — ADDRESS BOOK

⸻

❓ How did you validate a Solana address?

Answer:
	1.	Decode base58
	2.	Ensure length = 32 bytes

This ensures it is a valid public key.

⸻

❓ How did you detect wallet vs PDA?

Answer:

Used:

PublicKey.isOnCurve(pubkey.toBytes())

	•	true → wallet
	•	false → PDA

⸻

❓ How is ATA derived?

Answer:

Using seeds:

[owner, TOKEN_PROGRAM_ID, mint]

This ensures:
	•	deterministic token account per wallet + mint

⸻

❓ What could go wrong in ATA derivation?

Answer:
	•	wrong seed order
	•	wrong program ID
	•	invalid mint

⸻

🔹 SECTION 3 — PDA REGISTRY

⸻

❓ How did you ensure name uniqueness?

Answer:

Uniqueness enforced using:

(programId + name)

This prevents:
	•	duplicate registrations

⸻

❓ Why include programId in uniqueness?

Answer:

Same name can exist under different programs.

⸻

❓ Explain sub-name hierarchy

Answer:

Sub-names depend on:
	•	parent PDA
	•	subName

Seeds:

["sub", parentPda, subName]


⸻

❓ Why include parent PDA in seeds?

Answer:

To ensure:
	•	hierarchy isolation
	•	uniqueness under each parent

⸻

❓ How does ownership transfer work?

Answer:
	1.	Construct message:

transfer:<name>:to:<newOwner>

	2.	Verify signature against current owner
	3.	Update owner if valid

⸻

❓ Why strict message format?

Answer:

Prevents:
	•	replay attacks
	•	signature reuse

⸻

❓ What is replay attack here?

Answer:

Reusing a valid signature to perform unintended actions.

⸻

🔹 SECTION 4 — MULTI-SIG VAULT

⸻

❓ Why sort signers before hashing?

Answer:

To ensure deterministic identity.

Without sorting:
	•	same set → different PDAs

⸻

❓ How is vault PDA derived?

Answer:
	1.	Sort signers
	2.	Join with :
	3.	SHA256 hash
	4.	Use:

["vault", hash]


⸻

❓ Why use SHA256?

Answer:
	•	Fixed-length seed
	•	Avoid large seed arrays
	•	Deterministic compression

⸻

❓ Explain M-of-N threshold

Answer:
	•	N = total signers
	•	M = required approvals

Execution happens when:

valid_signatures >= threshold


⸻

❓ How did you prevent duplicate approvals?

Answer:

Tracked:

signatures[] with signer identity

Reject if signer already signed.

⸻

❓ How did you ensure execution happens once?

Answer:

Checked:

status === "pending"

Then:
	•	mark executed
	•	block future actions

⸻

❓ Why is replay protection important?

Answer:

Without it:
	•	same proposal can execute multiple times
	•	leads to double-spend / inconsistent state

⸻

❓ Why only proposer can cancel?

Answer:

Prevents:
	•	malicious cancellation by other signers

⸻

❓ How is signature verified?

Answer:

nacl.sign.detached.verify(
  messageBytes,
  signatureBytes,
  publicKeyBytes
)


⸻

❓ What are common signature bugs?

Answer:
	•	wrong message string
	•	wrong encoding (must be UTF-8)
	•	verifying against wrong public key

⸻

🔹 SECTION 5 — SYSTEM DESIGN QUESTIONS

⸻

❓ Why in-memory storage?

Answer:
	•	Faster for contest
	•	No persistence needed
	•	Focus on logic correctness

⸻

❓ How would you scale this?

Answer:
	•	Replace memory with DB (Postgres)
	•	Add indexing on:
	•	programId
	•	vaultId
	•	Use caching for PDA computations

⸻

❓ How would you secure this in production?

Answer:
	•	Rate limiting
	•	Input validation (schema-based)
	•	Audit logs
	•	Signature expiry / nonce

⸻

❓ How would you prevent spam proposals?

Answer:
	•	Require stake or fee
	•	Rate limit per signer

⸻

🔹 SECTION 6 — EDGE CASE THINKING

⸻

❓ Give some critical edge cases

Answer:
	•	duplicate signer in vault
	•	threshold > signers
	•	invalid base58 input
	•	seed length > 32 bytes
	•	proposal already executed
	•	invalid signature

⸻

❓ What invariant did you maintain?

Answer:
	•	deterministic PDA
	•	unique identity per entity
	•	single execution per proposal
	•	valid signer-only actions

⸻

🔹 SECTION 7 — YOUR STRATEGY (VERY IMPORTANT)

⸻

❓ How did you use AI effectively?

Answer:

I treated AI as a junior engineer, not a solution generator.
	•	Broke problem into steps:
	•	architecture
	•	data model
	•	logic
	•	implementation
	•	Enforced:
	•	no code before design
	•	strict validation
	•	iterative refinement

⸻


🔹 FINAL TIP

If stuck in interview:

👉 Always fall back to:
	•	determinism
	•	validation
	•	security
	•	invariants

That signals strong engineering thinking.

⸻

✅ You are evaluated on:
	•	Clarity
	•	Correctness
	•	Reasoning
	•	Security awareness

Not just code.

⸻



---


:::writing{variant=“standard” id=“59382”}

🧠 Web3 AI Interview Prep — Advanced Q&A (Approach, Trade-offs, Alternatives)

⸻

🎯 Focus of This Section

These are high-signal interview questions that evaluate:
	•	Your thinking process
	•	Your engineering judgment
	•	Your trade-off awareness

Not just correctness.

⸻

🔹 SECTION 8 — APPROACH & PROBLEM-SOLVING

⸻

❓ How did you approach solving these problems?

Answer:

I followed a layered engineering approach instead of jumping into coding:
	1.	Understand invariants
	•	What must always remain true (e.g., one execution per proposal)
	2.	Design first
	•	Data model
	•	State transitions
	•	Deterministic identifiers (PDA)
	3.	Break into modules
	•	Routes (API layer)
	•	Services (business logic)
	•	Utils (crypto + validation)
	4.	Implement incrementally
	•	Core flow first
	•	Then edge cases
	•	Then validation
	5.	Add security thinking
	•	Signature verification
	•	Replay protection
	•	Ownership checks

⸻

❓ Why didn’t you start coding immediately?

Answer:

Because these problems are stateful and security-sensitive.

If you start coding:
	•	You miss invariants
	•	You introduce logic bugs
	•	Refactoring becomes expensive

Design-first reduces:
	•	cognitive load
	•	bug surface area

⸻

❓ How did you ensure correctness?

Answer:

I enforced correctness at multiple layers:
	•	Input validation (base58, byte length)
	•	Deterministic PDA derivation
	•	Strict message formats for signatures
	•	State checks before transitions

Also:
	•	Designed edge cases before coding

⸻

❓ How did you think about edge cases?

Answer:

I categorized them:
	1.	Input-level
	•	invalid keys, empty strings
	2.	State-level
	•	duplicate entities
	•	already executed proposals
	3.	Security-level
	•	unauthorized signer
	•	replay attacks

⸻

🔹 SECTION 9 — DESIGN DECISIONS

⸻

❓ Why did you use in-memory storage?

Answer:

Because:
	•	The requirement explicitly stated it
	•	Focus was on logic correctness, not persistence

Trade-off:
	•	Fast and simple
	•	Not durable

⸻

❓ What would you use in production?

Answer:
	•	Postgres (relational consistency)
	•	Redis (for caching hot reads)

Reason:
	•	Need persistence
	•	Need indexing for lookups

⸻

❓ Why Express instead of other frameworks?

Answer:
	•	Minimal overhead
	•	Full control over request lifecycle
	•	Sufficient for REST APIs

Alternative:
	•	Fastify (better performance)
	•	NestJS (more structure)

⸻

❓ Why not use a validation library?

Answer:

Constraints didn’t allow it.

So I:
	•	implemented manual validation
	•	kept it centralized in utils

Trade-off:
	•	more boilerplate
	•	but full control

⸻

❓ Why separate routes, services, utils?

Answer:

To enforce separation of concerns:
	•	routes → HTTP handling
	•	services → business logic
	•	utils → reusable logic

This improves:
	•	maintainability
	•	testability

⸻

🔹 SECTION 10 — PDA & DESIGN CHOICES

⸻

❓ Why use PDA instead of storing random IDs?

Answer:

PDA gives:
	•	determinism
	•	collision resistance
	•	no need for global coordination

Alternative:
	•	UUIDs

But UUIDs:
	•	are random
	•	don’t encode structure

⸻

❓ Why include specific seeds like "name" or "vault"?

Answer:

To create namespacing.

Without it:
	•	different entities could collide

⸻

❓ Why hash signer list in multi-sig?

Answer:

Because:
	•	seed size limit (≤ 32 bytes per seed)
	•	signer list can be long

Hash ensures:
	•	fixed-length input
	•	deterministic mapping

⸻

❓ Why sort signers?

Answer:

To ensure:
	•	order independence
	•	deterministic identity

Without sorting:
	•	same signers → different vaults

⸻

🔹 SECTION 11 — CRYPTO DECISIONS

⸻

❓ Why use ed25519 signatures?

Answer:

Because:
	•	native to Solana
	•	efficient and secure

⸻

❓ Why verify signatures manually?

Answer:

Because:
	•	backend must enforce ownership
	•	no blockchain execution here

⸻

❓ Why strict message formats?

Answer:

To prevent:
	•	signature reuse
	•	ambiguity

Example:

approve:<proposalId>


⸻

❓ Alternative to message-based verification?

Answer:
	•	Nonce-based system
	•	Timestamp-based expiry

Trade-off:
	•	more secure
	•	more complex

⸻

🔹 SECTION 12 — MULTI-SIG DESIGN

⸻

❓ Why track signatures as array instead of count?

Answer:

Because:
	•	need to ensure uniqueness per signer
	•	prevent duplicate approvals

⸻

❓ Why auto-execute on threshold?

Answer:
	•	simplifies workflow
	•	avoids separate execution step

Alternative:
	•	explicit execute endpoint

Trade-off:
	•	auto = simpler UX
	•	manual = more control

⸻

❓ Why restrict cancel to proposer?

Answer:

To prevent:
	•	griefing attacks
	•	arbitrary cancellation

⸻

❓ How would you improve cancellation?

Answer:

Allow:
	•	threshold-based cancellation

⸻

🔹 SECTION 13 — ALTERNATIVES & TRADE-OFFS

⸻

❓ What are alternatives to your design?

Answer:

1. Database-backed system
	•	Pros: persistence
	•	Cons: complexity

⸻

2. Blockchain-native (on-chain program)
	•	Pros: trustless
	•	Cons: expensive, slower iteration

⸻

3. Event-driven architecture
	•	Pros: scalable
	•	Cons: overkill here

⸻

❓ What would you change if time allowed?

Answer:
	•	Add schema validation (Zod)
	•	Add tests (unit + integration)
	•	Add logging layer
	•	Add nonce-based signature system

⸻

🔹 SECTION 14 — PERFORMANCE & SCALING

⸻

❓ Bottlenecks in your system?

Answer:
	•	Linear search in memory
	•	Signature verification cost

⸻

❓ How to optimize?

Answer:
	•	Use maps for O(1) lookup
	•	Cache PDA computations
	•	Index by vaultId / programId

⸻

🔹 SECTION 15 — FAILURE ANALYSIS

⸻

❓ What was the hardest part?

Answer:
	•	Getting PDA derivation exactly correct
	•	Handling multi-sig state transitions safely

⸻

❓ What bugs did you encounter?

Answer:

(You should customize this based on your experience, but example:)
	•	incorrect seed order
	•	signature mismatch due to encoding
	•	duplicate approvals not handled

⸻

❓ How did you debug?

Answer:
	•	Isolated logic (crypto vs API)
	•	Verified assumptions step-by-step
	•	Used controlled test inputs

⸻

🔹 SECTION 16 — META (AI USAGE)

⸻

❓ How did you use AI effectively?

Answer:
	•	Used structured prompts
	•	Broke problem into phases
	•	Verified each output before proceeding

⸻

❓ What mistakes should be avoided while using AI?

Answer:
	•	One-shot prompting
	•	Blind trust in generated code
	•	Skipping validation

⸻

❓ How did you ensure AI correctness?

Answer:
	•	Forced design before code
	•	Asked for edge cases
	•	Performed manual verification

⸻

🔹 FINAL INTERVIEW STRATEGY

⸻

If asked anything unexpected:

👉 Anchor your answer in:
	•	Determinism (PDA)
	•	Validation (inputs + state)
	•	Security (signatures, replay)
	•	State transitions (multi-sig)

⸻

🧠 One-line positioning (use this if needed)

“I approached this as a deterministic, security-critical backend system rather than just a CRUD API.”

⸻

✅ This is what makes you stand out:
	•	You think in systems
	•	You reason about trade-offs
	•	You prioritize correctness
	•	You understand blockchain primitives deeply

⸻

