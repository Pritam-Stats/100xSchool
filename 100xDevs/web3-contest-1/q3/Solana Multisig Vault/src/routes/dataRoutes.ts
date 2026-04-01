import { Router } from "express";
import { getVaultData } from "../services/dataService";

const router = Router({ mergeParams: true });

router.get("/data", (req, res) => {
  const vaultId = req.params.vaultId;
  const data = getVaultData(vaultId);
  if (!data) {
    return res.status(404).json({ error: "Vault not found" });
  }
  res.json(data);
});

export default router;
