import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, ArrowUp, ArrowDown, Building2, Filter } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';

interface PopulationData {
  year: number;
  total: number;
  cisitu: number;
  nagrog: number;
  tugu: number;
  growthRate?: number;
}

const populationData: PopulationData[] = [
  { year: 2019, total: 4614, cisitu: 2011, nagrog: 1349, tugu: 1254 },
  { year: 2020, total: 4662, cisitu: 2016, nagrog: 1396, tugu: 1312, growthRate: 1.04 },
  { year: 2021, total: 4736, cisitu: 2022, nagrog: 1455, tugu: 1326, growthRate: 1.59 },
  { year: 2022, total: 4759, cisitu: 2048, nagrog: 1457, tugu: 1255, growthRate: 0.49 },
  { year: 2023, total: 4784, cisitu: 2049, nagrog: 1464, tugu: 1271, growthRate: 0.53 },
  { year: 2024, total: 4797, cisitu: 2037, nagrog: 1497, tugu: 1262, growthRate: 0.27 },
  { year: 2025, total: 4828, cisitu: 2041, nagrog: 1523, tugu: 1262, growthRate: 0.65 },
  { year: 2026, total: 4862, cisitu: 2054, nagrog: 1551, tugu: 1262, growthRate: 0.70 },
  { year: 2027, total: 4897, cisitu: 2059, nagrog: 1578, tugu: 1257, growthRate: 0.72 },
  { year: 2028, total: 4931, cisitu: 2065, nagrog: 1604, tugu: 1253, growthRate: 0.69 },
  { year: 2029, total: 4965, cisitu: 2071, nagrog: 1630, tugu: 1248, growthRate: 0.69 },
  { year: 2030, total: 4999, cisitu: 2076, nagrog: 1656, tugu: 1243, growthRate: 0.68 },
  { year: 2031, total: 5034, cisitu: 2082, nagrog: 1682, tugu: 1239, growthRate: 0.70 },
  { year: 2032, total: 5068, cisitu: 2088, nagrog: 1709, tugu: 1234, growthRate: 0.68 },
  { year: 2033, total: 5102, cisitu: 2093, nagrog: 1735, tugu: 1229, growthRate: 0.67 },
  { year: 2034, total: 5137, cisitu: 2099, nagrog: 1761, tugu: 1225, growthRate: 0.69 },
  { year: 2035, total: 5171, cisitu: 2105, nagrog: 1787, tugu: 1220, growthRate: 0.66 }
];

