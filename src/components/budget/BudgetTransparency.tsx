import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, TrendingUp, TrendingDown, Wallet, Building2, Users, Hammer, Shield, Filter } from 'lucide-react';
import { Cell, Pie, PieChart as RechartsPieChart, ResponsiveContainer, LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const yearlyBudgetData = {
  2021: {
    income: {
      total: 2751508500,
      sources: [
        { name: "Pendapatan Asli Desa", amount: 15500000 },
        { name: "Pendapatan Transfer", amount: 2736008500 },
        { name: "Pendapatan Lain-lain", amount: 0 }
      ]
    },
    expenses: {
      total: 2753468164,
      categories: [
        { name: "Penyelenggaraan Pemerintahan Desa", amount: 939386164, icon: Building2, color: "#4F46E5" },
        { name: "Pelaksanaan Pembangunan Desa", amount: 1612497000, icon: Hammer, color: "#059669" },
        { name: "Pembinaan Kemasyarakatan", amount: 84085000, icon: Users, color: "#D97706" },
        { name: "Pemberdayaan Masyarakat", amount: 9500000, icon: TrendingUp, color: "#DC2626" },
        { name: "Penanggulangan Bencana", amount: 108000000, icon: Shield, color: "#7C3AED" }
      ]
    },
    surplus: -1959664,
    financing: 1959664
  },
  2022: {
    income: {
      total: 2071185900,
      sources: [
        { name: "Pendapatan Asli Desa", amount: 15500000 },
        { name: "Pendapatan Transfer", amount: 2055685900 },
        { name: "Pendapatan Lain-lain", amount: 0 }
      ]
    },
    expenses: {
      total: 2029673671,
      categories: [
        { name: "Penyelenggaraan Pemerintahan Desa", amount: 794954971, icon: Building2, color: "#4F46E5" },
        { name: "Pelaksanaan Pembangunan Desa", amount: 662700000, icon: Hammer, color: "#059669" },
        { name: "Pembinaan Kemasyarakatan", amount: 98679700, icon: Users, color: "#D97706" },
        { name: "Pemberdayaan Masyarakat", amount: 16139000, icon: TrendingUp, color: "#DC2626" },
        { name: "Penanggulangan Bencana", amount: 457200000, icon: Shield, color: "#7C3AED" }
      ]
    },
    surplus: 41512229,
    financing: {
      income: 8487771,
      expenses: 50000000,
      net: -41512229
    }
  },
  2023: {
    income: {
      total: 2696734700,
      sources: [
        { name: "Pendapatan Desa", amount: 2696734700 }
      ]
    },
    expenses: {
      total: 2647624757,
      categories: [
        { name: "Penyelenggaraan Pemerintahan Desa", amount: 895988857, icon: Building2, color: "#4F46E5" },
        { name: "Pelaksanaan Pembangunan Desa", amount: 1426525000, icon: Hammer, color: "#059669" },
        { name: "Pembinaan Kemasyarakatan", amount: 150835900, icon: Users, color: "#D97706" },
        { name: "Pemberdayaan Masyarakat", amount: 19475000, icon: TrendingUp, color: "#DC2626" },
        { name: "Penanggulangan Bencana", amount: 154800000, icon: Shield, color: "#7C3AED" }
      ]
    },
    surplus: 49109943,
    financing: {
      income: 890057,
      expenses: 50000000,
      net: -49109943
    }
  }
};

const BudgetTransparency: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number>(2021);
  const years = [2021, 2022, 2023];
  const currentData = yearlyBudgetData[selectedYear];

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const trendData = years.map(year => ({
    year,
    pendapatan: yearlyBudgetData[year].income.total,
    belanja: yearlyBudgetData[year].expenses.total
  }));

  return (
    <div>
      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-xl shadow-sm p-6"
        >
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-lg bg-green-100 text-green-600 flex items-center justify-center mr-3">
              <Wallet size={20} />
            </div>
            <h3 className="font-semibold">Total Pendapatan</h3>
          </div>
          <p className="text-2xl font-bold text-green-600">{formatCurrency(currentData.income.total)}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="bg-white rounded-xl shadow-sm p-6"
        >
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center mr-3">
              <Building2 size={20} />
            </div>
            <h3 className="font-semibold">Total Belanja</h3>
          </div>
          <p className="text-2xl font-bold text-red-600">{formatCurrency(currentData.expenses.total)}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="bg-white rounded-xl shadow-sm p-6"
        >
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
              {currentData.surplus >= 0 ? <TrendingUp size={20} /> : <TrendingDown size={20} />}
            </div>
            <h3 className="font-semibold">Surplus/Defisit</h3>
          </div>
          <p className={`text-2xl font-bold ${currentData.surplus >= 0 ? 'text-blue-600' : 'text-red-600'}`}>
            {formatCurrency(currentData.surplus)}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="bg-white rounded-xl shadow-sm p-6"
        >
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mr-3">
              <Download size={20} />
            </div>
            <h3 className="font-semibold">Pembiayaan</h3>
          </div>
          <p className="text-2xl font-bold text-purple-600">
            {formatCurrency(typeof currentData.financing === 'number' ? currentData.financing : currentData.financing.net)}
          </p>
        </motion.div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-sm p-6"
        >

          {/* Year Selection */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Distribusi Belanja Desa</h3>
              <p className="text-gray-600 text-sm mt-1">
                Pilih tahun untuk melihat distribusi anggaran.
              </p>
            </div>

            <div className="relative w-full max-w-[200px]">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(Number(e.target.value))}
                className="appearance-none w-full bg-white border border-gray-300 text-gray-800 text-sm rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {years.map((year) => (
                  <option key={year} value={year}>Tahun {year}</option>
                ))}
              </select>
              <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" size={18} />
            </div>
          </div>


          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsPieChart>
                <Pie
                  data={currentData.expenses.categories}
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="amount"
                  nameKey="name"
                  label={({ percent }) => `(${(percent * 100).toFixed(1)}%)`}
                >
                  {currentData.expenses.categories.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number) => formatCurrency(value)} />
                <Legend />
              </RechartsPieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl shadow-sm p-6"
        >
          <h3 className="text-xl font-semibold mb-6">Tren Anggaran</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsLineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis tickFormatter={(value) => `${(value / 1000000000).toFixed(1)} M`} />
                <Tooltip formatter={(value: number) => formatCurrency(value)} />
                <Legend />
                <Line type="monotone" name="Pendapatan" dataKey="pendapatan" stroke="#059669" strokeWidth={2} />
                <Line type="monotone" name="Belanja" dataKey="belanja" stroke="#DC2626" strokeWidth={2} />
              </RechartsLineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Detailed Breakdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-white rounded-xl shadow-sm p-6"
      >
        <h3 className="text-xl font-semibold mb-6">Rincian Anggaran</h3>
        <div className="space-y-6">
          {currentData.expenses.categories.map((category, index) => (
            <div key={category.name} className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3" style={{ backgroundColor: category.color + '20', color: category.color }}>
                    <category.icon size={18} />
                  </div>
                  <h4 className="font-medium">{category.name}</h4>
                </div>
                <span className="text-sm font-medium px-2 py-1 rounded-full" style={{ backgroundColor: category.color + '20', color: category.color }}>
                  {((category.amount / currentData.expenses.total) * 100).toFixed(1)}%
                </span>
              </div>
              <p className="font-semibold text-gray-900">{formatCurrency(category.amount)}</p>
              <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                <div
                  className="h-2 rounded-full"
                  style={{
                    width: `${(category.amount / currentData.expenses.total) * 100}%`,
                    backgroundColor: category.color
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default BudgetTransparency;