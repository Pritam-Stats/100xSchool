import express from "express";
import { randomUUID } from "crypto";

const app = express();
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

type WalletAddress = string;

type WalletState = {
  wallet: WalletAddress;
  balance: number; // net owned funds (does not include escrow)
  escrowed: number; // locked funds as highest bidder on unsettled auctions
  createdAt: string;
};

type Bid = {
  bidder: WalletAddress;
  amount: number;
  placedAt: string;
};

type Auction = {
  id: string;
  seller: WalletAddress;
  item: string;
  startAt: string; // ISO
  endAt: string; // ISO
  startingPrice: number;
  minIncrement: number;
  createdAt: string; // ISO
  cancelledAt: string | null;
  settledAt: string | null;
  bids: Bid[];
};

type AuctionStatus = "UPCOMING" | "ACTIVE" | "ENDED" | "SETTLED" | "CANCELLED";

const wallets = new Map<WalletAddress, WalletState>();
const auctions = new Map<string, Auction>();
const auctionsInCreationOrder: string[] = [];

function isPositiveInteger(n: unknown): n is number {
  return typeof n === "number" && Number.isInteger(n) && n > 0;
}

function isNonNegativeInteger(n: unknown): n is number {
  return typeof n === "number" && Number.isInteger(n) && n >= 0;
}

function isNonEmptyString(s: unknown): s is string {
  return typeof s === "string" && s.trim().length > 0;
}

function isFullIsoDatetimeString(s: unknown): s is string {
  if (typeof s !== "string") return false;
  // Require both time and timezone (Z or ±hh:mm). Reject date-only like 2026-03-20.
  const fullIso =
    /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,9})?(?:Z|[+-]\d{2}:\d{2})$/;
  if (!fullIso.test(s)) return false;
  const t = Date.parse(s);
  return Number.isFinite(t);
}

function getOrCreateWallet(wallet: WalletAddress): WalletState {
  const existing = wallets.get(wallet);
  if (existing) return existing;
  const created: WalletState = {
    wallet,
    balance: 0,
    escrowed: 0,
    createdAt: new Date().toISOString(),
  };
  wallets.set(wallet, created);
  return created;
}

function computeAuctionStatus(auction: Auction, nowIso: string): AuctionStatus {
  if (auction.cancelledAt) return "CANCELLED";
  if (auction.settledAt) return "SETTLED";
  const now = Date.parse(nowIso);
  const start = Date.parse(auction.startAt);
  const end = Date.parse(auction.endAt);
  if (now < start) return "UPCOMING";
  if (now >= start && now < end) return "ACTIVE";
  return "ENDED";
}

function getHighestBid(auction: Auction): Bid | null {
  if (auction.bids.length === 0) return null;
  return auction.bids[auction.bids.length - 1] ?? null;
}

function auctionSnapshot(auction: Auction, nowIso: string) {
  const highest = getHighestBid(auction);
  const status = computeAuctionStatus(auction, nowIso);
  return {
    id: auction.id,
    seller: auction.seller,
    item: auction.item,
    startAt: auction.startAt,
    endAt: auction.endAt,
    startingPrice: auction.startingPrice,
    minIncrement: auction.minIncrement,
    createdAt: auction.createdAt,
    cancelledAt: auction.cancelledAt,
    settledAt: auction.settledAt,
    status,
    currentPrice: highest ? highest.amount : auction.startingPrice,
    bidCount: auction.bids.length,
    highestBidder: highest ? highest.bidder : null,
  };
}

function readNowOverride(nowMaybe: unknown): { ok: true; nowIso: string } | { ok: false } {
  if (nowMaybe === undefined || nowMaybe === null) {
    return { ok: true, nowIso: new Date().toISOString() };
  }
  if (!isFullIsoDatetimeString(nowMaybe)) return { ok: false };
  return { ok: true, nowIso: nowMaybe };
}

app.post("/api/wallets/deposit", (req, res) => {
  const { wallet, amount } = req.body ?? {};
  if (!isNonEmptyString(wallet) || !isPositiveInteger(amount)) {
    return res.status(400).json({ error: "Invalid wallet or amount" });
  }

  const w = getOrCreateWallet(wallet);
  w.balance += amount;
  return res.status(201).json({
    wallet: w.wallet,
    amount,
    balance: w.balance,
    createdAt: w.createdAt,
  });
});

app.get("/api/wallets/:wallet/balance", (req, res) => {
  const wallet = req.params.wallet;
  const w = wallets.get(wallet);
  const balance = w?.balance ?? 0;
  const escrowed = w?.escrowed ?? 0;
  return res.json({
    wallet,
    balance,
    escrowed,
    available: balance - escrowed,
  });
});

app.post("/api/auctions", (req, res) => {
  const { seller, item, startAt, endAt, startingPrice, minIncrement } = req.body ?? {};

  if (
    !isNonEmptyString(seller) ||
    !isNonEmptyString(item) ||
    !isFullIsoDatetimeString(startAt) ||
    !isFullIsoDatetimeString(endAt) ||
    !isNonNegativeInteger(startingPrice) ||
    !isPositiveInteger(minIncrement)
  ) {
    return res.status(400).json({ error: "Invalid auction fields" });
  }

  const start = Date.parse(startAt);
  const end = Date.parse(endAt);
  if (!(end > start)) {
    return res.status(400).json({ error: "endAt must be after startAt" });
  }

  getOrCreateWallet(seller);

  const id = randomUUID();
  const createdAt = new Date().toISOString();
  const auction: Auction = {
    id,
    seller,
    item: item.trim(),
    startAt,
    endAt,
    startingPrice,
    minIncrement,
    createdAt,
    cancelledAt: null,
    settledAt: null,
    bids: [],
  };
  auctions.set(id, auction);
  auctionsInCreationOrder.push(id);

  return res.status(201).json(auctionSnapshot(auction, createdAt));
});

