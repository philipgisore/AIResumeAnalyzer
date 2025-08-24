import { useState, useEffect } from "react";
import ATSScoreCard from "../components/ATSScoreCard";

// Clamp ATS score 0–100
const toScore = (score) => {
  if (score === null || score === undefined) return 0;
  const n = parseFloat(String(score).replace("%", "").trim());
  return Number.isFinite(n) ? Math.max(0, Math.min(100, n)) : 0;
};

const normalizeResult = (raw) => {
  if (!raw || typeof raw !== "object") {
    return { atsScore: 0, performance: { strengths: [], opportunities: [] }, keywordAnalysis: null };
  }

  const atsScore = toScore(raw?.atsScore);

  // If strengths/opportunities are at root, wrap them into performance
  const strengths = raw?.performance?.strengths ?? raw?.strengths ?? [];
  const opportunities = raw?.performance?.opportunities ?? raw?.opportunities ?? [];

  return {
    atsScore,
    performance: { strengths, opportunities },
    keywordAnalysis: raw?.keywordAnalysis ?? null,
  };
};

export default function Analysis() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("analysisResult");
      if (saved) {
        const parsed = JSON.parse(saved);
        setResult(normalizeResult(parsed));
      }
    } catch (e) {
      console.error("Invalid analysisResult JSON", e);
      setResult({ atsScore: 0, performance: { strengths: [], opportunities: [] }, keywordAnalysis: null });
    }
  }, []);

  if (!result) {
    return (
      <p className="text-center text-gray-400 mt-10">
        No analysis found please upload a resume first.
      </p>
    );
  }

  return (
    <section className="w-full justify-center items-center py-12 px-4">
      <div className="space-y-6 pt-8">
        {/* ATS Score */}
        <ATSScoreCard score={result.atsScore} />

        {/* Performance */}
        <div className="max-w-5xl bg-gradient-to-br from-[#173465] via-[#244865] to-[#2F3E6D] rounded-[24px] p-6 sm:p-10 shadow-xl">
          <h2 className="text-lg font-bold text-white">💪 Performance Analysis</h2>

          <p className="text-green-300 leading-relaxed mt-4">✅ Key Strengths</p>
          <ul className="list-disc list-inside text-white/80 mt-2">
            {result.performance.strengths.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>

          <h2 className="text-[#F6A2A3] mt-5 font-bold">🎯 Optimization Opportunities</h2>
          <ul className="list-disc list-inside text-[#F6A2A3] mt-2">
            {result.performance.opportunities.map((o, i) => (
              <li
                key={i}
                className="border border-[#4C324B] bg-gradient-to-br from-[#2D3551] via-[#303C53] to-[#3C355F] rounded-xl p-4 mt-4"
              >
                {o}
              </li>
            ))}
          </ul>
        </div>

        {/* Keyword Analysis */}
        {result.keywordAnalysis && (
          <div className="max-w-5xl bg-gradient-to-br from-[#2E3456] via-[#3B4465] to-[#4A3F75] rounded-[24px] p-6 sm:p-10 shadow-xl">
            <h2 className="text-lg font-bold text-white">🔑 Keyword Analysis</h2>

            <p className="text-green-300 leading-relaxed mt-4">✅ Matched Keywords</p>
            <ul className="list-disc list-inside text-white/80 mt-2">
              {result.keywordAnalysis.matched.map((kw, i) => (
                <li key={i}>{kw}</li>
              ))}
            </ul>

            <p className="text-red-300 leading-relaxed mt-4">❌ Missing Keywords</p>
            <ul className="list-disc list-inside text-red-300 mt-2">
              {result.keywordAnalysis.missing.map((kw, i) => (
                <li key={i}>{kw}</li>
              ))}
            </ul>
          </div>
        )}

        <button className="rounded-xl w-fit text-white bg-blue-500 hover:bg-blue-400 flex items-center justify-center relative py-3 px-4 mx-auto mb-6">
          Begin AI Analysis
        </button>
      </div>
    </section>
  );
}






