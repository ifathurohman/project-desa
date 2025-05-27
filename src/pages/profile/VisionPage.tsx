import React from 'react';
import PageHeader from '../../components/ui/PageHeader';
import { motion } from 'framer-motion';
import { Target, ArrowRight, Award, Users, Building2, Leaf, BookOpen, Heart, MapPin, Phone, Mail } from 'lucide-react';

const VisionPage: React.FC = () => {
  const villageInfo = {
    name: "Desa Sindangjaya",
    district: "Kec. Gununghalu",
    regency: "Kab. Bandung Barat",
    province: "Jawa Barat",
    postalCode: "40565",
    phone: "+62 812-3456-7890",
    email: "desa.sindangjaya@gmail.com",
    address: "Jl. Raya Sindangjaya No. 123"
  };

  const features = [
    {
      title: "Alam yang Asri",
      description: "Dikelilingi oleh pemandangan alam yang indah dengan udara yang sejuk dan bersih",
      icon: Leaf,
      image: "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg"
    },
    {
      title: "Masyarakat Ramah",
      description: "Kehangatan dan keramahan masyarakat desa yang menjunjung tinggi gotong royong",
      icon: Users,
      image: "https://images.pexels.com/photos/7551442/pexels-photo-7551442.jpeg"
    },
    {
      title: "Potensi Wisata",
      description: "Berbagai destinasi wisata alam dan budaya yang menarik untuk dikunjungi",
      icon: Award,
      image: "https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg"
    }
  ];

  const missions = [
    {
      title: "Pelayanan Prima",
      description: "Meningkatkan kualitas pelayanan publik yang profesional, efisien, dan tepat waktu",
      icon: Users,
      goals: [
        "Digitalisasi layanan administrasi desa",
        "Peningkatan kompetensi aparatur desa",
        "Pengembangan sistem informasi desa"
      ]
    },
    {
      title: "Pariwisata Berkelanjutan",
      description: "Mengembangkan sektor pariwisata berbasis kearifan lokal dan pelestarian lingkungan",
      icon: Leaf,
      goals: [
        "Pengembangan destinasi wisata alam",
        "Pemberdayaan kelompok sadar wisata",
        "Pelestarian budaya lokal"
      ]
    },
    {
      title: "Ekonomi Mandiri",
      description: "Memperkuat ekonomi desa melalui pengembangan UMKM dan optimalisasi BUMDes",
      icon: Building2,
      goals: [
        "Pelatihan kewirausahaan",
        "Pengembangan produk unggulan desa",
        "Penguatan kemitraan usaha"
      ]
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Visi & Misi" 
        description="Arah dan tujuan pembangunan Desa Sindangjaya"
        image="https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg"
        height="large"
      />
      
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Village Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl font-bold mb-4">{villageInfo.name}</h1>
              <p className="text-xl text-gray-600 mb-6">
                {villageInfo.district}, {villageInfo.regency}, {villageInfo.province}, {villageInfo.postalCode}
              </p>
              <div className="flex justify-center gap-6 text-gray-600">
                <a href={`tel:${villageInfo.phone}`} className="flex items-center hover:text-primary-600">
                  <Phone className="w-5 h-5 mr-2" />
                  {villageInfo.phone}
                </a>
                <a href={`mailto:${villageInfo.email}`} className="flex items-center hover:text-primary-600">
                  <Mail className="w-5 h-5 mr-2" />
                  {villageInfo.email}
                </a>
              </div>
            </motion.div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group overflow-hidden rounded-2xl"
                >
                  <div className="absolute inset-0">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-500" />
                  </div>
                  <div className="relative p-6 text-white">
                    <feature.icon className="w-12 h-12 mb-4" />
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-white/90">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Vision */}
            <motion.div 
              className="bg-gradient-to-br from-primary-500 to-primary-600 p-8 md:p-12 rounded-3xl mb-16 text-center text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Target size={48} className="mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Visi Desa Sindangjaya</h2>
              <p className="text-xl md:text-2xl font-medium leading-relaxed">
                "Mewujudkan Desa Sindangjaya yang mandiri, sejahtera, dan berkelanjutan berbasis potensi lokal dan kearifan budaya"
              </p>
            </motion.div>

            {/* Missions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-center">Misi & Program Kerja</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {missions.map((mission, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
                        <mission.icon size={24} className="text-primary-600" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{mission.title}</h3>
                      <p className="text-gray-600 mb-4">{mission.description}</p>
                      <div className="space-y-2">
                        {mission.goals.map((goal, idx) => (
                          <div key={idx} className="flex items-start">
                            <ArrowRight size={16} className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                            <span className="text-gray-700">{goal}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionPage;