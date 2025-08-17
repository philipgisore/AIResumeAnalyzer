// ---------- File Helpers ----------
function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

// ---------- Uploads ----------
export const saveUpload = async (file) => {
  const uploads = JSON.parse(localStorage.getItem("uploads") || "[]");

  // Convert to Base64 for persistence
  const base64 = await fileToBase64(file);

  const newUpload = {
    id: Date.now(),
    name: file.name,
    size: `${(file.size / 1024).toFixed(2)} KB`,
    uploadedAt: new Date().toISOString(),
    content: base64,                 // full file stored
  };

  uploads.push(newUpload);
  localStorage.setItem("uploads", JSON.stringify(uploads));

  return newUpload;
};

export const getUploads = () => {
  return JSON.parse(localStorage.getItem("uploads") || "[]");
};

export const getUploadById = (id) => {
  const uploads = getUploads();
  return uploads.find(u => u.id === id);
};

// ---------- Analyses ----------
export function getAnalyses() {
  return JSON.parse(localStorage.getItem("analyses") || "[]");
}

export function getAnalysisById(id) {
  const analyses = getAnalyses();
  return analyses.find(a => a.id === id);
}

export function saveAnalysis(analysis) {
  const analyses = getAnalyses();
  analyses.push({
    ...analysis,
    createdAt: new Date().toISOString(),
  });
  localStorage.setItem("analyses", JSON.stringify(analyses));
}
