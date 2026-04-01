import express from "express";
import registryRouter from "./routes/registry.js";

const app = express();
app.use(express.json());

app.use("/api/registry", registryRouter);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
