import React, { useState, useEffect } from "react";
import { FileText } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [jobAnalyses, setJobAnalyses] = useState([]);

  useEffect(() => {
    if (!user) {
      navigate("/signin");
      return;
    }

    setJobAnalyses(user.analyses || []);
  }, [user, navigate]);

  // Prevent flicker before redirect
  if (!user) return null;

  return (
    <div className="space-y-6 pt-10 p-8">
      {/* Welcome Header */}
      <div
        className="bg-gradient-to-br from-[#173465] via-[#244865] to-[#2F3E6D]
        rounded-3xl p-10 text-white shadow-xl py-4"
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2 mt-2">
            Welcome back, {user.name} 👋
          </h1>

          <p className="text-blue-100 text-lg mb-6">
            Your professional resume optimization dashboard
          </p>

          <Link
            to="/upload"
            className="bg-blue-500 hover:bg-blue-400 transition-colors px-6 py-3
            flex items-center justify-center gap-2 rounded-xl text-white
            font-semibold mx-auto w-fit"
          >
            <FileText size={20} />
            New Analysis
          </Link>
        </div>
      </div>

      {/* Job Analyses Cards */}
      <section className="space-y-6 mt-10">
        {jobAnalyses.length === 0 ? (
          <div className="text-center text-white mt-10">
            <h3 className="text-xl font-semibold">
              No analyses yet
            </h3>
            <p className="text-gray-300 mt-2">
              Click "New Analysis" to get started.
            </p>
          </div>
        ) : (
          jobAnalyses.map((job) => (
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
                      job.score >= 85
                        ? "bg-green-400"
                        : "bg-red-400"
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
                  job.score >= 85
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {job.score}
              </div>
            </Link>
          ))
        )}
      </section>
    </div>
  );
};

export default Dashboard;






