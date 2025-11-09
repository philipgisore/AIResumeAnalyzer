import React from "react";
import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";


export default function Home() {
    return (
        <>
            <Hero />
           <section className="grid gap-6 md:grid-cols-3 sm:grid-cols-2 mt-10 mb-7 px-4 md:px-6 pt-10">
                <FeatureCard 
                    emoji="🎯"
                    title="ATS Compatibility Analysis"
                    description="Advanced AI algorithms analyze your resume's compatibility with Applicant Tracking Systems, ensuring maximum visibility to recruiters and hiring managers."
                />
                <FeatureCard 
                    emoji="🧠"
                    title="Machine Learning Insights"
                    description="Our proprietary ML models provide deep insights into content optimization, keyword density, and formatting best practices based on industry data."
                />
                <FeatureCard 
                    emoji="📊"
                    title="Real-time Performance Metrics"
                    description="Get comprehensive analytics and scoring with actionable recommendations that update in real-time as you make improvements."
                />
                <FeatureCard
                    emoji="💼"
                    title="Job-Specific Optimization"
                    description="Upload job descriptions to receive tailored optimization suggestions that align your resume with specific role requirements and industry standards."
                />
                <FeatureCard
                    emoji="🎨"
                    title="Professional Formatting"
                    description="AI-driven design recommendations ensure your resume maintains professional aesthetics while maximizing ATS readability and human appeal."
                />
                <FeatureCard
                    emoji="⚡"
                    title="Enterprise-Grade Export"
                    description="Export optimized resumes in multiple professional formats with version control and change tracking for seamless application management."
                />
            </section> 
        </>       
        
    );
}