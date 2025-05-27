import React from 'react';
import PageHeader from '../../components/ui/PageHeader';
import { motion } from 'framer-motion';
import { Target, ArrowRight, Award, Users, Building2, Leaf, BookOpen, Heart } from 'lucide-react';

const VisionPage: React.FC = () => {
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
        "Pengembangan destinasi wisata pantai",
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
    },
    {
      title: "Infrastruktur Berkualitas",
      description: "Membangun infrastruktur desa yang berkelanjutan dan ramah lingkungan",
      icon: Award,
      goals: [
        "Pembangunan jalan desa",
        "Pengembangan sistem drainase",
        "Penyediaan air bersih"
      ]
    },
    {
      title: "Pendidikan Berkualitas",
      description: "Meningkatkan akses dan kualitas pendidikan untuk seluruh lapisan masyarakat",
      icon: BookOpen,
      goals: [
        "Beasiswa untuk siswa berprestasi",
        "Pengembangan perpustakaan desa",
        "Program pendidikan keterampilan"
      ]
    },
    {
      title: "Kesehatan Masyarakat",
      description: "Meningkatkan derajat kesehatan masyarakat melalui layanan kesehatan yang berkualitas",
      icon: Heart,
      goals: [
        "Optimalisasi Posyandu",
        "Program hidup sehat",
        "Jaminan kesehatan desa"
      ]
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Visi & Misi" 
        description="Arah dan tujuan pembangunan Desa Kersik"
        image="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="bg-gradient-to-br from-primary-500 to-primary-600 p-8 md:p-12 rounded-xl mb-12 text-center text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Target size={48} className="mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Visi Desa Kersik</h2>
              <p className="text-xl md:text-2xl font-medium leading-relaxed">
                "Mewujudkan Desa Kersik yang mandiri, sejahtera, dan berkelanjutan berbasis potensi lokal dan kearifan budaya"
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Misi & Program Kerja</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {missions.map((mission, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl shadow-sm overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center mr-4">
                          <mission.icon size={24} className="text-primary-600" />
                        </div>
                        <h3 className="text-lg font-semibold">{mission.title}</h3>
                      </div>
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