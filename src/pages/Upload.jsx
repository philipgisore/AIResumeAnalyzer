import React, { useState } from "react";


export default function Upload() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        const file =e.target.files[0];
        setSelectedFile(file);
    };
    const handleUpload = () => {
        if(!selectedFile) {
            alert("Please select a file first!");
            return;
        }

        //Create a new upload entry
        const newUpload = {
            fileName: selectedFile.name,
            date: new Date().toLocaleString(),
        };
        
        //Get existing uploads from localStorage
        const existingUploads = JSON.parse(localStorage.GetItem("uloads")) || [];

        //Add a new upload at the start 
        const updateUploads = [newUpload, ...existingUploads];

        //Save back to the LocalStorage
        localeStorage.setItem("uploads", JSon.stringify(updatedUploads));

        //Reset file Input
        setSelectedFile(null);
        document.getElementById("resumeInput").value = "";

        alert("Resume uploaded successfuly!");
    };

    return (
       <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Upload Your Resume</h2>
            <input 
                id="resumeInput"
                type="file"
                accept=".pdf, .doc, .docx"
                onChange={handleFileChange}
                className="mb-4 block w-full border border-gray-300 rounded-lg p-2"
            />
            <button 
                onClick={handleUpload}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
                Upload
            </button>
       </div> 
    );
}