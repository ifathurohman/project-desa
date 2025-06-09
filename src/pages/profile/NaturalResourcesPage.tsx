import React, { useState } from 'react';
import PageHeader from '../../components/ui/PageHeader';
import { motion } from 'framer-motion';
import { Droplet, Leaf, Mountain, Wind, Sun, Sprout, Waves, TreePine, BarChart2, Calendar, ChevronDown, ChevronUp, AlertTriangle } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

interface ResourceCategory {
  name: string;
  description: string;
  icon: React.ReactNode;
  resources: Resource[];
}

interface Resource {
  name: string;
  location: string;
  area?: string;
  description: string;
  image: string;
  status: 'Baik' | 'Sedang' | 'Perlu Perhatian';
}

interface ChartData {
  name: string;
  value: number;
  color: string;
}

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  type: 'regulation' | 'initiative' | 'warning';
}

const landUseData: ChartData[] = [
  { name: 'Pertanian', value: 45, color: '#10B981' },
  { name: 'Perkebunan', value: 25, color: '#6366F1' },
  { name: 'Pemukiman', value: 15, color: '#F59E0B' },
  { name: 'Hutan', value: 10, color: '#047857' },
  { name: 'Lainnya', value: 5, color: '#8B5CF6' },
];

const waterResourcesData = [
  { name: 'Sungai', count: 3, color: '#3B82F6' },
  { name: 'Mata Air', count: 5, color: '#3B82F6' },
  { name: 'Danau', count: 1, color: '#3B82F6' },
  { name: 'Irigasi', count: 8, color: '#3B82F6' },
];

const resourceHealthData = [
  { subject: 'Air', A: 85, fullMark: 100 },
  { subject: 'Hutan', A: 70, fullMark: 100 },
  { subject: 'Pertanian', A: 90, fullMark: 100 },
  { subject: 'Perkebunan', A: 75, fullMark: 100 },
  { subject: 'Mineral', A: 50, fullMark: 100 },
  { subject: 'Energi', A: 65, fullMark: 100 },
];

const conservationTimeline: TimelineEvent[] = [
  {
    year: '2018',
    title: 'Peraturan Desa No. 5/2018',
    description: 'Tentang Perlindungan Kawasan Hutan Lindung Gununghalu',
    type: 'regulation'
  },
  {
    year: '2019',
    title: 'Program Reboisasi',
    description: 'Penanaman 10.000 bibit pohon di kawasan hutan yang mengalami degradasi',
    type: 'initiative'
  },
  {
    year: '2020',
    title: 'Peraturan Desa No. 8/2020',
    description: 'Tentang Pengelolaan Sumber Daya Air dan Irigasi',
    type: 'regulation'
  },
  {
    year: '2021',
    title: 'Peringatan Pencemaran',
    description: 'Terdeteksi pencemaran di aliran Sungai Citarum yang memerlukan tindakan segera',
    type: 'warning'
  },
  {
    year: '2022',
    title: 'Inisiatif Energi Terbarukan',
    description: 'Pemasangan panel surya di 5 fasilitas umum desa',
    type: 'initiative'
  },
  {
    year: '2023',
    title: 'Peraturan Desa No. 3/2023',
    description: 'Tentang Pembatasan Penambangan Pasir di Aliran Sungai',
    type: 'regulation'
  },
];

