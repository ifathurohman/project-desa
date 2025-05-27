import React from 'react';
import PageHeader from '../../components/ui/PageHeader';
import { motion } from 'framer-motion';
import { Clock, Award, Users, Landmark } from 'lucide-react';

const HistoryPage: React.FC = () => {
  const timeline = [
    {
      year: '1785',
      title: 'Awal Terbentuknya Desa',
      description: 'Sekelompok nelayan mendirikan pemukiman pertama di pesisir pantai yang kini dikenal sebagai Desa Kersik.',
      icon: Landmark
    },
    {
      year: '1820',
      title: 'Perkembangan Pertanian',
      description: 'Masyarakat mulai mengembangkan pertanian padi dan kelapa, yang menjadi komoditas utama desa.',
      icon: Users
    },
    {
      year: '1945',
      title: 'Era Kemerdekaan',
      description: 'Desa Kersik secara resmi menjadi bagian dari NKRI dan mulai membangun sistem pemerintahan desa.',
      icon: Award
    },
    {
      year: '2010',
      title: 'Modernisasi Desa',
      description: 'Pembangunan infrastruktur modern dan pengembangan sektor pariwisata mulai digalakkan.',
      icon: Clock
    }
  ];

  const leaders = [
    { period: '2024-2029', name: 'Bapak Suparman' },
    { period: '2019-2024', name: 'Bapak Ahmad Sudrajat' },
    { period: '2014-2019', name: 'Bapak H. Mahmud' },
    { period: '2009-2014', name: 'Bapak Kusnandar' }
  ];

  return (
    <div>
      <PageHeader 
        title="Sejarah Desa" 
        description="Mengenal sejarah dan perkembangan Desa Kersik dari masa ke masa"
        image="https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden mb-12"
            >
              <div className="p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-6">Asal Usul Nama</h2>
                <div className="prose prose-lg">
                  <p>
                    Nama "Kersik" berasal dari bahasa Melayu yang berarti "pasir", merujuk pada karakteristik wilayah desa yang berada di pesisir pantai dengan hamparan pasir putih yang luas. Konon, para pelaut yang singgah di pantai ini terkesan dengan keindahan pasir putihnya yang berkilau di bawah sinar matahari.
                  </p>
                  <p>
                    Selain itu, kata "Kersik" juga memiliki makna filosofis yang dalam bagi masyarakat setempat. Pasir yang terdiri dari butiran-butiran kecil namun mampu membentuk pantai yang kokoh melambangkan persatuan dan gotong royong masyarakat desa yang meski berbeda-beda namun tetap bersatu dalam membangun desa.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold mb-8 text-center">Perjalanan Sejarah</h2>
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                      <item.icon size={24} className="text-primary-600" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-primary-600 mb-1">{item.year}</div>
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <div className="p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-6">Kepemimpinan Desa</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {leaders.map((leader, index) => (
                    <motion.div
                      key={leader.period}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-gray-50 p-4 rounded-lg"
                    >
                      <div className="text-sm text-gray-600 mb-1">{leader.period}</div>
                      <div className="font-medium">{leader.name}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HistoryPage;