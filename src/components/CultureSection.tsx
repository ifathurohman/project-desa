import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scroll, Users, Gavel, Heart, Flower2, Baby, Sprout, Droplets, Home, ShieldCheck } from 'lucide-react';

interface CulturalPractice {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  details?: string[];
}

const culturalPractices: CulturalPractice[] = [
  {
    id: 'barang-pusaka',
    title: 'Barang Pusaka',
    description: 'Warisan budaya berupa benda-benda bersejarah yang memiliki nilai spiritual dan cultural bagi masyarakat desa.',
    icon: Scroll,
    details: [
      'Penyimpanan dan perawatan khusus',
      'Ritual pembersihan tahunan',
      'Digunakan dalam upacara adat tertentu'
    ]
  },
  {
    id: 'musyawarah-adat',
    title: 'Musyawarah Adat',
    description: 'Forum pengambilan keputusan traditional yang melibatkan tokoh adat dan masyarakat.',
    icon: Users,
    details: [
      'Dipimpin oleh tetua adat',
      'Membahas isu-isu penting desa',
      'Mencari solusi dengan kearifan lokal'
    ]
  },
  {
    id: 'sangsi-adat',
    title: 'Sangsi Adat',
    description: 'Sistem hukum traditional untuk menjaga keharmonisan dan ketertiban masyarakat.',
    icon: Gavel,
    details: [
      'Diterapkan untuk pelanggaran adat',
      'Bertujuan untuk pemulihan keseimbangan sosial',
      'Diputuskan melalui musyawarah adat'
    ]
  },
  {
    id: 'upacara-perkawinan',
    title: 'Upacara Perkawinan',
    description: 'Rangkaian ritual adat dalam prosesi pernikahan traditional.',
    icon: Heart,
    details: [
      'Lamaran dan seserahan',
      'Ritual sebelum pernikahan',
      'Prosesi adat pernikahan'
    ]
  },
  {
    id: 'upacara-kematian',
    title: 'Upacara Kematian',
    description: 'Ritual penghormatan terakhir dan prosesi pemakaman sesuai adat.',
    icon: Flower2,
    details: [
      'Ritual penghormatan',
      'Doa bersama',
      'Prosesi pemakaman'
    ]
  },
  {
    id: 'upacara-kelahiran',
    title: 'Upacara Kelahiran',
    description: 'Ritual menyambut kelahiran bayi dan pemberian nama.',
    icon: Baby,
    details: [
      'Ritual potong rambut',
      'Pemberian nama',
      'Syukuran kelahiran'
    ]
  },
  {
    id: 'upacara-cocok-tanam',
    title: 'Upacara Cocok Tanam',
    description: 'Ritual traditional dalam memulai musim tanam.',
    icon: Sprout,
    details: [
      'Penentuan hari baik',
      'Ritual pemberkatan bibit',
      'Doa bersama untuk kesuburan'
    ]
  },
  {
    id: 'upacara-pengelolaan-sda',
    title: 'Upacara Pengelolaan SDA',
    description: 'Ritual dalam pengelolaan sumber daya alam desa.',
    icon: Droplets,
    details: [
      'Ritual pembukaan lahan',
      'Upacara syukur hasil panen',
      'Pelestarian lingkungan'
    ]
  },
  {
    id: 'upacara-pembangunan-rumah',
    title: 'Upacara Pembangunan Rumah',
    description: 'Ritual dalam proses pembangunan rumah traditional.',
    icon: Home,
    details: [
      'Penentuan lokasi dan arah rumah',
      'Ritual peletakan batu pertama',
      'Syukuran rumah baru'
    ]
  },
  {
    id: 'upacara-penyelesaian-masalah',
    title: 'Upacara Penyelesaian Masalah',
    description: 'Prosesi adat dalam menyelesaikan konflik di masyarakat.',
    icon: ShieldCheck,
    details: [
      'Mediasi traditional',
      'Ritual perdamaian',
      'Sanksi dan pemulihan'
    ]
  }
];

const CultureSection: React.FC = () => {
  const [selectedPractice, setSelectedPractice] = useState<string | null>(null);

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Sosial Budaya</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Mengenal kekayaan tradisi dan adat istiadat yang masih dilestarikan di Desa Sindangjaya
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {culturalPractices.map((practice, index) => (
            <motion.div
              key={practice.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div 
                className={`bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer transition-all duration-300 ${
                  selectedPractice === practice.id ? 'ring-2 ring-primary-500' : 'hover:shadow-md'
                }`}
                onClick={() => setSelectedPractice(selectedPractice === practice.id ? null : practice.id)}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center mr-4">
                      <practice.icon size={20} />
                    </div>
                    <h3 className="text-lg font-semibold">{practice.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{practice.description}</p>
                  
                  <AnimatePresence>
                    {selectedPractice === practice.id && practice.details && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="border-t pt-4 mt-4">
                          <ul className="space-y-2">
                            {practice.details.map((detail, idx) => (
                              <li key={idx} className="flex items-center text-gray-700">
                                <div className="w-2 h-2 rounded-full bg-primary-500 mr-2" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CultureSection;