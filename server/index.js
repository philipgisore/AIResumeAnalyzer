import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import analyzeRoute from "./routes/analyze.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

console.log("analyzeRoute type:", typeof analyzeRoute);

app.get("/test", (req, res) => res.json({ message: "Server works!" }));
app.use("/api", analyzeRoute);

app.use((err, req, res, next) => {
  console.error("Express error:", err);
  res.status(500).json({ error: err.message });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
