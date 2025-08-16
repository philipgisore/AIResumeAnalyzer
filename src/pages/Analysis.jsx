// src/pages/Analysis.jsx
import { useParams } from "react-router-dom";
import { getAnalysisById } from "../utils/storage.js";

export default function Analysis() {
  const { id } = useParams();
  const analysis = getAnalysisById(id);

  if (!analysis) return <p>Analysis not found.</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold">{analysis.title}</h1>
      <pre className="bg-gray-100 p-4 rounded">
        {JSON.stringify(analysis.data, null, 2)}
      </pre>
    </div>
  );
}

