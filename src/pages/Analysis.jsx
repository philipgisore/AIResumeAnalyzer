import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function UploadSection() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleAIAnalysis = async () => {
    setLoading(true);

    try {
      // ✅ Mock AI response
      const mockAIResponse = {
        atsScore: "85%",
        strengths: [
          "Strong technical background",
          "Clear project achievements",
          "Good leadership experience",
        ],
        opportunities: [
          "Add more metrics to achievements",
          "Include certifications",
          "Optimize resume length",
        ],
        keywordAnalysis: {
          matched: ["JavaScript", "React", "Node.js"],
          missing: ["AWS", "Docker", "Kubernetes"],
        },
      };

      // Save mock response to localStorage
      localStorage.setItem("analysisResult", JSON.stringify(mockAIResponse));

      // Navigate to analysis page
      navigate("/analysis");
    } catch (error) {
      console.error("AI analysis failed", error);
      alert("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleAIAnalysis}
      disabled={loading}
      className="w-full mt-6 py-3 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold shadow-lg hover:opacity-90 transition disabled:opacity-50"
    >
      {loading ? "Analyzing..." : "🚀 Begin AI Analysis"}
    </button>
  );
}




