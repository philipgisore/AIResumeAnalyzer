import React, { useState, useEffect } from "react";
import { saveUpload } from "../utils/storage";
import { Upload, FileText, Briefcase, X } from "lucide-react";
import BeginAnalysis from "../components/BeginAnalysis";

export default function ResumeUpload() {
  const [resumeFile, setResumeFile] = useState(null);
  const [resumeBase64, setResumeBase64] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [dragActive, setDragActive] = useState(false);

  // Load saved data from localStorage
  // Load saved data from localStorage
  useEffect(() => {
    const storedFileName = localStorage.getItem("resumeFileName");
    const storedFileContent = localStorage.getItem("resumeFileContent");
    const storedDesc = localStorage.getItem("jobDescription");

    if (storedFileName) setResumeFile(storedFileName);
    if (storedFileContent) setResumeBase64(storedFileContent);
    if (storedDesc && storedDesc !== "h") setJobDescription(storedDesc); // Added check for "h"
  }, []);

  // Save data to localStorage whenever values change
  useEffect(() => {
    if (resumeFile) localStorage.setItem("resumeFileName", resumeFile);
    if (resumeBase64) localStorage.setItem("resumeFileContent", resumeBase64);
    if (jobDescription) localStorage.setItem("jobDescription", jobDescription);
  }, [resumeFile, resumeBase64, jobDescription]);

  // Convert file to Base64
  const fileToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  // Handle file upload
  const handleFile = async (file) => {
    if (file && file.size <= 10 * 1024 * 1024) {
      const base64 = await fileToBase64(file);
      setResumeFile(file.name);
      setResumeBase64(base64);
      saveUpload(file);
    } else {
      alert("File too large. Max 10MB");
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) handleFile(e.target.files[0]);
  };

  // Drag & Drop handlers
  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };
  const handleDragLeave = () => setDragActive(false);
  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  // Remove file
  const handleRemoveFile = () => {
    setResumeFile(null);
    setResumeBase64(null);
    localStorage.removeItem("resumeFileName");
    localStorage.removeItem("resumeFileContent");
  };

  // Mock AI integration later
  const handleSubmit = () => {
    if (!resumeBase64 || !jobDescription) {
      alert("Please upload a resume and enter a job description");
      return;
    }

    // Example save call
    saveAnalysis({
      id: Date.now(),
      title: resumeFile,
      data: { summary: jobDescription },
    });

    console.log("Saved analysis:", {
      resumeFile,
      resumeBase64,
      jobDescription,
    });
  };

  return (
    <section className="w-full flex justify-center items-center py-12 pt-20 px-4">
      <div className="w-full max-w-5xl bg-gradient-to-br from-[#173465] via-[#244865] to-[#2F3E6D] rounded-[24px] p-6 sm:p-10 shadow-xl">
        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <Upload className="w-5 h-5 text-white" />
          <h2 className="text-white text-xl sm:text-2xl font-bold font-sans">
            Upload your resume
          </h2>
        </div>

        {/* Drag & Drop Area */}
        <div
          onDragEnter={handleDragOver}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => document.getElementById("resume-upload").click()}
          className={`relative w-full min-h-[200px] sm:min-h-[220px] border-2 border-dashed p-6 sm:p-8 text-center transition-all duration-200 cursor-pointer
            bg-gradient-to-r from-[#1C4278] via-[#1F476A] to-[#343C74]
            rounded-2xl shadow-lg border-[#274879]
            ${
              dragActive
                ? "ring-2 ring-blue-400"
                : "hover:border-white/10 hover:translate-y-1"
            }`}
        >
          <input
            id="resume-upload"
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="hidden"
          />

          <div className="space-y-3 mt-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/10 rounded-lg flex items-center justify-center mx-auto">
              <FileText className="w-7 h-7 sm:w-8 sm:h-8 text-blue-200" />
            </div>

            {resumeFile ? (
              <div>
                <p className="text-white/80 mt-1 truncate">
                  📄 {resumeFile} uploaded successfully
                </p>
                <p className="text-blue-200 text-sm mt-2">Click to change file</p>
                <button
                  onClick={handleRemoveFile}
                  className="mt-3 inline-flex items-center gap-1 px-3 py-1 text-xs text-white bg-red-500/70 hover:bg-red-500 rounded-md transition"
                >
                  <X className="w-3 h-3" /> Remove File
                </button>
              </div>
            ) : (
              <div>
                <h3 className="text-white font-semibold">
                  Drag & Drop your Resume
                </h3>
                <p className="text-blue-200 mt-2">
                  Supports PDF, DOC, DOCX up to 10MB
                </p>
                <p className="text-blue-300 text-sm mt-2 mb-8">
                  Click to browse files from device
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Job Description Section */}
      <div className="flex items-center gap-2 mb-3 mt-10">
        <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
          <Briefcase className="w-4 h-4 text-white" />
        </div>
        <h3 className="text-white font-semibold text-lg">
          Target Job Description
        </h3>
      </div>

      <p className="font-light text-white/80 mb-4">
        Paste the complete job description for AI-powered keyword analysis and
        role-specific optimization recommendations.
      </p>

      <textarea
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        placeholder="Paste the complete job description here..."
        className="w-full mt-3 p-4 border border-white/10 rounded-xl text-white font-light font-sans bg-transparent
          focus:outline-none focus:ring-2 focus:ring-white/10 focus:border-white/30 hover:border-white/20
          placeholder:text-gray-400 text-sm sm:text-base"
        rows="9"
      />

        {/* Begin AI analysis button */}
        <BeginAnalysis resumeFile={resumeFile} jobDescription={jobDescription} />
        
      </div>
    </section>
  );
}
