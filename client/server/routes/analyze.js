import express from "express";
import { analyzeResumeText } from "../utils/analyzer.js";

const router = express.Router();

// POST /api/analyze
router.post("/", async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ error: "No resume text provided" });
    }

    const analysis = await analyzeResumeText(text);
    res.json({ analysis });
  } catch (err) {
    console.error("Error analyzing resume:", err);
    res.status(500).json({ error: "Failed to analyze resume" });
  }
});

export default router;