const PopulationStats: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number>(2024);
  const [showProjections, setShowProjections] = useState<boolean>(true);

  const currentData = populationData.find(d => d.year === selectedYear)!;
  const previousYearData = populationData.find(d => d.year === selectedYear - 1);

  const formatNumber = (num: number) => num.toLocaleString('id-ID');

  const getGrowthRate = (current: number, previous?: number) => {
    if (!previous) return '0.00';
    const rate = ((current - previous) / previous) * 100;
    return rate.toFixed(2);
  };

  const getGrowthColor = (rate: number) => {
    if (rate > 0) return 'text-green-600';
    if (rate < 0) return 'text-red-600';
    return 'text-gray-600';
  };

  const years = populationData.map(d => d.year);
  const minYear = Math.min(...years);
  const maxYear = Math.max(...years);

  const filteredData = showProjections 
    ? populationData 
    : populationData.filter(d => d.year <= 2024);

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
          <h2 className="section-title">Statistik Kependudukan</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Data pertumbuhan penduduk dan proyeksi populasi Desa Sindangjaya hingga tahun 2035
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <div className="relative">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(Number(e.target.value))}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {years.map(year => (
                  <option key={year} value={year}>Tahun {year}</option>
                ))}
              </select>
              <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
            </div>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={showProjections}
                onChange={(e) => setShowProjections(e.target.checked)}
                className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="text-sm text-gray-700">Tampilkan Proyeksi</span>
            </label>
          </div>
        </div>

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
                <Users size={20} />
              </div>
              <h3 className="font-semibold">Total Penduduk</h3>
            </div>
            <p className="text-3xl font-bold text-primary-600">{formatNumber(currentData.total)}</p>
            <div className="flex items-center mt-2 text-sm">
              {currentData.growthRate && currentData.growthRate > 0 ? (
                <ArrowUp size={16} className="text-green-500 mr-1" />
              ) : (
                <ArrowDown size={16} className="text-red-500 mr-1" />
              )}
              <span className={getGrowthColor(currentData.growthRate || 0)}>
                {currentData.growthRate}% dari tahun sebelumnya
              </span>
            </div>
          </motion.div>

          {['cisitu', 'nagrog', 'tugu'].map((region, index) => (
            <motion.div
              key={region}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: (index + 1) * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white rounded-xl shadow-sm p-6"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center mr-3">
                  <Building2 size={20} />
                </div>
                <h3 className="font-semibold">Dusun {region.charAt(0).toUpperCase() + region.slice(1)}</h3>
              </div>
              <p className="text-3xl font-bold text-primary-600">
                {formatNumber(currentData[region as keyof PopulationData] as number)}
              </p>
              <div className="flex items-center mt-2 text-sm">
                {getGrowthRate(
                  currentData[region as keyof PopulationData] as number,
                  previousYearData?.[region as keyof PopulationData] as number
                )}% dari tahun sebelumnya
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white rounded-xl shadow-sm p-6"
          >
            <h3 className="text-xl font-semibold mb-6">Tren Pertumbuhan Penduduk</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={filteredData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis domain={['dataMin - 100', 'dataMax + 100']} />
                  <Tooltip />
                  <Legend />
                  <Area 
                    type="monotone" 
                    name="Total Penduduk"
                    dataKey="total" 
                    stroke="#4F46E5"
                    fill="#4F46E5"
                    fillOpacity={0.1}
                  />
                </AreaChart>
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
            <h3 className="text-xl font-semibold mb-6">Distribusi per Dusun</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={filteredData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis domain={['dataMin - 100', 'dataMax + 100']} />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    name="Dusun Cisitu"
                    dataKey="cisitu" 
                    stroke="#4F46E5" 
                    strokeWidth={2}
                  />
                  <Line 
                    type="monotone" 
                    name="Dusun Nagrog"
                    dataKey="nagrog" 
                    stroke="#059669" 
                    strokeWidth={2}
                  />
                  <Line 
                    type="monotone" 
                    name="Dusun Tugu"
                    dataKey="tugu" 
                    stroke="#DC2626" 
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
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
          <h3 className="text-xl font-semibold mb-6">Data Historis dan Proyeksi</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left">Tahun</th>
                  <th className="px-4 py-3 text-right">Total Penduduk</th>
                  <th className="px-4 py-3 text-right">Dusun Cisitu</th>
                  <th className="px-4 py-3 text-right">Dusun Nagrog</th>
                  <th className="px-4 py-3 text-right">Dusun Tugu</th>
                  <th className="px-4 py-3 text-right">Pertumbuhan</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((data, index) => (
                  <tr 
                    key={data.year} 
                    className={`border-t ${data.year === selectedYear ? 'bg-primary-50' : ''}`}
                  >
                    <td className="px-4 py-3 font-medium">
                      {data.year}
                      {data.year > 2024 && (
                        <span className="ml-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">
                          Proyeksi
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-right">{formatNumber(data.total)}</td>
                    <td className="px-4 py-3 text-right">{formatNumber(data.cisitu)}</td>
                    <td className="px-4 py-3 text-right">{formatNumber(data.nagrog)}</td>
                    <td className="px-4 py-3 text-right">{formatNumber(data.tugu)}</td>
                    <td className="px-4 py-3 text-right">
                      {data.growthRate !== undefined && (
                        <span className={getGrowthColor(data.growthRate)}>
                          {data.growthRate > 0 ? '+' : ''}{data.growthRate}%
                        </span>
                      )}
                    </td>
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

export default PopulationStats;