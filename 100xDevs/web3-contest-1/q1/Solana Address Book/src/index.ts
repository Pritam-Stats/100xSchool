import express from "express";
import { PublicKey } from "@solana/web3.js";
import bs58 from "bs58";
import nacl from "tweetnacl";

const app = express();
app.use(express.json());

interface Contact {
  id: number;
  name: string;
  address: string;
  type: 'wallet' | 'pda';
  createdAt: string;
}

let contacts: Contact[] = [];
let nextId = 1;
const addressMap = new Map<string, number>();

const TOKEN_PROGRAM_ID = new PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA');
const ASSOCIATED_TOKEN_PROGRAM_ID = new PublicKey('ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL');

// POST /api/contacts — Add a contact
app.post('/api/contacts', (req, res) => {
  const { name, address } = req.body;
  if (!name || !address) {
    return res.status(400).json({ error: 'Missing name or address' });
  }
  try {
    const pubkey = new PublicKey(address);
    if (addressMap.has(address)) {
      return res.status(409).json({ error: 'Address already exists' });
    }
    const type = PublicKey.isOnCurve(pubkey.toBytes()) ? 'wallet' : 'pda';
    const contact: Contact = {
      id: nextId++,
      name,
      address,
      type,
      createdAt: new Date().toISOString()
    };
    contacts.push(contact);
    addressMap.set(address, contact.id);
    res.status(201).json(contact);
  } catch (e) {
    res.status(400).json({ error: 'Invalid address' });
  }
});

// GET /api/contacts — List contacts
app.get('/api/contacts', (req, res) => {
  const { type } = req.query;
  let filtered = contacts;
  if (type === 'wallet' || type === 'pda') {
    filtered = contacts.filter(c => c.type === type);
  }
  filtered.sort((a, b) => a.id - b.id);
  res.json(filtered);
});

// GET /api/contacts/:id — Get contact by ID
app.get('/api/contacts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const contact = contacts.find(c => c.id === id);
  if (!contact) {
    return res.status(404).json({ error: 'Contact not found' });
  }
  res.json(contact);
});

// PUT /api/contacts/:id — Update contact name
app.put('/api/contacts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: 'Missing name' });
  }
  const contact = contacts.find(c => c.id === id);
  if (!contact) {
    return res.status(404).json({ error: 'Contact not found' });
  }
  contact.name = name;
  res.json(contact);
});

// DELETE /api/contacts/:id — Delete contact
app.delete('/api/contacts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = contacts.findIndex(c => c.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Contact not found' });
  }
  const contact = contacts[index];
  contacts.splice(index, 1);
  addressMap.delete(contact.address);
  res.json({ message: 'Contact deleted' });
});

// POST /api/contacts/:id/derive-ata — Derive Associated Token Account
app.post('/api/contacts/:id/derive-ata', (req, res) => {
  const id = parseInt(req.params.id);
  const { mintAddress } = req.body;
  if (!mintAddress) {
    return res.status(400).json({ error: 'Missing mintAddress' });
  }
  const contact = contacts.find(c => c.id === id);
  if (!contact) {
    return res.status(404).json({ error: 'Contact not found' });
  }
  try {
    const ownerPubkey = new PublicKey(contact.address);
    const mintPubkey = new PublicKey(mintAddress);
    const [ata] = PublicKey.findProgramAddressSync(
      [ownerPubkey.toBuffer(), TOKEN_PROGRAM_ID.toBuffer(), mintPubkey.toBuffer()],
      ASSOCIATED_TOKEN_PROGRAM_ID
    );
    res.json({
      ata: ata.toBase58(),
      owner: contact.address,
      mint: mintAddress
    });
  } catch (e) {
    res.status(400).json({ error: 'Invalid mint address' });
  }
});

// POST /api/verify-ownership — Verify ed25519 signature
app.post('/api/verify-ownership', (req, res) => {
  const { address, message, signature } = req.body;
  if (!address || !message || !signature) {
    return res.status(400).json({ error: 'Missing fields' });
  }
  try {
    const pubkeyBytes = bs58.decode(address);
    const sigBytes = bs58.decode(signature);
    const messageBytes = Buffer.from(message, 'utf8');
    const valid = nacl.sign.detached.verify(messageBytes, sigBytes, pubkeyBytes);
    res.json({ valid });
  } catch (e) {
    res.status(400).json({ error: 'Invalid inputs' });
  }
});

// POST /api/derive-pda — Derive PDA
app.post('/api/derive-pda', (req, res) => {
  const { programId, seeds } = req.body;
  if (!programId || !seeds || !Array.isArray(seeds)) {
    return res.status(400).json({ error: 'Missing programId or seeds' });
  }
  try {
    const programPubkey = new PublicKey(programId);
    const seedBuffers = seeds.map((seed: string) => {
      const buf = Buffer.from(seed, 'utf8');
      if (buf.length > 32) {
        throw new Error('Seed too long');
      }
      return buf;
    });
    const [pda, bump] = PublicKey.findProgramAddressSync(seedBuffers, programPubkey);
    res.json({
      pda: pda.toBase58(),
      bump
    });
  } catch (e) {
    res.status(400).json({ error: 'Invalid programId or seeds' });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