const resourceCategories: ResourceCategory[] = [
  {
    name: 'Sumber Daya Air',
    description: 'Sumber daya air yang terdapat di wilayah desa',
    icon: <Droplet size={24} />,
    resources: [
      {
        name: 'Sungai Citarum',
        location: 'Sepanjang batas timur desa',
        area: '2.5 km',
        description: 'Sungai utama yang mengalir di sepanjang batas timur desa, digunakan untuk irigasi pertanian dan kebutuhan sehari-hari.',
        image: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        status: 'Sedang'
      },
      {
        name: 'Mata Air Ciburial',
        location: 'Dusun Ciburial',
        description: 'Mata air alami yang menjadi sumber air bersih utama bagi warga desa. Debit air stabil sepanjang tahun.',
        image: 'https://images.pexels.com/photos/2754200/pexels-photo-2754200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        status: 'Baik'
      },
      {
        name: 'Danau Situ Gede',
        location: 'Dusun Gununghalu',
        area: '5 hektar',
        description: 'Danau alami yang menjadi tempat penampungan air dan habitat berbagai jenis ikan air tawar. Juga berfungsi sebagai area wisata lokal.',
        image: 'https://images.pexels.com/photos/147411/pexels-photo-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        status: 'Baik'
      }
    ]
  },
  {
    name: 'Lahan Pertanian',
    description: 'Lahan pertanian produktif di wilayah desa',
    icon: <Sprout size={24} />,
    resources: [
      {
        name: 'Sawah Sindangjaya',
        location: 'Sepanjang aliran Sungai Citarum',
        area: '120 hektar',
        description: 'Area persawahan utama desa dengan sistem irigasi teknis. Menghasilkan padi dengan produktivitas rata-rata 5.5 ton/hektar.',
        image: 'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        status: 'Baik'
      },
      {
        name: 'Kebun Sayur Organik',
        location: 'Dusun Ciburial',
        area: '15 hektar',
        description: 'Area pertanian sayuran organik yang dikelola kelompok tani setempat. Menghasilkan berbagai jenis sayuran untuk pasar lokal dan regional.',
        image: 'https://images.pexels.com/photos/2286895/pexels-photo-2286895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        status: 'Baik'
      }
    ]
  },
  {
    name: 'Perkebunan',
    description: 'Area perkebunan di wilayah desa',
    icon: <Leaf size={24} />,
    resources: [
      {
        name: 'Kebun Kopi Rakyat',
        location: 'Lereng Gunung Halu',
        area: '45 hektar',
        description: 'Perkebunan kopi arabika dan robusta yang dikelola masyarakat. Kopi dari kebun ini telah mendapat sertifikasi dan dipasarkan hingga ke luar negeri.',
        image: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        status: 'Baik'
      },
      {
        name: 'Kebun Buah Tropis',
        location: 'Dusun Pasirjaya',
        area: '30 hektar',
        description: 'Kebun buah-buahan tropis seperti durian, mangga, dan rambutan. Menjadi sumber penghasilan tambahan bagi warga terutama saat musim panen.',
        image: 'https://images.pexels.com/photos/175728/pexels-photo-175728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        status: 'Sedang'
      }
    ]
  },
  {
    name: 'Hutan',
    description: 'Kawasan hutan di wilayah desa',
    icon: <TreePine size={24} />,
    resources: [
      {
        name: 'Hutan Lindung Gununghalu',
        location: 'Sebelah barat desa',
        area: '200 hektar',
        description: 'Kawasan hutan lindung yang menjadi daerah tangkapan air dan habitat berbagai flora fauna. Dilindungi dan dikelola bersama masyarakat dan Perhutani.',
        image: 'https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        status: 'Baik'
      },
      {
        name: 'Hutan Produksi Terbatas',
        location: 'Perbatasan utara desa',
        area: '75 hektar',
        description: 'Kawasan hutan produksi dengan tanaman utama pinus dan jati. Dikelola dengan sistem tebang pilih untuk menjaga keberlanjutan.',
        image: 'https://images.pexels.com/photos/167698/pexels-photo-167698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        status: 'Sedang'
      }
    ]
  },
  {
    name: 'Sumber Daya Mineral',
    description: 'Potensi sumber daya mineral di wilayah desa',
    icon: <Mountain size={24} />,
    resources: [
      {
        name: 'Tambang Pasir',
        location: 'Sepanjang aliran Sungai Citarum',
        description: 'Deposit pasir yang dimanfaatkan secara terbatas untuk kebutuhan konstruksi lokal. Penambangan diatur dengan ketat untuk mencegah kerusakan lingkungan.',
        image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        status: 'Perlu Perhatian'
      }
    ]
  },
  {
    name: 'Energi Terbarukan',
    description: 'Potensi dan pemanfaatan energi terbarukan',
    icon: <Sun size={24} />,
    resources: [
      {
        name: 'Pembangkit Listrik Mikrohidro',
        location: 'Aliran Sungai Ciburial',
        description: 'Pembangkit listrik skala kecil yang memanfaatkan aliran air untuk menghasilkan listrik. Kapasitas 5 kW untuk penerangan jalan desa.',
        image: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        status: 'Baik'
      },
      {
        name: 'Panel Surya Komunal',
        location: 'Balai Desa dan Fasilitas Umum',
        description: 'Sistem panel surya yang terpasang di beberapa fasilitas umum desa untuk mengurangi ketergantungan pada listrik PLN.',
        image: 'https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        status: 'Baik'
      }
    ]
  }
];

