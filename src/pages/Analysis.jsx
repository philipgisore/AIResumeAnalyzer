import { useState, useEffect } from "react";
import ATSScoreCard from "../components/ATSScoreCard";

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
      No analysis found please upload a resume first.
    </p>;
  }

  return (
    <section className="w-full justify-center items-center py-12 px-4">

      <div className="space-y-6 pt-8">
      {/* ATS Score */}
        <ATSScoreCard score={result.atsScore} />
      
      {/* Strengths */}
      <div className="bg-gradient-to-br from-[#173465] to-[#343C74] p-6 rounded-xl shadow-lg">
        <h2 className="text-lg font-bold text-white">💪 Perfomance Analysis </h2>
        <p className="text-green-300 leading-relaxed mt-4">✅ Key Strengths</p>
        <ul className="list-disc list-inside text-white/80 mt-2">
          {result?.performance?.strengths?.map((strength, i) => <li key={i} className=" border border-white/10 bg-gradient-to-br from-[#164461] via-[#184164]to-[#273E66] rounded-xl p-4 mt-4" >{strength}</li>)}
        </ul>

        {/* Opportinities */}
        <h2 className="text-[#F6A2A3] mt-5 font-bold ">Optimization opportunities</h2>
        <ul className="list-disc list-inside text-[#F6A2A3] mt-2">
          {result?.performance?.oportunities?.map((opportunities, i) => <li key={i} className="border border-[#4C324B] bg-gradient-to-br from-[#2D3551] via-[#303C53] to-[#3C355F] rounded-xl p-4 mt-4">{opportunities}</li>)}
        </ul>
      </div>

      <button className="rounded-xl w-fit text-white bg-blue-500 hover:bg-blue-400 flex items-center justify-center relative py-3 px-4 mx-auto mb-6">Begin AI Analysis</button>
    </div>
    </section>
    
  );
}




