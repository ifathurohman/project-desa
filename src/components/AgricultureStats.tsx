import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sprout, Fish, Trees as Tree, Mountain, Beaker, Factory, Bird, Cog as CowIcon } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface BaseProductionData {
  year: number;
  commodity: string;
  harvestedArea?: number;
  production: number;
  productionValue?: number;
  productionCost?: number;
  productionBalance?: number;
}

interface PlantationData extends BaseProductionData {
  year: number;
  commodity: string;
  privateArea?: number;
  privateProduction: number;
  publicArea: number;
  publicProduction: number;
  totalArea: number;
  productionCost: number;
  productionBalance: number;
}

interface AquacultureData {
  year: number;
  facility: string;
  area: number;
  production: number;
}

interface MiningData {
  year: number;
  material: string;
  scale: string;
}

interface LivestockData {
  year: number;
  type: string;
  male: number;
  female: number;
  total: number;
}

const agricultureData: BaseProductionData[] = [
  {
    year: 2015,
    commodity: "Buncis",
    harvestedArea: 1.5,
    production: 12,
    productionValue: 200000000,
    productionCost: 3900000,
    productionBalance: 196100000
  },
  {
    year: 2015,
    commodity: "Mentimun",
    harvestedArea: 2.5,
    production: 70,
    productionValue: 15000000,
    productionCost: 2750000,
    productionBalance: 12250000
  },
  {
    year: 2015,
    commodity: "Kacang Kedelai",
    harvestedArea: 1.5,
    production: 1.05,
    productionValue: 15000000,
    productionCost: 5400000,
    productionBalance: 9600000
  },
  {
    year: 2015,
    commodity: "Terong",
    harvestedArea: 0.25,
    production: 3.00,
    productionValue: 450000,
    productionCost: 5200000,
    productionBalance: -4750000
  },
  {
    year: 2015,
    commodity: "Bayam",
    harvestedArea: 0.5,
    production: 2,
    productionValue: 0,
    productionCost: 0,
    productionBalance: 0
  },
  {
    year: 2015,
    commodity: "Kangkung",
    harvestedArea: 0.5,
    production: 2.5,
    productionValue: 10000000,
    productionCost: 7600000,
    productionBalance: 2400000
  },
  {
    year: 2015,
    commodity: "Umbi-umbian",
    harvestedArea: 3.5,
    production: 26.25,
    productionValue: 35000000,
    productionCost: 4800000,
    productionBalance: 30200000
  },
  {
    year: 2015,
    commodity: "Talas",
    harvestedArea: 1,
    production: 5,
    productionValue: 12000000,
    productionCost: 3200000,
    productionBalance: 8800000
  },
  {
    year: 2015,
    commodity: "Kacang Tanah",
    harvestedArea: 3,
    production: 3.6,
    productionValue: 35000000,
    productionCost: 4800000,
    productionBalance: 30200000
  },
  {
    year: 2015,
    commodity: "Kacang Panjang",
    harvestedArea: 1,
    production: 5,
    productionValue: 9500000,
    productionCost: 1000000,
    productionBalance: 8500000
  },
  {
    year: 2015,
    commodity: "Kacang Merah",
    harvestedArea: 2,
    production: 6,
    productionValue: 15000000,
    productionCost: 4850000,
    productionBalance: 10150000
  },
  {
    year: 2015,
    commodity: "Ubi Kayu",
    harvestedArea: 16,
    production: 624,
    productionValue: 30000000,
    productionCost: 6000000,
    productionBalance: 24000000
  },
  {
    year: 2022,
    commodity: "Tomat",
    harvestedArea: 4,
    production: 92,
    productionValue: 46000000,
    productionCost: 18000000,
    productionBalance: 28000000
  },
  {
    year: 2022,
    commodity: "Padi Sawah",
    harvestedArea: 130,
    production: 650,
    productionValue: 4550000000,
    productionCost: 545000000,
    productionBalance: 4005000000
  },
  {
    year: 2015,
    commodity: "Jagung",
    harvestedArea: 4,
    production: 1500,
    productionValue: 16750000,
    productionCost: 5200000,
    productionBalance: 11550000
  },
  {
    year: 2025,
    commodity: "Cabe",
    harvestedArea: 4,
    production: 25.2,
    productionValue: 37800000,
    productionCost: 21000000,
    productionBalance: 16800000
  },
  {
    year: 2015,
    commodity: "Ubi Jalar",
    harvestedArea: 3.5,
    production: 87.5,
    productionValue: 1500000,
    productionCost: 4300000,
    productionBalance: -2800000
  },
  {
    year: 2015,
    commodity: "Sawi",
    harvestedArea: 0.15,
    production: 0.9,
    productionValue: 0,
    productionCost: 0,
    productionBalance: 0
  }
];


