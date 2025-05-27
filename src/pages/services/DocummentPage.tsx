import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  FileText,
  ChevronDown,
  ChevronUp,
  FileDown,
  Eye,
  Building2,
  Home,
  Users,
  Folder,
  X
} from 'lucide-react';
import PageHeader from '../../components/ui/PageHeader';
import { documentServicesData } from '../../data/docummentData';

const DocumentServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'Semua', icon: Folder },
    { id: 'identity', name: 'Identitas', icon: FileText },
    { id: 'business', name: 'Usaha', icon: Building2 },
    { id: 'residence', name: 'Kependudukan', icon: Home },
    { id: 'family', name: 'Keluarga', icon: Users },
    { id: 'other', name: 'Lainnya', icon: FileText },
  ];

  const filteredServices = documentServicesData.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleDownload = (url: string) => {
    window.open(url, '_blank');
  };

  const handlePreview = (url: string) => {
    setPreviewUrl(url);
  };

  return (
    <div>
      <PageHeader
        title="Layanan Dokumen"
        description="Informasi dan persyaratan dokumen keterangan di Desa sindangjaya"
        image="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-title">Dokumen RPJMDes</h2>
            <p className="text-gray-600">
              Layanan pembuatan berbagai surat keterangan untuk keperluan administrasi masyarakat Desa Sindangjaya
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors inline-flex items-center ${selectedCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  <category.icon size={16} className="mr-2" />
                  {category.name}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative max-w-xs w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={16} className="text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                placeholder="Cari surat keterangan..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {filteredServices.length === 0 ? (
            <div className="text-center py-12">
              <FileText size={48} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-1">Tidak ada surat ditemukan</h3>
              <p className="text-gray-600">
                Coba gunakan filter atau kata kunci pencarian yang berbeda
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredServices.map((service) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                >
                  <div
                    className="p-4 cursor-pointer"
                    onClick={() => setExpandedItem(expandedItem === service.id ? null : service.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-primary-50 text-primary-600 rounded-lg">
                          <FileText size={20} />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{service.name}</h3>
                          <p className="text-sm text-gray-500">{service.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        {service.fileSize && (
                          <span className="text-sm text-gray-500">{service.fileSize}</span>
                        )}
                        <button
                          className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                          aria-label={expandedItem === service.id ? 'Collapse' : 'Expand'}
                        >
                          {expandedItem === service.id ? (
                            <ChevronUp size={20} className="text-gray-500" />
                          ) : (
                            <ChevronDown size={20} className="text-gray-500" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  <AnimatePresence initial={false}>
                    {expandedItem === service.id && (
                      <motion.div
                        key="expand"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="border-t border-gray-200 p-4 bg-gray-50"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                          <div className="flex items-center space-x-2">
                            <FileText size={16} className="text-gray-400" />
                            <span className="text-sm text-gray-600">
                              Ukuran File: {service.fileSize}
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-4">
                          {service.pdfUrl && (
                            <button
                              onClick={() => handlePreview(service.pdfUrl!)}
                              className="inline-flex items-center px-4 py-2 bg-primary-50 text-primary-600 rounded-lg hover:bg-primary-100 transition-colors"
                            >
                              <Eye size={16} className="mr-2" />
                              Lihat Contoh Surat
                            </button>
                          )}
                          {service.formUrl && (
                            <button
                              onClick={() => handleDownload(service.formUrl!)}
                              className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                            >
                              <FileDown size={16} className="mr-2" />
                              Unduh Formulir
                            </button>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* PDF Preview Modal */}
      {previewUrl && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl h-[80vh] flex flex-col relative">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold">Preview Dokumen</h3>
              <button
                onClick={() => setPreviewUrl(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex-1 relative">
              <iframe
                src={previewUrl}
                className="absolute inset-0 w-full h-full"
                title="Document Preview"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentServicesPage;