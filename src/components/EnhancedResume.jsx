import { div } from "framer-motion/client";
import { useEffect, useState } from "react";

export default function EnhancedResume() {
    const [resume, setResume] = useState("");

    useEffect(() => {
        const data = localStorage.getItem("enhancedResume");
        if (data) setResume(data);
    }, []);

    return (
        <div className="w-full mx-auto max-w-5xl bg-gradient-to-br from-[#173465] via-[#244865] to-[#2F3E6D] rounded-[24px] p-6 sm:p-10 shadow-xl text-white">
          <h1 className="text-white text-2xl font-bold mb-4">
            🔍 AI-Enhanced Resume Preview    
         </h1> 
         <p className="text-white/80 mb-6">
            Preview of your resume with AI-recommended optimizations applied: 
         </p> 
         <div className="bg-white p-8 rounded-xl shadow-lg max-w-3xl w-full">
            <div 
                className="prose"
                dangerouslySetInnerHTML={{ __html: resume }}
            />
         </div>
        </div>
    );
}