// Analyzes resume text for ATS scoring and keyword matching (simulation)
export async function analyzeResumeText(text) {
  // Example keywords — can customize later
  const keywords = ["JavaScript", "React", "Node.js", "Python", "SQL"];

  const matched = keywords.filter(k => text.toLowerCase().includes(k.toLowerCase()));
  const missing = keywords.filter(k => !text.toLowerCase().includes(k.toLowerCase()));

  const atsScore = Math.round((matched.length / keywords.length) * 100);

  return {
    atsScore,
    performance: {
      strengths: matched.map(k => `Strong skill in ${k}`),
      opportunities: missing.map(k => `Consider improving or mentioning ${k}`)
    },
    keywordAnalysis: { matched, missing }
  };
}
