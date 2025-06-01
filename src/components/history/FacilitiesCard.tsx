import React from 'react';
import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

interface Facility {
  name: string;
  count: number;
}

interface FacilitiesCardProps {
  title: string;
  facilities: Facility[];
  icon?: React.ReactNode;
  delay?: number;
}

const FacilitiesCard: React.FC<FacilitiesCardProps> = ({
  title,
  facilities,
  icon = <Building2 className="h-6 w-6 text-emerald-600" />,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
    >
      <div className="p-6 flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-center gap-4">
          <div className="p-2 bg-emerald-100 rounded-full">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        </div>

        {/* Content */}
        <div className="divide-y divide-gray-100">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-2 text-sm sm:text-base"
            >
              <span className="text-gray-600">{facility.name}</span>
              <span className="font-semibold text-gray-800">{facility.count}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FacilitiesCard;
