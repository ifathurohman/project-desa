import React, { useState } from 'react';
import PageHeader from '../components/ui/PageHeader';
import { productData } from '../data/productData';
import { Search, ShoppingBag, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

type Category = 'all' | 'kuliner' | 'kerajinan' | 'pertanian';

const ProductsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'Semua Produk' },
    { id: 'kuliner', name: 'Kuliner' },
    { id: 'kerajinan', name: 'Kerajinan' },
    { id: 'pertanian', name: 'Pertanian' },
  ];

  const filteredProducts = productData.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div>
      <PageHeader 
        title="Produk Lokal" 
        description="Temukan berbagai produk berkualitas hasil karya masyarakat Desa Kersik"
        image="https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="section-title">Produk Desa Kersik</h2>
            <p className="text-gray-600">
              Desa Kersik memiliki beragam produk unggulan berupa makanan, minuman, kerajinan tangan, dan hasil pertanian. Semua produk dibuat dengan bahan berkualitas dan kearifan lokal.
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
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
                placeholder="Cari produk..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag size={48} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-1">Tidak ada produk ditemukan</h3>
              <p className="text-gray-600">
                Coba gunakan filter atau kata kunci pencarian yang berbeda
              </p>
            </div>
          ) : (
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  className="card overflow-hidden group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="relative overflow-hidden aspect-square">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2 right-2">
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                        product.category === 'kuliner' ? 'bg-green-100 text-green-800' :
                        product.category === 'kerajinan' ? 'bg-purple-100 text-purple-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {product.category === 'kuliner' ? 'Kuliner' :
                         product.category === 'kerajinan' ? 'Kerajinan' :
                         'Pertanian'}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                    <p className="text-primary-600 font-bold mb-2">{formatPrice(product.price)}</p>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                      <div className="text-sm text-gray-500">{product.seller}</div>
                      <a 
                        href={`tel:${product.contact}`} 
                        className="flex items-center text-primary-600 hover:text-primary-700 text-sm font-medium"
                      >
                        <Phone size={16} className="mr-1" />
                        Hubungi
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="section-title">Jual Produk Anda</h2>
            <p className="text-gray-600 mb-8">
              Anda memiliki produk lokal yang ingin dipasarkan? Daftarkan produk Anda untuk ditampilkan di marketplace desa.
            </p>
            <a href="#" className="btn btn-primary py-3 px-6">Daftarkan Produk</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;