app.get("/api/auctions/:id", (req, res) => {
  const auction = auctions.get(req.params.id);
  if (!auction) return res.status(404).json({ error: "Auction not found" });

  const nowParam = req.query.now;
  const now = readNowOverride(nowParam);
  if (!now.ok) return res.status(400).json({ error: "Invalid now" });

  return res.json(auctionSnapshot(auction, now.nowIso));
});

app.get("/api/auctions", (req, res) => {
  const { seller, status, now: nowParam } = req.query;
  const now = readNowOverride(nowParam);
  if (!now.ok) return res.status(400).json({ error: "Invalid now" });

  const snapshots = auctionsInCreationOrder
    .map((id) => auctions.get(id))
    .filter((a): a is Auction => Boolean(a))
    .map((a) => auctionSnapshot(a, now.nowIso))
    .filter((snap) => {
      if (typeof seller === "string" && snap.seller !== seller) return false;
      if (typeof status === "string" && snap.status !== status) return false;
      return true;
    });

  return res.json({ auctions: snapshots });
});

app.post("/api/auctions/:id/bid", (req, res) => {
  const auction = auctions.get(req.params.id);
  if (!auction) return res.status(404).json({ error: "Auction not found" });

  const { bidder, amount, now: nowMaybe } = req.body ?? {};
  if (!isNonEmptyString(bidder) || !isPositiveInteger(amount)) {
    return res.status(400).json({ error: "Invalid bidder or amount" });
  }
  if (bidder === auction.seller) {
    return res.status(400).json({ error: "Seller cannot bid" });
  }

  const now = readNowOverride(nowMaybe);
  if (!now.ok) return res.status(400).json({ error: "Invalid now" });

  const status = computeAuctionStatus(auction, now.nowIso);
  if (status !== "ACTIVE") {
    return res.status(400).json({ error: "Auction is not ACTIVE" });
  }

  getOrCreateWallet(bidder);

  const highest = getHighestBid(auction);
  const currentPrice = highest ? highest.amount : auction.startingPrice;

  if (!highest) {
    if (amount < auction.startingPrice) {
      return res.status(400).json({ error: "Bid below starting price" });
    }
  } else {
    const minRequired = currentPrice + auction.minIncrement;
    if (amount < minRequired) {
      return res.status(400).json({ error: "Bid below min increment" });
    }
  }

  const bidderWallet = getOrCreateWallet(bidder);

  // If bidder is already highest bidder, release their previous escrow for this auction before checking availability.
  let effectiveEscrowed = bidderWallet.escrowed;
  if (highest && highest.bidder === bidder) {
    effectiveEscrowed -= highest.amount;
  }

  const available = bidderWallet.balance - effectiveEscrowed;
  if (available < amount) {
    return res.status(400).json({ error: "Insufficient available balance" });
  }

  // Apply escrow movements.
  if (highest && highest.bidder === bidder) {
    bidderWallet.escrowed -= highest.amount;
  } else if (highest && highest.bidder !== bidder) {
    const prev = getOrCreateWallet(highest.bidder);
    prev.escrowed -= highest.amount;
  }
  bidderWallet.escrowed += amount;

  const bid: Bid = { bidder, amount, placedAt: now.nowIso };
  auction.bids.push(bid);

  return res.json(auctionSnapshot(auction, now.nowIso));
});

app.post("/api/auctions/:id/settle", (req, res) => {
  const auction = auctions.get(req.params.id);
  if (!auction) return res.status(404).json({ error: "Auction not found" });

  const { now: nowMaybe } = req.body ?? {};
  const now = readNowOverride(nowMaybe);
  if (!now.ok) return res.status(400).json({ error: "Invalid now" });

  const status = computeAuctionStatus(auction, now.nowIso);
  if (status !== "ENDED") {
    return res.status(400).json({ error: "Auction is not ENDED" });
  }

  const highest = getHighestBid(auction);

  if (highest) {
    const winnerWallet = getOrCreateWallet(highest.bidder);
    const sellerWallet = getOrCreateWallet(auction.seller);

    winnerWallet.escrowed -= highest.amount;
    winnerWallet.balance -= highest.amount;
    sellerWallet.balance += highest.amount;
  }

  auction.settledAt = now.nowIso;

  return res.json({
    auction: auctionSnapshot(auction, now.nowIso),
    winner: highest ? highest.bidder : null,
    winningBid: highest ? highest.amount : null,
  });
});

app.post("/api/auctions/:id/cancel", (req, res) => {
  const auction = auctions.get(req.params.id);
  if (!auction) return res.status(404).json({ error: "Auction not found" });

  const { now: nowMaybe } = req.body ?? {};
  const now = readNowOverride(nowMaybe);
  if (!now.ok) return res.status(400).json({ error: "Invalid now" });

  const status = computeAuctionStatus(auction, now.nowIso);
  if (status !== "UPCOMING") {
    return res.status(400).json({ error: "Auction is not UPCOMING" });
  }
  if (auction.cancelledAt) {
    return res.status(400).json({ error: "Auction already cancelled" });
  }

  auction.cancelledAt = now.nowIso;
  return res.json(auctionSnapshot(auction, now.nowIso));
});

app.get("/api/auctions/:id/bids", (req, res) => {
  const auction = auctions.get(req.params.id);
  if (!auction) return res.status(404).json({ error: "Auction not found" });
  return res.json({ bids: [...auction.bids].sort((a, b) => Date.parse(a.placedAt) - Date.parse(b.placedAt)) });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
