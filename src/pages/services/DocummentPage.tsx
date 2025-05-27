import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText,
  Download,
  Eye,
  X,
  Clock,
  FileDown,
  CheckCircle,
  AlertCircle,
  BookOpen
} from 'lucide-react';
import PageHeader from '../../components/ui/PageHeader';

const DocumentServicesPage: React.FC = () => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const documentInfo = {
    title: "Rencana Pembangunan Jangka Menengah Desa (RPJMDes)",
    period: "2022-2027",
    description: "Dokumen perencanaan untuk periode 6 (enam) tahun yang memuat arah kebijakan pembangunan Desa, arah kebijakan keuangan Desa, kebijakan umum, program, kegiatan, dan prioritas pembangunan Desa.",
    lastUpdated: "15 April 2024",
    fileSize: "2.5 MB",
    format: "PDF",
    chapters: [
      "Pendahuluan",
      "Profil Desa",
      "Visi dan Misi",
      "Arah Kebijakan Pembangunan Desa",
      "Program dan Kegiatan Pembangunan",
      "Penutup"
    ],
    benefits: [
      "Panduan pembangunan desa yang terstruktur",
      "Acuan dalam penyusunan RKP Desa",
      "Dokumen pendukung pengajuan dana desa",
      "Instrumen monitoring dan evaluasi pembangunan"
    ]
  };

  const handlePreview = () => {
    setPreviewUrl('/documents/RPJMDes Sindangjaya.pdf');
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/documents/RPJMDes Sindangjaya.pdf';
    link.download = 'RPJMDes Sindangjaya.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <PageHeader
        title="Dokumen RPJMDes"
        description="Rencana Pembangunan Jangka Menengah Desa Sindangjaya Periode 2022-2027"
        image="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden mb-8"
            >
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{documentInfo.title}</h2>
                    <p className="text-gray-600">Periode {documentInfo.period}</p>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={handlePreview}
                      className="inline-flex items-center px-4 py-2 bg-primary-50 text-primary-600 rounded-lg hover:bg-primary-100 transition-colors"
                    >
                      <Eye size={18} className="mr-2" />
                      Lihat Dokumen
                    </button>
                    <button
                      onClick={handleDownload}
                      className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                    >
                      <Download size={18} className="mr-2" />
                      Unduh PDF
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center text-gray-600 mb-1">
                      <Clock size={16} className="mr-2" />
                      Terakhir Diperbarui
                    </div>
                    <p className="font-medium">{documentInfo.lastUpdated}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center text-gray-600 mb-1">
                      <FileDown size={16} className="mr-2" />
                      Ukuran File
                    </div>
                    <p className="font-medium">{documentInfo.fileSize}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center text-gray-600 mb-1">
                      <FileText size={16} className="mr-2" />
                      Format
                    </div>
                    <p className="font-medium">{documentInfo.format}</p>
                  </div>
                </div>

                <div className="prose max-w-none">
                  <p className="text-gray-600 mb-6">{documentInfo.description}</p>

                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <BookOpen size={20} className="mr-2" />
                      Daftar Isi
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {documentInfo.chapters.map((chapter, index) => (
                        <div
                          key={index}
                          className="flex items-center p-3 bg-gray-50 rounded-lg"
                        >
                          <CheckCircle size={16} className="text-primary-600 mr-2" />
                          <span>{chapter}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <AlertCircle size={20} className="mr-2" />
                      Manfaat Dokumen
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {documentInfo.benefits.map((benefit, index) => (
                        <div
                          key={index}
                          className="flex items-center p-3 bg-primary-50 rounded-lg"
                        >
                          <CheckCircle size={16} className="text-primary-600 mr-2" />
                          <span className="text-primary-900">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PDF Preview Modal */}
      <AnimatePresence>
        {previewUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-lg w-full max-w-5xl h-[85vh] flex flex-col relative"
            >
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="text-lg font-semibold flex items-center">
                  <FileText size={20} className="mr-2" />
                  Preview RPJMDes
                </h3>
                <button
                  onClick={() => setPreviewUrl(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="flex-1 relative">
                <embed
                  src={previewUrl}
                  type="application/pdf"
                  className="absolute inset-0 w-full h-full rounded-b-lg"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DocumentServicesPage;