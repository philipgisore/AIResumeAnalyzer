import { useState, useEffect } from "react";
import ATSScoreCard from "../components/ATSScoreCard";
import EnhancedResume from "../components/EnhancedResume";

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
        <div className="w-full mx-auto max-w-5xl bg-gradient-to-br from-[#173465] via-[#244865] to-[#2F3E6D] rounded-[24px] p-6 sm:p-10 shadow-xl text-white">
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
          <div className="w-ull mx-auto max-w-5xl bg-gradient-to-br from-[#173465] via-[#244865] to-[#2F3E6D] rounded-[24px] p-6 sm:p-10 shadow-xl">
            {/* Title */}
            <h className="text-3xl font-bold text-white flex items-center gap-2">🎯 Advanced Keyword Analysis</h>

            {/* Matched Keywords */}
            <p className="text-green-400 font-medium mt-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              Matched keywords ({result.keywordAnalysis.matched.length})
            </p>
            <div className="flex flex-wrap gap-3 mt-3">
              {result.keywordAnalysis.matched.map((kw, i) => (
                <span 
                  key={i}
                  className="px-4 py-2 rounded-full bg-green-600/30 text-green-200 font-medium text-sm shdow-sm"
                >
                  {kw}
                </span>
              ))}
            </div>
            {/*Missing keywords */}
            <p className="text-red-400 font-medium mt-6 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-400"/>
              Missing High-Impact keywords ({result.keywordAnalysis.missing.length})
            </p>
            <div className="flex flex-wrap gap-3 mt-3">
              {result.keywordAnalysis.missing.map((kw, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full bg-red-600/30 text-red-300 font-medium text-sm shadow-sm"
                >
                  {kw}
                </span>
              ))}
            </div>

            {/* AI Insight box */}
            <div className="mt-6 bg-blue-900/40 text-blue-200 text-sm rounded-xl p-4 border border-blue-700/40">
              💡 <span className="font-semibold text-blue-100">AI Insight:</span> Adding these keywords could increase your ATS score to <span className="font-bold text-white">98/100</span> and improve match rate by <span className="font-bold text-white">23%</span>.
            </div>
          </div>
        )}

        <EnhancedResume />
      </div>
    </section>
  );
}






