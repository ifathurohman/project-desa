import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  height?: 'small' | 'medium' | 'large';
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  description, 
  image = 'https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
  imageAlt = 'Header image',
  height = 'medium' 
}) => {
  // Determine height class based on prop
  const heightClass = {
    small: 'h-48 md:h-56',
    medium: 'h-64 md:h-80',
    large: 'h-80 md:h-96',
  }[height];

  return (
    <section className={`relative w-full ${heightClass} overflow-hidden`}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-18"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {title}
          </h1>
          {description && (
            <p className="text-lg md:text-xl text-white/90">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHeader;