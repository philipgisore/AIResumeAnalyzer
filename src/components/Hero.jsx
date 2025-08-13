import React from "react";
import { Upload } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center pt-10 px-4 text-center"
    >
      <div className="max-w-3xl">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[#a5c5f9] via-[#6da2f7] to-[#3b81f6] bg-clip-text text-transparent">
              AI-Powered 
            </span>{" "}
            <span className="bg-gradient-to-r from-[#427ff6] via-[#427ff6] to-[#6d6df6] bg-clip-text text-transparent">
              Resume
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#96bcf9] via-[#5190f7] to-[#4b7bf6] bg-clip-text text-transparent">
              Optimization 
            </span>{" "}
            <span className="bg-gradient-to-r from-[#4f79f6] via-[#686ff6] to-[#686ff6] bg-clip-text text-transparent">
              Platform
            </span>
          </h1>

        {/* Subheading */}
        <p className="text-gray-300 text-lg sm:text-xl mb-8 max-w-[38rem] sm:max-w-[34rem] md:max-w-[45rem] mx-auto">
            Leverage advanced artificial intelligence to optimize your resume for ATS systems, 
            enhance keyword matching, and significantly increase your interview success rate.
        </p>


        {/* CTA Button */}
        <button className="mx-auto flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold text-lg shadow-lg bg-gradient-to-r from-[#3577F0] via-[#1D4DD6] to-[#1D4DD6] hover:opacity-90 transition-all ">
          🚀 Upload Your Resume for Instant AI Feedback
        </button>
        
      </div>
    </section>
  );
}
