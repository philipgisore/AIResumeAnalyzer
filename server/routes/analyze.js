import express from "express";
import { analyzeResumeText } from "../utils/analyzer.js";

const router = express.Router();

// POST /api/analyze
router.post("/analyze", async (req, res) => {
  try {
    const { text } = req.body;

    if (!text || text.trim() === "") {
      return res.status(400).json({
        error: "Resume text is required",
      });
    }

    const analysis = await analyzeResumeText(text);

    res.status(200).json({
      success: true,
      analysis,
    });

  } catch (error) {
    console.error("Resume analysis error:", error);

    res.status(500).json({
      success: false,
      error: "Failed to analyze resume",
    });
  }
});

export default router;
