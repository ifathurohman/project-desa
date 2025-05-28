import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToContent = () => {
    const element = document.getElementById('content');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* 🎥 Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source
            src="https://res.cloudinary.com/dzc0bij0o/video/upload/v1748440790/moy1fti66w8i5lugdc3h.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* 🕶️ Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-none" />
      </div>

      {/* 🌟 Content */}
      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          className="max-w-2xl text-left text-white"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
            Selamat Datang di Desa Kersik
          </h1>
          <p className="text-lg md:text-2xl mt-4 mb-8 text-white/80">
            Mewujudkan desa mandiri, sejahtera, dan berkelanjutan
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#content"
              className="bg-white text-black font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-200 transition"
            >
              Jelajahi Desa
            </a>
            <a
              href="#map"
              className="border border-white text-white font-semibold py-3 px-6 rounded-full hover:bg-white hover:text-black transition"
            >
              Lihat Peta
            </a>
          </div>
        </motion.div>
      </div>

      {/* ⬇️ Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <motion.button
          onClick={scrollToContent}
          className="flex flex-col items-center text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <span className="text-sm mb-1 tracking-wide">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
          >
            <ChevronDown size={28} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
