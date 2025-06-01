import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="container px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto text-center">
          <h1 className="text-9xl font-bold text-primary-500">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-6">Halaman Tidak Ditemukan</h2>
          <p className="text-lg text-gray-600 mb-8">
            Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors"
          >
            <Home className="mr-2" size={20} />
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;