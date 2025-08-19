import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function UploadSection({ resumeFile, jobDescription }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleAIAnalysis = async () => {
    if (!resumeFile) {
      alert("Please upload a resume first!");
      return;
    }

    setLoading(true);

    try {
      // Simulated AI API call (replace with your backend/AI endpoint)
      const response = await fetch("http://localhost:5000/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          resume: resumeFile,
          jobDescription: jobDescription, // if you have it
        }),
      });

      const data = await response.json();

      // Save to localStorage or context so Analysis page can read it
      localStorage.setItem("analysisResult", JSON.stringify(data));

      // Navigate to analysis page
      navigate("/analysis");
    } catch (error) {
      console.error("AI analysis failed", error);
      alert("Something went wrong while analyzing. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleAIAnalysis}
      disabled={loading}
      className="w-fit flex justify-center mx-auto mt-6 py-3 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold shadow-lg hover:opacity-90 transition disabled:opacity-50"
    >
      {loading ? "Analyzing..." : "🚀 Begin AI Analysis"}
    </button>
  );
}
