import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/ui/PageHeader';
import { newsData } from '../data/newsData';
import { Calendar, ArrowRight, Search, Filter } from 'lucide-react';
import { motion } from 'framer-motion';

const NewsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Semua' },
    { id: 'pemerintahan', name: 'Pemerintahan' },
    { id: 'ekonomi', name: 'Ekonomi' },
    { id: 'pembangunan', name: 'Pembangunan' }
  ];

  const filteredNews = newsData.filter(news => {
    const matchesCategory = selectedCategory === 'all' || news.category === selectedCategory;
    const matchesSearch = 
      news.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      news.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.content.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <PageHeader 
        title="Berita Desa" 
        description="Informasi terbaru seputar kegiatan dan perkembangan di Desa Sindangjaya"
        image="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-title">Berita Terbaru</h2>
            <p className="text-gray-600">
              Ikuti perkembangan terbaru dari berbagai kegiatan dan program yang dilaksanakan di Desa Sindangjaya
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            <div className="w-full lg:w-2/3">
              <div className="flex flex-col sm:flex-row justify-between gap-4 mb-8">
                <div className="relative w-full sm:max-w-xs">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search size={16} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Cari berita..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="relative w-full sm:max-w-xs">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Filter size={16} className="text-gray-400" />
                  </div>
                  <select
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg appearance-none focus:ring-primary-500 focus:border-primary-500"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              {filteredNews.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-4xl mb-3">📰</div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">Tidak ada berita ditemukan</h3>
                  <p className="text-gray-600">
                    Coba gunakan kata kunci atau filter yang berbeda
                  </p>
                </div>
              ) : (
                <div className="space-y-8">
                  {filteredNews.map((news, index) => (
                    <motion.div 
                      key={news.id}
                      className="bg-white rounded-xl shadow-sm overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <div className="md:flex">
                        <div className="md:flex-shrink-0 md:w-1/3">
                          <img 
                            src={news.image} 
                            alt={news.title}
                            className="h-48 w-full object-cover md:h-full"
                          />
                        </div>
                        <div className="p-6 md:w-2/3">
                          <div className="flex items-center text-sm text-gray-500 mb-2">
                            <Calendar size={14} className="mr-1" />
                            <span>{news.date}</span>
                            <span className="mx-2">•</span>
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              news.category === 'pemerintahan' ? 'bg-blue-100 text-blue-800' :
                              news.category === 'ekonomi' ? 'bg-green-100 text-green-800' :
                              news.category === 'pembangunan' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {news.category === 'pemerintahan' ? 'Pemerintahan' :
                               news.category === 'ekonomi' ? 'Ekonomi' :
                               news.category === 'pembangunan' ? 'Pembangunan' :
                               news.category}
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold mb-2">
                            <Link 
                              to={`/news/${news.id}`}
                              className="hover:text-primary-600 transition-colors"
                            >
                              {news.title}
                            </Link>
                          </h3>
                          <p className="text-gray-600 mb-4">
                            {news.excerpt}
                          </p>
                          <Link 
                            to={`/news/${news.id}`}
                            className="text-primary-600 font-medium inline-flex items-center hover:text-primary-700"
                          >
                            Baca Selengkapnya
                            <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            <div className="w-full lg:w-1/3">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Kategori</h3>
                  <ul className="space-y-2">
                    {categories.map(category => (
                      <li key={category.id}>
                        <button 
                          onClick={() => setSelectedCategory(category.id)}
                          className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                            selectedCategory === category.id
                              ? 'bg-primary-50 text-primary-700'
                              : 'hover:bg-gray-50'
                          }`}
                        >
                          {category.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Berita Populer</h3>
                  <div className="space-y-4">
                    {newsData.slice(0, 3).map((news) => (
                      <div key={news.id} className="flex gap-3">
                        <img 
                          src={news.image} 
                          alt={news.title}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div>
                          <h4 className="font-medium line-clamp-2 text-sm">
                            <Link 
                              to={`/news/${news.id}`}
                              className="hover:text-primary-600 transition-colors"
                            >
                              {news.title}
                            </Link>
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">{news.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;