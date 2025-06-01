import React from 'react';
import { motion } from 'framer-motion';

interface DemographicDataProps {
  label: string;
  values: {
    year: string;
    value: string | number;
  }[];
  growth?: string;
}

const DemographicsCard: React.FC<DemographicDataProps> = ({ label, values, growth }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
    >
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{label}</h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 text-sm text-gray-700">
        <div className="font-medium text-gray-500">Tahun</div>
        <div className="font-medium text-gray-500 text-right col-span-1 sm:col-span-2">Jumlah</div>

        {values.map((item, index) => (
          <React.Fragment key={index}>
            <div className="text-gray-700">{item.year}</div>
            <div className="text-right font-semibold text-gray-800 col-span-1 sm:col-span-2">
              {item.value}
            </div>
          </React.Fragment>
        ))}
      </div>

      {growth && (
        <div className="mt-4 text-sm">
          <span className="text-gray-600">Pertumbuhan: </span>
          <span
            className={`font-semibold ${
              parseFloat(growth) > 0
                ? 'text-green-600'
                : parseFloat(growth) < 0
                ? 'text-red-600'
                : 'text-gray-600'
            }`}
          >
            {growth}
          </span>
        </div>
      )}
    </motion.div>
  );
};

export default DemographicsCard;
