import React from 'react';
import { motion } from 'framer-motion';
import { School, GraduationCap, BookOpen, Users, TrendingUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

interface EducationLevel {
  id: string;
  name: string;
  icon: React.ElementType;
  color: string;
  standardPopulation: number;
  minArea: number;
}

const educationLevels: EducationLevel[] = [
  {
    id: 'tk',
    name: 'TK/Sederajat',
    icon: School,
    color: '#4F46E5',
    standardPopulation: 625,
    minArea: 500
  },
  {
    id: 'sd',
    name: 'SD/Sederajat',
    icon: BookOpen,
    color: '#059669',
    standardPopulation: 800,
    minArea: 2000
  },
  {
    id: 'smp',
    name: 'SMP/Sederajat',
    icon: GraduationCap,
    color: '#DC2626',
    standardPopulation: 2400,
    minArea: 9000
  },
  {
    id: 'sma',
    name: 'SMA/Sederajat',
    icon: Users,
    color: '#F59E0B',
    standardPopulation: 2400,
    minArea: 12500
  }
];

const facilitiesData = {
  cisitu: {
    population: 2042,
    facilities: [
      { level: 'tk', existing: 0, required: 4, area: 2000 },
      { level: 'sd', existing: 1, required: 3, area: 4000 },
      { level: 'smp', existing: 0, required: 3, area: 27000 },
      { level: 'sma', existing: 0, required: 1, area: 12500 }
    ]
  },
  nagrog: {
    population: 1527,
    facilities: [
      { level: 'tk', existing: 0, required: 3, area: 1500 },
      { level: 'sd', existing: 0, required: 2, area: 0 },
      { level: 'smp', existing: 0, required: 1, area: 9000 },
      { level: 'sma', existing: 0, required: 1, area: 12500 }
    ]
  },
  tugu: {
    population: 1264,
    facilities: [
      { level: 'tk', existing: 0, required: 3, area: 1500 },
      { level: 'sd', existing: 1, required: 2, area: 0 },
      { level: 'smp', existing: 0, required: 1, area: 9000 },
      { level: 'sma', existing: 0, required: 1, area: 12500 }
    ]
  }
};

const existingFacilities = [
  { name: 'PAUD', location: 'RW 02 DUSUN 1', count: 1, status: 'SWASTA', facilityName: 'SPS Al Barokah' },
  { name: 'SD', location: 'RW 02 DUSUN 1', count: 1, status: 'NEGERI', facilityName: 'SDN CISITU' },
  { name: 'SD', location: 'RW 06 DUSUN III', count: 1, status: 'NEGERI', facilityName: 'SDN TRESNA BUDI' },
  { name: 'MI', location: 'RW 04 DUSUN II', count: 1, status: 'SWASTA', facilityName: '' },
  { name: 'Madrasah', location: 'RW 6 DUSUN III', count: 2, status: 'SWASTA', facilityName: '' }
];

const EducationFacilities: React.FC = () => {
  const totalRequired = Object.values(facilitiesData).reduce(
    (sum, region) => sum + region.facilities.reduce((s, f) => s + f.required, 0),
    0
  );

  const totalExisting = Object.values(facilitiesData).reduce(
    (sum, region) => sum + region.facilities.reduce((s, f) => s + f.existing, 0),
    0
  );

  const totalArea = Object.values(facilitiesData).reduce(
    (sum, region) => sum + region.facilities.reduce((s, f) => s + f.area, 0),
    0
  );

  const coverageRate = (totalExisting / totalRequired) * 100;

  const chartData = educationLevels.map(level => ({
    name: level.name,
    required: Object.values(facilitiesData).reduce(
      (sum, region) => sum + region.facilities.find(f => f.level === level.id)!.required,
      0
    ),
    existing: Object.values(facilitiesData).reduce(
      (sum, region) => sum + region.facilities.find(f => f.level === level.id)!.existing,
      0
    ),
    color: level.color
  }));

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
          <h2 className="section-title">Sarana Pendidikan</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Analisis kebutuhan dan ketersediaan fasilitas pendidikan di Desa Sindangjaya
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white rounded-xl shadow-sm p-6"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center mr-3">
                <School size={20} />
              </div>
              <h3 className="font-semibold">Total Kebutuhan</h3>
            </div>
            <p className="text-3xl font-bold text-primary-600">{totalRequired}</p>
            <p className="text-sm text-gray-600 mt-1">Unit fasilitas pendidikan</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white rounded-xl shadow-sm p-6"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-lg bg-green-100 text-green-600 flex items-center justify-center mr-3">
                <BookOpen size={20} />
              </div>
              <h3 className="font-semibold">Tersedia</h3>
            </div>
            <p className="text-3xl font-bold text-green-600">{totalExisting}</p>
            <p className="text-sm text-gray-600 mt-1">Unit yang telah ada</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white rounded-xl shadow-sm p-6"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-lg bg-yellow-100 text-yellow-600 flex items-center justify-center mr-3">
                <TrendingUp size={20} />
              </div>
              <h3 className="font-semibold">Tingkat Layanan</h3>
            </div>
            <p className="text-3xl font-bold text-yellow-600">{coverageRate.toFixed(1)}%</p>
            <p className="text-sm text-gray-600 mt-1">Dari total kebutuhan</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white rounded-xl shadow-sm p-6"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                <Users size={20} />
              </div>
              <h3 className="font-semibold">Kebutuhan Lahan</h3>
            </div>
            <p className="text-3xl font-bold text-blue-600">{(totalArea / 10000).toFixed(2)}</p>
            <p className="text-sm text-gray-600 mt-1">Hektar</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white rounded-xl shadow-sm p-6"
          >
            <h3 className="text-xl font-semibold mb-6">Kebutuhan vs Ketersediaan</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar name="Dibutuhkan" dataKey="required" fill="#4F46E5" />
                  <Bar name="Tersedia" dataKey="existing" fill="#059669" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white rounded-xl shadow-sm p-6"
          >
            <h3 className="text-xl font-semibold mb-6">Fasilitas yang Ada</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left">Jenis</th>
                    <th className="px-4 py-3 text-left">Lokasi</th>
                    <th className="px-4 py-3 text-center">Status</th>
                    <th className="px-4 py-3 text-left">Nama</th>
                  </tr>
                </thead>
                <tbody>
                  {existingFacilities.map((facility, index) => (
                    <tr key={index} className="border-t">
                      <td className="px-4 py-3">{facility.name}</td>
                      <td className="px-4 py-3">{facility.location}</td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex justify-center px-2 py-1 rounded-full text-xs font-medium ${
                          facility.status === 'NEGERI' 
                            ? 'bg-green-100 text-green-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {facility.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">{facility.facilityName || '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-white rounded-xl shadow-sm p-6"
        >
          <h3 className="text-xl font-semibold mb-6">Analisis per Dusun</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left">Dusun</th>
                  <th className="px-4 py-3 text-right">Penduduk</th>
                  {educationLevels.map(level => (
                    <th key={level.id} className="px-4 py-3 text-center">{level.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Object.entries(facilitiesData).map(([region, data], index) => (
                  <tr key={region} className="border-t">
                    <td className="px-4 py-3 font-medium capitalize">{region}</td>
                    <td className="px-4 py-3 text-right">{data.population.toLocaleString()}</td>
                    {data.facilities.map((facility, idx) => (
                      <td key={idx} className="px-4 py-3 text-center">
                        <span className={`inline-flex justify-center px-2 py-1 rounded-full text-xs font-medium ${
                          facility.existing === 0 
                            ? 'bg-red-100 text-red-800'
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {facility.existing}/{facility.required}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationFacilities;