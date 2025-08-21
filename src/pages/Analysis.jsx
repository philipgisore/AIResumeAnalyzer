import { div } from "framer-motion/client";
import { useState, useEffect } from "react";

export default function Analysis() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    const savedResult = localStorage.getItem("analysisResult");
    if (savedResult) {
      setResult(JSON.parse(savedResult))
    }
  }, []);

  if (!result) {
    return <p className="text-center text-gray-400 mt-10">
      No analysis found plaese upload a resume first.
    </p>;
  }

  return (
    <div className="space-y-6 pt-16 P-6">
      {/* ATS Score */}
      <div className="bg-gradient-to-br from-[#173465] to-[#2F3E6D] p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl font-bold text-blue-300">📊 ATS Compatibitily Score</h2>
        <p className="text-white/80 text-lg">{result.atsScore}</p>
      </div>

      {/* Strengths */}
      <div className="bg-gradient-to-br from-[#173465] to-[#343C74] p-6 rounded-xl shadow-lg">
        <h2 className="text-lg font-bold text-white">💪 Perfomance Analysis </h2>
        <p className="text-green-300 leading-relaxed mt-4">✅ Key Strengths</p>
        <ul className="list-disc list-inside text-white/80 mt-2">
          {result.strengths.map((item, i) => <li key={i} className=" border border-white/10 bg-gradient-to-br from-[#164461] via-[#184164]to-[#273E66] rounded-xl p-4 mt-4" >{item}</li>)}
        </ul>

        {/* Opportinities */}
        <h2 className="text-[#F6A2A3] mt-5 font-bold ">Optimization opportunities</h2>
        <ul className="list-disc list-inside text-[#F6A2A3] mt-2">
          {result.opportunities.map((item, i) => <li key={i} className="border border-[#4C324B] bg-gradient-to-br from-[#2D3551] via-[#303C53] to-[#3C355F] rounded-xl p-4 mt-4">{item}</li>)}
        </ul>
      </div>


    </div>
  );
}




