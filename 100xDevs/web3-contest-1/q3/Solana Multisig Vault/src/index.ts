import express from "express";
import vaultRoutes from "./routes/vaultRoutes";
import proposalRoutes from "./routes/proposalRoutes";
import dataRoutes from "./routes/dataRoutes";

const app = express();
app.use(express.json());

app.use("/api/vault", vaultRoutes);
app.use("/api/vault/:vaultId", proposalRoutes);
app.use("/api/vault/:vaultId", dataRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
