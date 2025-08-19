import { useEffect, useState } from "react";

export default function Analysis() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    const savedResult = localStorage.getItem("analysisResult");
    if (savedResult) {
      setResult(JSON.parse(savedResult));
    }
  }, []);

  if (!result) {
    return (
      <p className="text-center text-gray-400 mt-10">
        No analysis found. Please upload a resume first.
      </p>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6">📊 Resume Analysis</h2>

      {/* Analysis Summary */}
      <div className="bg-gradient-to-br from-[#173465] via-[#244865] to-[#2F3E6D] p-6 rounded-2xl shadow-lg">
        <h3 className="text-lg font-semibold text-blue-300 mb-3">
          Analysis Summary
        </h3>
        <p className="text-white/80">{result.summary}</p>
      </div>

      {/* Optimized Resume */}
      <div className="bg-gradient-to-br from-[#1C4278] via-[#1F476A] to-[#343C74] p-6 rounded-2xl shadow-lg">
        <h3 className="text-lg font-semibold text-blue-300 mb-3">
          Optimized Resume
        </h3>
        <pre className="text-white/80 whitespace-pre-wrap">
          {result.optimizedResume}
        </pre>
      </div>
    </div>
  );
}



