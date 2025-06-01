import React from 'react';
import { useParams } from 'react-router-dom';
import { documentServicesData } from '../data/docummentData';

const DocumentDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const document = documentServicesData.find(doc => doc.id === id);

  if (!document) {
    return <div className="text-center text-red-500 mt-10">Document not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{document.name}</h1>
      <p className="mb-4 text-gray-700">{document.description}</p>

      {document.pdfUrl && (
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Preview:</h2>
          <iframe
            src={document.pdfUrl}
            width="100%"
            height="600px"
            title="PDF Preview"
            className="border rounded shadow"
          ></iframe>
        </div>
      )}

      {document.pdfUrl && (
        <a
          href={document.pdfUrl}
          download
          className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Download PDF
        </a>
      )}
    </div>
  );
};

export default DocumentDetailPage;
