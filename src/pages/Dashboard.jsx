import React from 'react';
import { FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import DashboardCard from '../components/DashboardCard';

const mockAnalyses = [
  {
    id: "mock-1",
    title: "Senior Software Engineer",
    analyzedAt: "2 days ago",
    score: 92,
    company: "Google",
    keywords: 15,
    status: "Ready for submission",
  },
  {
    id: "mock-2",
    title: "Frontend React Developer",
    analyzedAt: "1 week ago",
    score: 78,
    company: "Meta",
    keywords: 9,
    status: "5 improvements needed",
  },
];


const Dashboard = () => {
  const [jobAnalyses, setJobAnalyses] = useState([]);

  useEffect(() => {
  const storedJobs = JSON.parse(localStorage.getItem("analyses")) || [];

  if (storedJobs.length === 0) {
    setJobAnalyses(mockAnalyses);
  } else {
    setJobAnalyses(storedJobs);
  }
}, []);


  return (
    <div className='space-y-6 pt-10 p-8'>
        {/* Welcome Header */}
        <div className='bg-gradient-to-br from-[#173465] via-[#244865] to-[#2F3E6D]
                rounded-3xl p-10 text-white shadow-xl py-4'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold mb-2'>Welcome back, Sarah 👋</h1>
                <p className='text-blue-100 text-lg mb-6'>Your professional resume optimization dashboard</p>
                <Link 
                    to="/upload" 
                    className='bg-blue-500 hover:bg-blue-400 transition-colors px-6 py-3 font-semibold relative flex 
                        items-center justify-center gap-2 rounded-xl text-white font-semibold mx-auto w-fit' 
                >
                    <FileText size={20} />
                    New Analysis
                </Link>
            </div>
        </div>

        {/* Job Analyses Cards */}
        <section className="space-y-6 mt-10">
            {jobAnalyses.map((job) => (
                <Link
                key={job.id}
                to={`/analysis/${job.id}`}
                className="
                    flex justify-between items-center
                    bg-gradient-to-br from-[#173465] via-[#244865] to-[#2F3E6D]
                    rounded-2xl p-6
                    border border-white/10
                    hover:scale-[1.01]
                    transition-all duration-300
                "
                >
                {/* LEFT */}
<div className="space-y-2">
  <h3 className="text-xl font-semibold text-white">
    {job.title}
  </h3>

  <p className="text-white font-light text-sm">
    Analyzed {job.analyzedAt}
  </p>

  <div className="flex items-center gap-2 text-sm text-white">
    <div
      className={`w-3 h-3 rounded-full shrink-0 ${
        job.score >= 85 ? "bg-green-400" : "bg-red-400"
      }`}
    />
    <span>
      {job.company} · {job.keywords} keywords matched · {job.status}
    </span>
  </div>
</div>


                {/* RIGHT SCORE */}
                <div
                    className={`text-4xl font-bold ${
                    job.score >= 85 ? "text-green-400" : "text-red-400"
                    }`}
                >
                    {job.score}
                </div>
                </Link>
            ))}
            </section>

        </div>
  );
};

export default Dashboard;






