import React from 'react';
import { Link } from 'react-router-dom';
import { Palmtree, ShoppingBag, FileText, Camera } from 'lucide-react';
import { motion } from 'framer-motion';

const quickLinks = [
  { 
    id: 1, 
    title: 'Wisata Desa', 
    description: 'Jelajahi keindahan Pantai Biru dan objek wisata menarik lainnya', 
    icon: Palmtree, 
    color: 'bg-blue-500', 
    link: '/tourism' 
  },
  { 
    id: 2, 
    title: 'Produk Lokal', 
    description: 'Temukan berbagai produk lokal berkualitas dari Desa Kersik', 
    icon: ShoppingBag, 
    color: 'bg-green-500', 
    link: '/products' 
  },
  { 
    id: 3, 
    title: 'Transparansi APBDes', 
    description: 'Informasi lengkap mengenai penggunaan anggaran desa', 
    icon: FileText, 
    color: 'bg-yellow-500', 
    link: '/budget' 
  },
  { 
    id: 4, 
    title: 'Galeri Desa', 
    description: 'Kumpulan foto kegiatan dan kehidupan masyarakat desa', 
    icon: Camera, 
    color: 'bg-purple-500', 
    link: '/gallery' 
  },
];

const QuickLinks: React.FC = () => {
  return (
    <section id="content" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Layanan Desa</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Akses cepat ke berbagai informasi dan layanan penting di Desa Kersik
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((link, index) => (
            <motion.div
              key={link.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Link 
                to={link.link} 
                className="group block h-full bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <div className={`h-2 ${link.color}`}></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${link.color} bg-opacity-20 text-${link.color.split('-')[1]}-600`}>
                      <link.icon size={20} />
                    </div>
                    <h3 className="ml-3 text-lg font-semibold group-hover:text-primary-600 transition-colors">
                      {link.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {link.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;