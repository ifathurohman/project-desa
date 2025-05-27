import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ImagePlus, Search } from 'lucide-react';
import { galleryData } from '../../data/galleryData';

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
}

type Category = 'all' | 'event' | 'tourism' | 'development' | 'culture';

const PhotoGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState<GalleryItem[]>(galleryData);
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', name: 'Semua' },
    { id: 'event', name: 'Kegiatan' },
    { id: 'tourism', name: 'Wisata' },
    { id: 'development', name: 'Pembangunan' },
    { id: 'culture', name: 'Budaya' },
  ];

  useEffect(() => {
    let result = [...galleryData];
    
    // Filter by category
    if (activeCategory !== 'all') {
      result = result.filter(item => item.category === activeCategory);
    }
    
    // Filter by search query
    if (searchQuery) {
      const lowercaseQuery = searchQuery.toLowerCase();
      result = result.filter(
        item => 
          item.title.toLowerCase().includes(lowercaseQuery) || 
          item.description.toLowerCase().includes(lowercaseQuery)
      );
    }
    
    setFilteredItems(result);
  }, [activeCategory, searchQuery]);

  const openPhotoModal = (photo: GalleryItem) => {
    setSelectedPhoto(photo);
    document.body.style.overflow = 'hidden';
  };

  const closePhotoModal = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div>
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id as Category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
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
              placeholder="Cari foto..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {filteredItems.length === 0 ? (
        <div className="text-center py-12">
          <ImagePlus size={48} className="mx-auto text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-1">Tidak ada foto ditemukan</h3>
          <p className="text-gray-600">
            Coba gunakan filter atau kata kunci pencarian yang berbeda
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="card overflow-hidden cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => openPhotoModal(item)}
                layout
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{item.date}</p>
                  <p className="text-gray-700 line-clamp-2">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* Photo Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="absolute top-4 right-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-colors"
              onClick={closePhotoModal}
            >
              <X size={24} />
            </button>
            
            <motion.div
              className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="w-full max-h-[70vh] object-contain"
              />
              <div className="p-4 bg-white">
                <h3 className="text-xl font-semibold mb-2">{selectedPhoto.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{selectedPhoto.date}</p>
                <p className="text-gray-700">{selectedPhoto.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PhotoGallery;