const plantationData: PlantationData[] = [
  {
    year: 2022,
    commodity: "Kopi",
    privateArea: 0,
    privateProduction: 0,
    publicArea: 2.00,
    publicProduction: 40.00,
    totalArea: 2.00,
    productionValue: 40000000,
    productionCost: 30000000,
    productionBalance: 10000000,
    production: 0
  },
  {
    year: 2025,
    commodity: "Cengkeh",
    privateArea: 0,
    privateProduction: 0,
    publicArea: 1.00,
    publicProduction: 20.00,
    totalArea: 1.00,
    productionValue: 10000000,
    productionCost: 4000000,
    productionBalance: 6000000,
    production: 0
  },
  {
    year: 2022,
    commodity: "Alpukat",
    harvestedArea: 0.5,
    production: 2.5,
    privateProduction: 0,
    publicArea: 0,
    publicProduction: 0,
    totalArea: 0,
    productionCost: 0,
    productionBalance: 0
  },
  {
    year: 2015,
    commodity: "Jeruk",
    harvestedArea: 1,
    production: 4,
    privateProduction: 0,
    publicArea: 0,
    publicProduction: 0,
    totalArea: 0,
    productionCost: 0,
    productionBalance: 0
  },
  {
    year: 2025,
    commodity: "Pisang",
    harvestedArea: 9.5,
    production: 114,
    privateProduction: 0,
    publicArea: 0,
    publicProduction: 0,
    totalArea: 0,
    productionCost: 0,
    productionBalance: 0
  },
  {
    year: 2015,
    commodity: "Pepaya",
    harvestedArea: 0.5,
    production: 0.5,
    privateProduction: 0,
    publicArea: 0,
    publicProduction: 0,
    totalArea: 0,
    productionCost: 0,
    productionBalance: 0
  },
  {
    year: 2022,
    commodity: "Talas",
    harvestedArea: 0.5,
    production: 2.5,
    privateProduction: 0,
    publicArea: 0,
    publicProduction: 0,
    totalArea: 0,
    productionCost: 0,
    productionBalance: 0
  },
  {
    year: 2015,
    commodity: "Mangga",
    harvestedArea: 2,
    production: 13,
    privateProduction: 0,
    publicArea: 0,
    publicProduction: 0,
    totalArea: 0,
    productionCost: 0,
    productionBalance: 0
  }
];

const biopharmacaData: BaseProductionData[] = [
  {
    year: 2025,
    commodity: "Daun Sereh",
    harvestedArea: 358,
    production: 358
  },
  {
    year: 2022,
    commodity: "Jahe",
    harvestedArea: 12.5,
    production: 200
  },
  {
    year: 2015,
    commodity: "Kumis Kucing",
    harvestedArea: 0.8,
    production: 0.8
  },
  {
    year: 2022,
    commodity: "Kunyit",
    harvestedArea: 2.5,
    production: 12.5
  },
  {
    year: 2015,
    commodity: "Kencur",
    harvestedArea: 0.15,
    production: 0.3
  },
  {
    year: 2015,
    commodity: "Lengkuas",
    harvestedArea: 1,
    production: 4
  }
];

const forestData: BaseProductionData[] = [
  {
    year: 2015,
    commodity: "Gula Enau",
    production: 3.5
  },
  {
    year: 2025,
    commodity: "Bambu",
    production: 17000
  }
];

const miningData: MiningData[] = [
  {
    year: 2013,
    material: "Batu Apung",
    scale: "Kecil"
  },
  {
    year: 2025,
    material: "Batu Cadas",
    scale: "Kecil"
  },
  {
    year: 2015,
    material: "Tanah Liat",
    scale: "-"
  },
  {
    year: 2015,
    material: "Pasir",
    scale: "-"
  },
  {
    year: 2024,
    material: "Batu Gunung",
    scale: "Kecil"
  },
  {
    year: 2015,
    material: "Batu Kali",
    scale: "Kecil"
  }
];

