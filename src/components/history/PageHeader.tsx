import React from 'react';

interface PageHeaderProps {
  title: string;
  description: string;
  image: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description, image }) => {
  return (
    <div className="relative">
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-10"
        aria-hidden="true"
      />
      <div 
        className="h-[40vh] md:h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="container mx-auto h-full flex flex-col justify-end pb-12 md:pb-16 relative z-20">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{title}</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;