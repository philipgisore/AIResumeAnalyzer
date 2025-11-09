import { useEffect, useState } from "react";
import jsPDF from "jspdf";

export default function EnhancedResume() {
  const [resume, setResume] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("enhancedResume");
    if (data) setResume(data);
  }, []);

  // Export as HTML
  const exportAsHTML = () => {
    const blob = new Blob([resume], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "AI_Enhanced_Resume.html";
    a.click();
    URL.revokeObjectURL(url);
  };

  // Export as PDF
  const exportAsPDF = () => {
    const doc = new jsPDF("p", "pt", "a4");
    doc.html(resume, {
      callback: function (pdf) {
        pdf.save("AI_Enhanced_Resume.pdf");
      },
      margin: [40, 40, 40, 40],
      html2canvas: { scale: 0.5 },
    });
  };

  return (
    <div className="w-full mx-auto max-w-5xl bg-gradient-to-br from-[#173465] via-[#244865] to-[#2F3E6D] rounded-[24px] p-6 sm:p-10 shadow-xl text-white">
      <h1 className="text-white text-2xl font-bold mb-4">
        🔍 AI-Enhanced Resume Preview
      </h1>
      <p className="text-white/80 mb-6">
        Preview of your resume with AI-recommended optimizations applied:
      </p>

      <div className="bg-white p-8 rounded-xl shadow-lg max-w-3xl w-full text-black">
        <div className="prose" dangerouslySetInnerHTML={{ __html: resume }} />
      </div>

      {/* Export Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
        <button
          onClick={exportAsPDF}
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#1D4ED8] to-[#2563EB] hover:from-[#1E40AF] hover:to-[#1D4ED8] text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          <span role="img" aria-label="pdf">📘</span>
          Export as PDF
        </button>

        <button
          onClick={exportAsHTML}
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#1E3A8A] to-[#312E81] hover:from-[#1E40AF] hover:to-[#4338CA] text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          <span role="img" aria-label="html">💾</span>
          Export as HTML
        </button>
      </div>
    </div>
  );
}