const NaturalResourcesPage: React.FC = () => {
  const [expandedEvents, setExpandedEvents] = useState<{[key: string]: boolean}>({});

  const toggleEvent = (year: string) => {
    setExpandedEvents(prev => ({
      ...prev,
      [year]: !prev[year]
    }));
  };

  return (
    <div>
      <PageHeader 
        title="Sumber Daya Alam" 
        description="Potensi dan Pengelolaan Sumber Daya Alam Desa Sindangjaya Gununghalu"
        image="https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Potensi Sumber Daya Alam</h2>
            <p className="text-gray-600">
              Desa Sindangjaya Gununghalu memiliki kekayaan sumber daya alam yang beragam, mulai dari sumber daya air, lahan pertanian, perkebunan, hutan, hingga potensi energi terbarukan. Pengelolaan sumber daya alam ini dilakukan secara berkelanjutan untuk memastikan ketersediaannya bagi generasi mendatang.
            </p>
          </div>

          {/* Resource Distribution Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Land Use Distribution Chart */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-6 text-center">Distribusi Penggunaan Lahan</h3>
              
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={landUseData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      dataKey="value"
                      nameKey="name"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      labelLine={false}
                    >
                      {landUseData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value}%`, 'Persentase']} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 text-center text-gray-600 text-sm">
                <div className="flex items-center justify-center">
                  <BarChart2 size={16} className="mr-2 text-primary-600" />
                  <span>Total luas wilayah desa: 850 hektar</span>
                </div>
              </div>
            </motion.div>

            {/* Water Resources Chart */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-6 text-center">Sumber Daya Air</h3>
              
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={waterResourcesData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`${value} unit`, 'Jumlah']} />
                    <Bar dataKey="count" name="Jumlah">
                      {waterResourcesData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 text-center text-gray-600 text-sm">
                <div className="flex items-center justify-center">
                  <Droplet size={16} className="mr-2 text-primary-600" />
                  <span>Total 17 sumber daya air teridentifikasi</span>
                </div>
              </div>
            </motion.div>

            {/* Resource Health Radar Chart - New Addition */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-6 text-center">Kesehatan Sumber Daya</h3>
              
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart outerRadius={80} data={resourceHealthData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} />
                    <Radar name="Kondisi" dataKey="A" stroke="#10B981" fill="#10B981" fillOpacity={0.6} />
                    <Tooltip formatter={(value) => [`${value}/100`, 'Nilai Kesehatan']} />
                    <Legend />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 text-center text-gray-600 text-sm">
                <div className="flex items-center justify-center">
                  <Leaf size={16} className="mr-2 text-primary-600" />
                  <span>Penilaian kesehatan sumber daya alam desa</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Conservation Timeline - New Addition */}
          <motion.div 
            className="mb-16 bg-white p-6 rounded-lg shadow-sm border border-gray-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Peraturan & Inisiatif Konservasi</h3>
            <div className="space-y-4">
              {conservationTimeline.map((event) => (
                <div 
                  key={event.year} 
                  className="border-l-4 pl-4 py-2 hover:bg-gray-50 rounded transition-colors"
                  style={{ 
                    borderColor: event.type === 'regulation' ? '#6366F1' : 
                              event.type === 'initiative' ? '#10B981' : '#F59E0B' 
                  }}
                >
                  <div 
                    className="flex justify-between items-center cursor-pointer" 
                    onClick={() => toggleEvent(event.year)}
                  >
                    <div className="flex items-center">
                      <span className="text-lg font-semibold mr-3">{event.year}</span>
                      <div>
                        <h4 className="font-medium">{event.title}</h4>
                        {!expandedEvents[event.year] && (
                          <p className="text-sm text-gray-600 line-clamp-1">{event.description}</p>
                        )}
                      </div>
                    </div>
                    <div className="text-gray-500">
                      {expandedEvents[event.year] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>
                  
                  {expandedEvents[event.year] && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 ml-8"
                    >
                      <div className="flex items-start mb-2">
                        {event.type === 'regulation' && (
                          <Calendar size={16} className="text-indigo-600 mr-2 mt-1" />
                        )}
                        {event.type === 'initiative' && (
                          <Leaf size={16} className="text-green-600 mr-2 mt-1" />
                        )}
                        {event.type === 'warning' && (
                          <AlertTriangle size={16} className="text-amber-600 mr-2 mt-1" />
                        )}
                        <p className="text-gray-700">{event.description}</p>
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Resource Categories */}
          <div className="space-y-16">
            {resourceCategories.map((category, categoryIndex) => (
              <div key={category.name} className="space-y-6">
                <motion.div 
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-primary-100 text-primary-600 p-2 rounded-full">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{category.name}</h3>
                </motion.div>
                
                <p className="text-gray-600 ml-11">{category.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-11">
                  {category.resources.map((resource, resourceIndex) => (
                    <motion.div
                      key={resource.name}
                      className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow h-full flex flex-col"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: resourceIndex * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={resource.image}
                          alt={resource.name}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute top-0 right-0 m-2">
                          <span className={`
                            inline-block px-2 py-1 text-xs font-medium rounded-full
                            ${resource.status === 'Baik' ? 'bg-green-100 text-green-800' : ''}
                            ${resource.status === 'Sedang' ? 'bg-yellow-100 text-yellow-800' : ''}
                            ${resource.status === 'Perlu Perhatian' ? 'bg-red-100 text-red-800' : ''}
                          `}>
                            {resource.status}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-5 flex-grow flex flex-col">
                        <h4 className="text-lg font-semibold mb-2">{resource.name}</h4>
                        
                        <div className="space-y-3 mb-4 text-sm">
                          <div className="flex items-start">
                            <span className="text-primary-600 font-medium w-24">Lokasi:</span>
                            <span className="text-gray-700">{resource.location}</span>
                          </div>
                          
                          {resource.area && (
                            <div className="flex items-start">
                              <span className="text-primary-600 font-medium w-24">Luas:</span>
                              <span className="text-gray-700">{resource.area}</span>
                            </div>
                          )}
                        </div>
                        
                        <p className="text-gray-600 mb-4 text-sm">{resource.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container">
          <div className="mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Program Pengelolaan Sumber Daya Alam</h2>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                  className="flex flex-col items-center text-center p-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-primary-100 text-primary-600 p-4 rounded-full mb-4">
                    <Leaf size={24} />
                  </div>
                  <h3 className="font-semibold mb-2">Konservasi Hutan</h3>
                  <p className="text-gray-600 text-sm">Program penanaman kembali dan perlindungan kawasan hutan untuk menjaga sumber air dan mencegah erosi</p>
                </motion.div>
                
                <motion.div
                  className="flex flex-col items-center text-center p-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-primary-100 text-primary-600 p-4 rounded-full mb-4">
                    <Waves size={24} />
                  </div>
                  <h3 className="font-semibold mb-2">Pengelolaan Air</h3>
                  <p className="text-gray-600 text-sm">Sistem irigasi terpadu dan konservasi mata air untuk memastikan ketersediaan air sepanjang tahun</p>
                </motion.div>
                
                <motion.div
                  className="flex flex-col items-center text-center p-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-primary-100 text-primary-600 p-4 rounded-full mb-4">
                    <Wind size={24} />
                  </div>
                  <h3 className="font-semibold mb-2">Energi Terbarukan</h3>
                  <p className="text-gray-600 text-sm">Pengembangan sumber energi terbarukan seperti mikrohidro dan panel surya untuk kebutuhan desa</p>
                </motion.div>
              </div>
            </div>

            <div className="bg-primary-50 p-6 rounded-lg border border-primary-100">
              <h3 className="text-xl font-semibold mb-4 text-center text-primary-700">Rencana Pengembangan SDA 2024</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-primary-100">
                      <th className="py-2 px-4 text-left text-primary-800">Program</th>
                      <th className="py-2 px-4 text-left text-primary-800">Target</th>
                      <th className="py-2 px-4 text-left text-primary-800">Anggaran</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-primary-100">
                    <tr className="hover:bg-primary-50/50">
                      <td className="py-3 px-4">Rehabilitasi Hutan Lindung</td>
                      <td className="py-3 px-4">25 hektar</td>
                      <td className="py-3 px-4">Rp 150.000.000</td>
                    </tr>
                    <tr className="hover:bg-primary-50/50">
                      <td className="py-3 px-4">Pengembangan Irigasi Tetes</td>
                      <td className="py-3 px-4">15 hektar kebun</td>
                      <td className="py-3 px-4">Rp 120.000.000</td>
                    </tr>
                    <tr className="hover:bg-primary-50/50">
                      <td className="py-3 px-4">Penanaman Pohon Produktif</td>
                      <td className="py-3 px-4">5.000 bibit</td>
                      <td className="py-3 px-4">Rp 75.000.000</td>
                    </tr>
                    <tr className="hover:bg-primary-50/50">
                      <td className="py-3 px-4">Pembersihan Sungai</td>
                      <td className="py-3 px-4">2.5 km</td>
                      <td className="py-3 px-4">Rp 50.000.000</td>
                    </tr>
                    <tr className="hover:bg-primary-50/50">
                      <td className="py-3 px-4">Tambahan Panel Surya</td>
                      <td className="py-3 px-4">10 unit (5kW)</td>
                      <td className="py-3 px-4">Rp 200.000.000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NaturalResourcesPage;