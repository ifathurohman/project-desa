import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import PhotoGallery from '../components/gallery/PhotoGallery';

const GalleryPage: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="Galeri Desa" 
        description="Kumpulan foto kegiatan dan kehidupan masyarakat Desa Kersik"
        image="https://images.pexels.com/photos/3771090/pexels-photo-3771090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-title">Foto-foto Desa Kersik</h2>
            <p className="text-gray-600">
              Lihat berbagai momen penting, kegiatan masyarakat, dan keindahan alam Desa Kersik melalui kumpulan foto berikut.
            </p>
          </div>
          
          <PhotoGallery />
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;