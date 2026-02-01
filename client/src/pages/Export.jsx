import { useParams, useNavigate } from "react-router-dom";
import { FileText, File, ArrowLeft, BarChart3 } from "lucide-react";
import { getAnalysisById } from "../utils/storage";

export default function Export() {
  const { id } = useParams();
  const navigate = useNavigate();
  const analysis = getAnalysisById(id);

  // Mock data for testing
  const mockAnalysis = {
    id: 'test-123',
    title: 'Software Engineer Resume',
    date: new Date().toISOString(),
  };

  // Use real analysis if available, otherwise use mock data
  const displayAnalysis = analysis || mockAnalysis;

  // Show a warning if using mock data (optional - helps you know you're in test mode)
  const isMockData = !analysis;

  const handleExport = (type) => {
    alert(`Exporting ${displayAnalysis.title} as ${type}`);
    // Later: backend / file generation logic
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 pt-20 text-white">
      
      {/* Back */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-blue-300 hover:text-blue-200 mb-6"
      >
        <ArrowLeft size={18} />
        Back to Analysis
      </button>

      {/* Mock Data Warning (optional - remove this later) */}
      {isMockData && (
        <div className="bg-yellow-900/30 border border-yellow-700 rounded-lg p-4 mb-6">
          <p className="text-yellow-200 text-sm">
            ⚠️ Using mock data for testing. Connect from Analysis page for real data.
          </p>
        </div>
      )}

      <div className=""></div>
  
      {/* Header */}
      <div className="w-full max-w-5xl bg-gradient-to-br from-[#173465] via-[#244865] to-[#2F3E6D] rounded-[24px] p-6 sm:p-10 shadow-xl">
        <div>
          <h1 className="text-3xl font-bold mb-4">
            📁 Export Your Optimized Resume
          </h1>
          <p className="text-blue-100">
            Choose your preferred export format and apply AI optimizations
        </p>
        </div>
        {/* Export Options */}
      <div className="space-y-6 mt-6">
        
        {/* PDF */}
        <div
          onClick={() => handleExport("PDF")}
          className="cursor-pointer bg-gradient-to-r from-slate-800 to-slate-700 
                     hover:translate-y-1 transition rounded-2xl p-8 border border-white/10"
        >
          <div className="flex items-center gap-4 mt-4">
            <FileText size={42} className="text-blue-400" />
            <div>
              <h3 className="text-xl font-semibold">Professional PDF</h3>
              <p className="text-slate-300 text-sm">
                ATS-optimized PDF with enhanced formatting and keyword placement
              </p>
            </div>
          </div>
        </div>
      </div>
      
        {/* DOCX */}
        <div
          onClick={() => handleExport("DOCX")}
          className="cursor-pointer bg-gradient-to-r from-slate-800 to-slate-700 
                     hover:translate-y-1 transition rounded-2xl p-8 border border-white/10 mt-6"
        >
          <div className="flex items-center gap-4">
            <File size={42} className="text-green-400" />
            <div>
              <h3 className="text-xl font-semibold">Word Document</h3>
              <p className="text-slate-300 text-sm">
                Editable DOCX format with AI improvements and tracked changes
              </p>
            </div>
          </div>
        </div>
      
          {/* ANALYSIS REPORT */}
    <div
      onClick={() => handleExport("ANALYSIS_REPORT")}
      className="
        cursor-pointer
        bg-gradient-to-r from-slate-800 to-slate-700
        hover:translate-y-1
        transition-all duration-300
        rounded-2xl p-8 border border-white/10 mt-6
      "
    >
      <div className="flex items-center gap-4">
        <BarChart3 size={42} className="text-purple-400" />
        <div>
          <h3 className="text-xl font-semibold">Analysis Report</h3>
          <p className="text-slate-300 text-sm">
            Comprehensive PDF report with insights and recommendations
          </p>
        </div>
      </div>
    </div>
{/* AI OPTIMIZATIONS */}
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mt-10">
      <h3 className="text-lg font-semibold mb-4">
        ✅ AI Optimizations Applied
      </h3>

      <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
        <li>3 high-impact keywords strategically integrated</li>
        <li>Professional formatting optimized for ATS parsing</li>
        <li>Enhanced technical skills section prominence</li>
        <li>Quantified achievements with stronger action verbs</li>
        <li>Industry-standard section headers and structure</li>
      </ul>
    </div>
          {/* ACTION BUTTONS */}
    <div className="flex flex-col items-center gap-4 mt-10">

      <button
        onClick={() => handleExport("PDF")}
        className="
          relative
          p-6 py-3
          rounded-full
          font-semibold
          text-white
          bg-gradient-to-br from-[#173465] via-[#244865] to-[#2F3E6D]

          border border-white/10 mb-4
          shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]

          hover:translate-y-1

          hover:shadow-lg
          transition-all duration-300
        "

      >
        📥 Download Optimized Resume
      </button>

      <button
        className="
          bg-white/10 hover:bg-white/15
          text-white py-3 p-6 rounded-full
          transition
          hover:translate-y-1
          border border-white/10 mb-4
        "
      >
        📄 Get Full Analysis Report
      </button>

      <button
        onClick={() => navigate("/")}
        className="
          bg-white/10 hover:bg-white/10
          text-white px-6 py-3 rounded-full
          transition
          hover:translate-y-1
          border border-white/10 
        "
      >
        🔄 Analyze New Resume
      </button>

    </div>
      </div>
      

    </div>
  );
}