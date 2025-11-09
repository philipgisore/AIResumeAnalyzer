import React from 'react';
import { FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import DashboardCard from '../components/DashboardCard';

const Dashboard = () => {
  const [jobAnalyses, setJobAnalyses] = useState([]);

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("analyses")) || [];
    setJobAnalyses(storedJobs);
  }, []);

  return (
    <div className='space-y-6 pt-10 p-8'>
        {/* Welcome Header */}
        <div className='bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 text-white shadow-xl'>
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
        <section className='grid gap-6 md:grid-cols-3 sm:grid-cols-2 mt-10'>
            {jobAnalyses && jobAnalyses.length > 0 ? (
                
                jobAnalyses?.map(a => (
                    <DashboardCard 
                        key={a.id}
                        id={a.id}
                        title={a.title}
                        description={a.data?.summary || "Click to view details"}
                    />
                ))
            ) : (
                <p className=''>No analyses yet. Upload one to get started!</p>
            )}
        </section>
        
    </div>
  );
};

export default Dashboard;






