import React from "react";
import { Link } from "react-router-dom";

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
        <Link to="/upload" className="relative mx-auto inline-flex items-center gap-2 px-6 py-4 rounded-2xl text-white font-semibold 
            text-lg shadow-lg bg-gradient-to-r from-[#3577F0] via-[#1D4DD6] to-[#1D4DD6] hover:from-[#387CF3] 
            hover:to-[#1D42B4] transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_10px_rgba(50,72,125,0.5)] overflow-hidden group"
        >
            
            🚀 Upload Your Resume for Instant AI Feedback

            {/* Glassy sweep light */}
            <span className="pointer-events-none absolute inset-0 before:absolute before:top-0 before:left-[-75%] before:w-[70%] before:h-full before:bg-white/7 before:skew-x-[-20deg] before:transition-transform before:duration-300 group-hover:before:translate-x-[250%] group-hover:before:duration-700 border border-transparent"></span>
        </Link>

        
      </div>
    </section>
  );
}
