export const saveUpload = (file) => {
    const uploads = JSON.parse(localStorage.getItem("uploads") || "[]");
    const newUpload = {
        id: Date.now(),
        name: file.name,
        size: `${(file.size / 1024).toFixed(2)}KB`,
        uploadedAt: new Date().toISOString(),
        url: URL.createObjectURL(file),
    };
    uploads.push(newUpload);
    localStorage.setItem("uploads", JSON.stringify(uploads));
};

export const getUploads = () => {
    return JSON.parse(localStorage.getItem("uploads") || "[]");
};

export function getAnalyses() {
    return JSON.parse(localStorage.getItem("analyses")) || [];
}

export function getAnalysisById(id) {
    const analyses = getAnalyses();
    return analyses.find(a => a.id === id); 
}

export function saveAnalysis(analysis) {
    const analyses = getAnalyses();
    analyses.push({
        ...analysis,
        createdAt: new Date().toISOString()
    });
    localStorage.setItem("analyses", JSON.stringify(analyses));
}