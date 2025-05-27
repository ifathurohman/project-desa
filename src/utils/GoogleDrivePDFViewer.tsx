import React, { useState } from 'react';

interface Props {
  fileId: string;
  apiKey: string;
  onClose: () => void;
}

const GoogleDrivePDFViewer: React.FC<Props> = ({ fileId, apiKey, onClose }) => {
  const [webViewLink, setWebViewLink] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  React.useEffect(() => {
    fetchGoogleDriveFileLink(fileId, apiKey)
      .then(data => {
        if (data.webViewLink) {
          setWebViewLink(data.webViewLink);
        } else {
          setError('No preview link available.');
        }
      })
      .catch((err) => setError(err.message));
  }, [fileId, apiKey]);

  if (error) return <div className="p-4 text-red-600">Error: {error}</div>;

  if (!webViewLink) return <div className="p-4">Loading preview...</div>;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
      <div className="bg-white rounded-lg p-4 max-w-4xl w-full h-[80vh] relative shadow-lg overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-lg font-bold"
        >
          ✕
        </button>
        <iframe
          src={webViewLink}
          width="100%"
          height="100%"
          title="Google Drive PDF Preview"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>
  );
};

// helper function outside component
async function fetchGoogleDriveFileLink(fileId: string, apiKey: string) {
  const url = `https://www.googleapis.com/drive/v3/files/${fileId}?fields=webViewLink,webContentLink&key=${apiKey}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Google Drive API error: ${response.statusText}`);
  }
  return response.json();
}

export default GoogleDrivePDFViewer;
