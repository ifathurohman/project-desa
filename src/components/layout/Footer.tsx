import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-10 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/src/assets/images/logo.svg" alt="Logo Desa Sindangjaya" className="w-10 h-10" />
              <h3 className="text-lg font-bold">Desa Sindangjaya</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Desa Sindangjaya terletak di Kecamatan Gununghalu, Kabupaten Bandung Barat, Jawa Barat. Dikenal dengan keindahan alamnya dan produk lokal berkualitas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary-300 transition-colors duration-200">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-gray-300 hover:text-primary-300 transition-colors duration-200">
                  Profil Desa
                </Link>
              </li>
              <li>
                <Link to="/tourism" className="text-gray-300 hover:text-primary-300 transition-colors duration-200">
                  Wisata
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-primary-300 transition-colors duration-200">
                  Produk Lokal
                </Link>
              </li>
              <li>
                <Link to="/budget" className="text-gray-300 hover:text-primary-300 transition-colors duration-200">
                  Transparansi APBDes
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-primary-300 transition-colors duration-200">
                  Galeri
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-300 hover:text-primary-300 transition-colors duration-200">
                  Berita
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary-400 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-300">
                  Desa Sindangjaya, Kec. Gununghalu, Kab. Bandung Barat, Jawa Barat, 40565
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-primary-400 mr-2 flex-shrink-0" />
                <span className="text-gray-300">emaildesa@digitaldesa.id</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Media Sosial</h3>
            <div className="flex space-x-4 mb-6">
              <a 
                href="https://facebook.com/Desa-Sindangjaya" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gray-700 hover:bg-primary-600 transition-colors duration-200 p-2 rounded-full"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/desasindangjaya74" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gray-700 hover:bg-primary-600 transition-colors duration-200 p-2 rounded-full"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-300 text-sm">
              Ikuti kami untuk mendapatkan informasi terbaru dari Desa Sindangjaya
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-950 py-4">
        <div className="container text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Desa Sindangjaya. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;