const aquacultureData: AquacultureData[] = [
  {
    year: 2025,
    facility: "Sawah",
    area: 1.25,
    production: 4
  },
  {
    year: 2025,
    facility: "Empang/Kolam",
    area: 2.5,
    production: 3.5
  }
];

const livestockData: LivestockData[] = [
  {
    year: 2024,
    type: "Sapi Potong",
    male: 0,
    female: 0,
    total: 160
  },
  {
    year: 2024,
    type: "Sapi Perah",
    male: 18,
    female: 91,
    total: 109
  },
  {
    year: 2024,
    type: "Kerbau",
    male: 0,
    female: 152,
    total: 152
  },
  {
    year: 2024,
    type: "Kambing",
    male: 0,
    female: 0,
    total: 1823
  },
  {
    year: 2024,
    type: "Domba",
    male: 0,
    female: 0,
    total: 26009
  },
  {
    year: 2024,
    type: "Ayam Buras",
    male: 0,
    female: 0,
    total: 45277
  },
  {
    year: 2024,
    type: "Ayam Ras Petelur",
    male: 2326,
    female: 35561,
    total: 37887
  },
  {
    year: 2024,
    type: "Ayam Ras Pedaging",
    male: 0,
    female: 0,
    total: 73654
  },
  {
    year: 2024,
    type: "Itik",
    male: 0,
    female: 0,
    total: 932
  },
  {
    year: 2024,
    type: "Itik Manila",
    male: 0,
    female: 0,
    total: 2044
  },
  {
    year: 2024,
    type: "Puyuh",
    male: 0,
    female: 0,
    total: 1937
  },
  {
    year: 2024,
    type: "Kelinci",
    male: 0,
    female: 0,
    total: 880
  },
  {
    year: 2024,
    type: "Kambing Perah",
    male: 0,
    female: 0,
    total: 33
  }
];

const categories = [
  { id: 'agriculture', title: 'Pertanian', icon: Sprout },
  { id: 'plantation', title: 'Perkebunan', icon: Tree },
  { id: 'biopharmaca', title: 'Biofarmaka', icon: Beaker },
  { id: 'forest', title: 'Hasil Hutan', icon: Tree },
  { id: 'mining', title: 'Galian', icon: Mountain },
  { id: 'aquaculture', title: 'Budidaya Air', icon: Fish },
  { id: 'livestock', title: 'Peternakan', icon: CowIcon }
];

const AgricultureStats: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const renderProductionData = (data: BaseProductionData[] | PlantationData[]) => (
    <div className="space-y-4">
      {data.map((item) => (
        <div key={`${item.year}-${item.commodity}`} className="border rounded-lg">
          <button
            onClick={() => setExpandedItem(
              expandedItem === `${item.year}-${item.commodity}` 
                ? null 
                : `${item.year}-${item.commodity}`
            )}
            className="w-full px-4 py-3 flex items-center justify-between text-left"
          >
            <div>
              <span className="font-medium">{item.commodity}</span>
              <span className="text-sm text-gray-500 ml-2">({item.year})</span>
            </div>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                expandedItem === `${item.year}-${item.commodity}` ? 'rotate-180' : ''
              }`}
            />
          </button>

          <AnimatePresence>
            {expandedItem === `${item.year}-${item.commodity}` && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: 'auto' }}
                exit={{ height: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="px-4 pb-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {item.harvestedArea !== undefined && (
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Luas Panen</h4>
                        <p className="text-xl font-semibold text-primary-600">
                          {item.harvestedArea?.toFixed(2)} Ha
                        </p>
                      </div>
                    )}
                    {'privateArea' in item && item.privateArea !== undefined && (
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Luas Perkebunan Swasta</h4>
                        <p className="text-xl font-semibold text-primary-600">
                          {item.privateArea?.toFixed(2)} Ha
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          Produksi: {item.privateProduction?.toFixed(2) ?? '-'} Ton
                        </p>
                      </div>
                    )}
                    {'publicArea' in item && item.publicArea !== undefined && (
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Luas Perkebunan Rakyat</h4>
                        <p className="text-xl font-semibold text-primary-600">
                          {item.publicArea?.toFixed(2)} Ha
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          Produksi: {item.publicProduction?.toFixed(2) ?? '-'} Ton
                        </p>
                      </div>
                    )}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Produksi</h4>
                      <p className="text-xl font-semibold text-primary-600">
                        {item.production?.toFixed(2)} Ton
                      </p>
                    </div>
                    {item.productionValue !== undefined && (
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Nilai Produksi</h4>
                        <p className="text-xl font-semibold text-green-600">
                          {formatCurrency(item.productionValue)}
                        </p>
                      </div>
                    )}
                    {item.productionCost !== undefined && (
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Biaya Produksi</h4>
                        <p className="text-xl font-semibold text-red-600">
                          {formatCurrency(item.productionCost)}
                        </p>
                      </div>
                    )}
                    {item.productionBalance !== undefined && (
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Saldo Produksi</h4>
                        <p className={`text-xl font-semibold ${
                          item.productionBalance >= 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {formatCurrency(item.productionBalance)}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );

  const renderLivestockData = () => (
    <div className="space-y-4">
      {livestockData.map((item) => (
        <div key={`${item.year}-${item.type}`} className="border rounded-lg">
          <button
            onClick={() => setExpandedItem(
              expandedItem === `${item.year}-${item.type}` 
                ? null 
                : `${item.year}-${item.type}`
            )}
            className="w-full px-4 py-3 flex items-center justify-between text-left"
          >
            <div>
              <span className="font-medium">{item.type}</span>
              <span className="text-sm text-gray-500 ml-2">({item.year})</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm font-medium bg-primary-100 text-primary-800 px-2 py-1 rounded-full mr-2">
                Total: {item.total}
              </span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  expandedItem === `${item.year}-${item.type}` ? 'rotate-180' : ''
                }`}
              />
            </div>
          </button>

          <AnimatePresence>
            {expandedItem === `${item.year}-${item.type}` && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: 'auto' }}
                exit={{ height: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="px-4 pb-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Jantan</h4>
                      <p className="text-xl font-semibold text-blue-600">
                        {item.male} ekor
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Betina</h4>
                      <p className="text-xl font-semibold text-pink-600">
                        {item.female} ekor
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Total</h4>
                      <p className="text-xl font-semibold text-primary-600">
                        {item.total} ekor
                      </p>
                    </div>
                  </div>
                  {(item.male > 0 || item.female > 0) && (
                    <div className="mt-4">
                      <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full float-left bg-blue-500"
                          style={{
                            width: `${(item.male / item.total) * 100}%`
                          }}
                        />
                        <div
                          className="h-full float-left bg-pink-500"
                          style={{
                            width: `${(item.female / item.total) * 100}%`
                          }}
                        />
                      </div>
                      <div className="mt-2 flex gap-4 text-sm">
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-blue-500 mr-1" />
                          <span>Jantan ({((item.male / item.total) * 100).toFixed(1)}%)</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-pink-500 mr-1" />
                          <span>Betina ({((item.female / item.total) * 100).toFixed(1)}%)</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return renderProductionData(agricultureData);
      case 1:
        return renderProductionData(plantationData);
      case 2:
        return renderProductionData(biopharmacaData);
      case 3:
        return renderProductionData(forestData);
      case 4:
        return (
          <div className="space-y-4">
            {miningData.map((item) => (
              <div key={`${item.year}-${item.material}`} className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium">{item.material}</h4>
                <p className="text-sm text-gray-600">Skala: {item.scale}</p>
                <p className="text-sm text-gray-600">Tahun: {item.year}</p>
              </div>
            ))}
          </div>
        );
      case 5:
        return (
          <div className="space-y-4">
            {aquacultureData.map((item) => (
              <div key={`${item.year}-${item.facility}`} className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium">{item.facility}</h4>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div>
                    <p className="text-sm text-gray-600">Luas</p>
                    <p className="text-lg font-semibold">{item.area} m²</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Produksi</p>
                    <p className="text-lg font-semibold">{item.production} ton</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      case 6:
        return renderLivestockData();
      default:
        return null;
    }
  };

  return (
    <section className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Statistik Pertanian</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Data produksi pertanian, perkebunan, peternakan, dan hasil alam lainnya di Desa Sindangjaya
          </p>
        </motion.div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
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

          <div className="p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgricultureStats;