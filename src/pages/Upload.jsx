import React, { useState, useEffect } from 'react';
import { saveUpload } from '../utils/storage';
import { Upload, FileText } from "lucide-react"
import { p } from 'framer-motion/client';

export default function ResumeUpload() {
    const [resumeFile, setResumeFile] = useState(null);
    const [resumeBase64, setResumeBase64] = useState(null);
    const [jobDescription, setJobDescription] = useState('');
    const [dragActive, setDragActive] = useState(false);

    // Load from localStorage when the component mounts
    useEffect(() => {
        const storedFileName = localStorage.getItem("resumeFileName");
        const storedFileContent = localStorage.getItem("resumeFileContent");
        const storedDesc = localStorage.getItem("jobDescription");

        if (storedFileName) setResumeFile(storedFileName);
        if (storedFileContent) setResumeBase64(storedFileContent);
        if (storedDesc) setJobDescription(storedDesc);
    }, []);

    // Save to localStorage whenever values change
    useEffect(() => {
        if (resumeFile) localStorage.setItem("resumeFileName", resumeFile);
        if (resumeBase64) localStorage.setItem("resumeFileContent", resumeBase64);
        if (jobDescription) localStorage.setItem("jobDescription", jobDescription);
    }, [resumeFile, resumeBase64, jobDescription]);

    // Convert file to Base64 string
    const fileToBase64 = (file) => 
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });

    // Handle file upload
    const handleFile = async (e) => {
        const file = e.target.files[0];
        if (file && file.size <= 10 * 1024 * 1024) {
            const base64 = await fileToBase64(file);
            setResumeFile(file.name);
            setResumeBase64(base64);
            saveUpload(file); // store metadata
        } else {
            alert("File too large. Max 10MB");
        }
    };

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (file) handleFile(file);
    };

    //Drag & Drop handlers
    const handleDragOver = (e) => {
        e.preventDefault();
        setDragActive(true);
    };

    const handleDragLeave = () => setDragActive(false);

    const handleDrop = async (e) => {
        e.preventDefault();
        setDragActive(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFile(e.dataTransfer.files[0]);
        }
    }

    // Mock AI integration later
    const handleSubmit = () => {
        if (!resumeBase64 || !jobDescription) {
            alert("Please upload a resume and enter a job description");
            return;
        }

        //Save to storage.js for Dashboard to display
        saveAnalysis({
            id: Date.now(),
            title: resumeFile,
            data: {summary: jobDescription},
        });

        console.log("Saved analysis:", {
            resumeFile,
            resumeBase64,
            jobDescription,
        });
    };

    return (
        <section className='w-full flex justify-center items-center py-12 pt-20'>
            <div className='w-full max-w-2xl bg-gradient-to-br from-[#173465] via-[#244865] to-[#2F3E6D] rounded-4xl p-10'>
               {/* Upload content goes here */}
               <div className='flex items-baseline gap-2'>
                    <Upload className='w-5 h-5 text-white' />
                    <h2 className='text-white text-2xl font-bold mb-4 font sans'>Upload your resume</h2> 
                </div>

                {/* Drag & Drop area */}  
                <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`relative border-2 border-dashed p-12 text-center transition-all duration-200 cursor-pointer
                                gradient-to-r from-[#1C4278] via-[#1F476A] to-[#343C74] rounded-2xl shadow-lg border border-[#1E3A68]
                            ${dragActive
                                ? 'border-blue-400 bg-blue-500/20'
                                : 'border-blue-500/50 hover:border-blue-400 hover:bg-blue-500/10'
                            }
                    `}
                >
                    <input 
                        type='file'
                        accept='.pdf,.doc,.docx'
                        onChange={handleFile}
                        className='hidden'
                        id='resume-upload'
                    />

                    <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto">
                        <FileText className="w-8 h-8 text-blue-300" />
                    </div>

                    <label htmlFor='resume-upload' className='cursor-pointer'>
                        {resumeFile ? (
                            <div>
                                <p className='text-white/60 mt-3'>
                                    📄 {resumeFile} uploaded successfully
                                </p>  
                                <p className="text-blue-300 text-sm mt-2">Click to change file</p>
                            </div>       
                        ):(
                            <div>
                                <h3 className='text-white font-semibold '>
                                    Drag & Drop your Resume
                                </h3>
                                <p className='text-blue-200 mt-2'>Supports PDF, DOC,DOCX up to 10MB</p>
                                <p className='text-blue-300 text-sm mt-2'>Click to browse files from device</p>
                            </div>
                            
                        )}
                    </label>
                </div>
            </div>
        </section>
       
    );

}