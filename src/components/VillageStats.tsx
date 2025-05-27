import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Mountain, Cloud, Map, Shield, Trees as Tree } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface StatData {
  category: string;
  value: number;
  proportion: number;
}

interface StatCategory {
  id: string;
  title: string;
  icon: React.ElementType;
  data: {
    title: string;
    items: StatData[];
  }[];
}

const categories: StatCategory[] = [
  {
    id: 'topography',
    title: 'Topografi & Geologi',
    icon: Mountain,
    data: [
      {
        title: 'Topografi (Kemiringan)',
        items: [
          { category: 'Perbukitan Landai', value: 30.84, proportion: 1.88 },
          { category: 'Perbukitan Sedang', value: 1223.41, proportion: 74.56 },
          { category: 'Perbukitan Terjal', value: 386.58, proportion: 23.56 }
        ]
      },
      {
        title: 'Kelerengan',
        items: [
          { category: '5% - 15%', value: 1223.41, proportion: 74.56 },
          { category: '15% - 40%', value: 386.58, proportion: 23.56 },
          { category: '> 40%', value: 30.84, proportion: 1.88 }
        ]
      },
      {
        title: 'Topografi (Ketinggian)',
        items: [
          { category: '500 - 1000 m', value: 1223.41, proportion: 74.56 },
          { category: '1000 - 1500 m', value: 417.42, proportion: 25.44 }
        ]
      }
    ]
  },
  {
    id: 'geology',
    title: 'Geologi & Tanah',
    icon: Map,
    data: [
      {
        title: 'Geologi',
        items: [
          { category: 'Air', value: 2.47, proportion: 0.15 },
          { category: 'Anggota Lempung, Napal, Batupasir Kuarsa Formasi Rajamandala', value: 0.01, proportion: 0.00 },
          { category: 'Breksi Gunungapi', value: 986.96, proportion: 60.15 },
          { category: 'Formasi Cantayan dan Bentang', value: 611.46, proportion: 37.27 },
          { category: 'Lainnya', value: 39.93, proportion: 2.43 }
        ]
      },
      {
        title: 'Jenis Tanah',
        items: [
          { category: 'Latosol Merah & Latosol Coklat', value: 546.37, proportion: 33.30 },
          { category: 'Podsolik Merah, Podsolik Kuning & Regosol', value: 1094.46, proportion: 66.70 }
        ]
      }
    ]
  },
  {
    id: 'climate',
    title: 'Iklim & Air',
    icon: Cloud,
    data: [
      {
        title: 'Curah Hujan',
        items: [
          { category: '2500 - 3000 mm/th', value: 1640.83, proportion: 100.00 }
        ]
      },
      {
        title: 'Daerah Aliran Sungai',
        items: [
          { category: 'Citarum', value: 1640.83, proportion: 100.00 }
        ]
      }
    ]
  },
  {
    id: 'disaster',
    title: 'Kerawanan Bencana',
    icon: Shield,
    data: [
      {
        title: 'Rawan Bencana Gempa Bumi',
        items: [
          { category: 'Kawasan Rawan Bencana Gempabumi Tinggi', value: 1640.83, proportion: 100.00 }
        ]
      },
      {
        title: 'Rawan Bencana Longsor',
        items: [
          { category: 'Rendah', value: 1270.54, proportion: 77.43 },
          { category: 'Menengah', value: 336.39, proportion: 20.50 },
          { category: 'Tinggi', value: 33.90, proportion: 2.07 }
        ]
      }
    ]
  },
  {
    id: 'landuse',
    title: 'Penggunaan Lahan',
    icon: Tree,
    data: [
      {
        title: 'Penggunaan Lahan',
        items: [
          { category: 'Badan Air', value: 0.27, proportion: 0.02 },
          { category: 'Hutan', value: 1394.26, proportion: 84.97 },
          { category: 'Pertanian', value: 67.95, proportion: 4.14 },
          { category: 'Permukiman', value: 18.26, proportion: 1.11 },
          { category: 'Semak Belukar', value: 160.09, proportion: 9.76 }
        ]
      }
    ]
  }
];

const VillageStats: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

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
          <h2 className="section-title">Infografis Desa Sindangjaya</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Data geografis dan statistik terkini mengenai berbagai aspek di Desa Sindangjaya
          </p>
        </motion.div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Tab Navigation */}
          <div className="border-b">
            <div className="overflow-x-auto">
              <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView="auto"
                spaceBetween={0}
                navigation
                className="py-2"
              >
                {categories.map((category, index) => (
                  <SwiperSlide key={category.id} style={{ width: 'auto' }}>
                    <button
                      onClick={() => setActiveTab(index)}
                      className={`px-6 py-3 flex items-center whitespace-nowrap transition-colors ${
                        activeTab === index
                          ? 'text-primary-600 border-b-2 border-primary-600'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      <category.icon className="w-5 h-5 mr-2" />
                      <span className="font-medium">{category.title}</span>
                    </button>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-4">
                  {categories[activeTab].data.map((section) => (
                    <div key={section.title} className="border rounded-lg">
                      <button
                        onClick={() => setExpandedSection(expandedSection === section.title ? null : section.title)}
                        className="w-full px-4 py-3 flex items-center justify-between text-left"
                      >
                        <span className="font-medium">{section.title}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            expandedSection === section.title ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {expandedSection === section.title && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 pb-4">
                              <div className="overflow-x-auto">
                                <table className="w-full">
                                  <thead>
                                    <tr>
                                      <th className="text-left py-2 px-2">Kategori</th>
                                      <th className="text-right py-2 px-2">Luas (Ha)</th>
                                      <th className="text-right py-2 px-2">Proporsi (%)</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {section.items.map((item, idx) => (
                                      <tr key={idx} className="border-t">
                                        <td className="py-2 px-2">{item.category}</td>
                                        <td className="text-right py-2 px-2">{item.value.toFixed(2)}</td>
                                        <td className="text-right py-2 px-2">{item.proportion.toFixed(2)}%</td>
                                      </tr>
                                    ))}
                                    {section.items.length > 1 && (
                                      <tr className="border-t font-medium">
                                        <td className="py-2 px-2">Total</td>
                                        <td className="text-right py-2 px-2">
                                          {section.items.reduce((sum, item) => sum + item.value, 0).toFixed(2)}
                                        </td>
                                        <td className="text-right py-2 px-2">100.00%</td>
                                      </tr>
                                    )}
                                  </tbody>
                                </table>
                              </div>
                              <div className="mt-4">
                                <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                                  {section.items.map((item, idx) => (
                                    <div
                                      key={idx}
                                      className="h-full float-left"
                                      style={{
                                        width: `${item.proportion}%`,
                                        backgroundColor: `hsl(${(idx * 60) % 360}, 70%, 60%)`
                                      }}
                                    />
                                  ))}
                                </div>
                                <div className="mt-2 flex flex-wrap gap-2">
                                  {section.items.map((item, idx) => (
                                    <div
                                      key={idx}
                                      className="flex items-center text-sm"
                                    >
                                      <div
                                        className="w-3 h-3 rounded-full mr-1"
                                        style={{
                                          backgroundColor: `hsl(${(idx * 60) % 360}, 70%, 60%)`
                                        }}
                                      />
                                      <span>{item.category}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VillageStats;