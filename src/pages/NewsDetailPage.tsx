import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ChevronLeft, Facebook, Twitter, Linkedin } from 'lucide-react';
import { newsData } from '../data/newsData';
import { motion } from 'framer-motion';

const NewsDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [news, setNews] = useState(newsData[0]);
  const [relatedNews, setRelatedNews] = useState(newsData.slice(0, 3));

  useEffect(() => {
    if (id) {
      const newsItem = newsData.find(item => item.id === parseInt(id));
      if (newsItem) {
        setNews(newsItem);
        
        // Get related news by same category, excluding current news
        const related = newsData
          .filter(item => item.id !== newsItem.id && item.category === newsItem.category)
          .slice(0, 3);
        
        setRelatedNews(related);
        
        // Scroll to top
        window.scrollTo(0, 0);
      }
    }
  }, [id]);

  return (
    <div>
      <div className="relative w-full h-64 md:h-96 overflow-hidden">
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>
      
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto -mt-32 md:-mt-48 relative z-10">
            <motion.div 
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="p-6 md:p-8 lg:p-10">
                <div className="mb-6">
                  <Link to="/news" className="inline-flex items-center text-primary-600 hover:text-primary-700">
                    <ChevronLeft size={16} className="mr-1" />
                    Kembali ke Berita
                  </Link>
                </div>
                
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                  {news.title}
                </h1>
                
                <div className="flex flex-wrap items-center text-sm text-gray-500 mb-6">
                  <div className="flex items-center mr-4 mb-2">
                    <Calendar size={16} className="mr-1" />
                    <span>{news.date}</span>
                  </div>
                  <div className="flex items-center mr-4 mb-2">
                    <User size={16} className="mr-1" />
                    <span>{news.author}</span>
                  </div>
                  <div className="mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      news.category === 'tourism' ? 'bg-blue-100 text-blue-800' :
                      news.category === 'community' ? 'bg-green-100 text-green-800' :
                      news.category === 'infrastructure' ? 'bg-yellow-100 text-yellow-800' :
                      news.category === 'culture' ? 'bg-purple-100 text-purple-800' :
                      news.category === 'health' ? 'bg-red-100 text-red-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {news.category === 'tourism' ? 'Wisata' :
                       news.category === 'community' ? 'Komunitas' :
                       news.category === 'infrastructure' ? 'Infrastruktur' :
                       news.category === 'culture' ? 'Budaya' :
                       news.category === 'health' ? 'Kesehatan' :
                       news.category === 'economy' ? 'Ekonomi' :
                       news.category}
                    </span>
                  </div>
                </div>
                
                <div 
                  className="prose prose-lg max-w-none" 
                  dangerouslySetInnerHTML={{ __html: news.content }}
                ></div>
                
                <div className="mt-8 pt-8 border-t">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Bagikan:</span>
                    <div className="flex space-x-2">
                      <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 transition-colors">
                        <Facebook size={16} className="text-gray-700" />
                      </a>
                      <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 transition-colors">
                        <Twitter size={16} className="text-gray-700" />
                      </a>
                      <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 transition-colors">
                        <Linkedin size={16} className="text-gray-700" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="max-w-4xl mx-auto mt-12">
            <h2 className="text-2xl font-bold mb-6">Berita Terkait</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedNews.map((news, index) => (
                <motion.div
                  key={news.id}
                  className="card group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={news.image} 
                      alt={news.title} 
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar size={14} className="mr-1" />
                      <span>{news.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
                      <Link to={`/news/${news.id}`}>
                        {news.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {news.excerpt}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsDetailPage;