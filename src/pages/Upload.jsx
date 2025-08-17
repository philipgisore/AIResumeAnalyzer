import React, { useState, useEffect } from 'react';
import { saveUpload } from '../utils/storage';

export default function ResumeUpload() {
        const [resumeFile, setResumeFile] = useState(null);
    const [resumeBase64, setResumeBase64] = useState(null);
    const [jobDescription, setJobDescription] = useState('');

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
    const handleFileChange = async (e) => {
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
        })
    };

}