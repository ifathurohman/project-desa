import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { newsData } from '../../data/newsData';

const LatestNews: React.FC = () => {
  // Get latest 3 news items
  const latestNews = newsData.slice(0, 3);

  return (
    <section className="section">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="section-title mb-2">Berita Terbaru</h2>
            <p className="text-gray-600 max-w-2xl">
              Informasi dan kabar terkini seputar kegiatan dan perkembangan di Desa Kersik
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Link to="/news" className="btn btn-outline mt-4 md:mt-0 inline-flex items-center">
              Semua Berita
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestNews.map((news, index) => (
            <motion.div
              key={news.id}
              className="card group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
                <Link 
                  to={`/news/${news.id}`}
                  className="text-primary-600 font-medium inline-flex items-center group-hover:text-primary-700"
                >
                  Baca Selengkapnya
                  <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;