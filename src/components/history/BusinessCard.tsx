import React from 'react';
import { motion } from 'framer-motion';
import { Store } from 'lucide-react';

interface Business {
  name: string;
  count: number;
}

interface BusinessCardProps {
  title: string;
  businesses: Business[];
  icon?: React.ReactNode;
  delay?: number;
}

const BusinessCard: React.FC<BusinessCardProps> = ({ 
  title, 
  businesses,
  icon = <Store className="h-6 w-6 text-emerald-600" />,
  delay = 0 
}) => {
  const totalBusinesses = businesses.reduce((sum, business) => sum + business.count, 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl shadow-sm overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          {icon}
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <div className="space-y-3">
          {businesses.map((business, index) => (
            business.count > 0 && (
              <div key={index} className="flex justify-between items-center">
                <span className="text-gray-600">{business.name}</span>
                <span className="font-medium">{business.count}</span>
              </div>
            )
          ))}
        </div>
        <div className="mt-4 pt-4 border-t">
          <div className="flex justify-between items-center">
            <span className="text-gray-600 font-medium">Total</span>
            <span className="font-bold text-emerald-600">{totalBusinesses}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BusinessCard;