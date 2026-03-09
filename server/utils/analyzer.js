import Anthropic from "@anthropic-ai/sdk";
import dotenv from "dotenv";
dotenv.config();

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
});

export async function analyzeResumeText(text) {
  const message = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 1024,
    messages: [
      {
        role: "user",
        content: `
You are an ATS (Applicant Tracking System) expert and professional resume reviewer.

Analyze the resume below and return your response in this exact format:

ATS Score: number/100

Strengths:
- bullet point
- bullet point

Areas for Improvement:
- bullet point
- bullet point

Missing Keywords:
- bullet point
- bullet point

Suggestions to Improve:
- bullet point
- bullet point

Resume:
${text}
`
      }
    ]
  });
  try {
    return message.content[0].text;
  }catch (error) {
  console.error("Claude error:", error);
  return "AI analysis failed. Please try again.";
  }
  
}