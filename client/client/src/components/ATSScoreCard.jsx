import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from "recharts";

export default function ATSScoreCard({ score }) {
  // Parse "85%" or "85" to 85 (number). Clamp to [0,100]
  const numericScore = (() => {
    if (score === null || score === undefined) return 0;
    const n = parseFloat(String(score).replace("%", "").trim());
    return Number.isFinite(n) ? Math.max(0, Math.min(100, n)) : 0;
  })();

  const data = [
    {
      name: "ATS Score",
      value: numericScore,
      fill: numericScore >= 85 ? "#22c55e" : numericScore >= 70 ? "#3b82f6" : "#ef4444",
    },
  ];

  return (
    <div className="w-full mx-auto max-w-5xl bg-gradient-to-br from-[#173465] via-[#244865] to-[#2F3E6D] rounded-[24px] p-6 sm:p-10 shadow-xl text-white">
      <h2 className="text-xl font-bold text-blue-300">📊 ATS Compatibility Score</h2>

      <div className="relative w-[260px] h-[200px] mx-auto my-6 ">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            data={data}
            innerRadius="82%"
            outerRadius="100%"
            startAngle={90}
            endAngle={-270}
          >
            {/* Make the gauge scale explicit */}
            <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
            <RadialBar dataKey="value" background cornerRadius={10} />
          </RadialBarChart>
        </ResponsiveContainer>

        {/* Centered score label */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <p className={`text-4xl font-bold ${
            numericScore >= 85
            ? "text-green-400"
            : numericScore >= 70
            ? "text-blue-400"
            : "text-red-400"
          }`}
        >
            {numericScore}
          </p>
          <p className="uppercase text-gray-400">
            {numericScore >= 85 ? "Excellent" : numericScore >= 70 ? "Good" : "Needs Improvement"}
          </p>
        </div>
      </div>

      <p className="text-center text-gray-300 mt-2 text-sm">
        {numericScore >= 85
          ? "Your resume demonstrates exceptional ATS compatibility with strategic keyword placement and professional formatting."
          : numericScore >= 70
          ? "Your resume shows good ATS compatibility but can be improved with stronger keyword alignment."
          : "Your resume needs optimization for ATS—consider improving keyword usage and structure."}
      </p>
    </div>
  );
}


