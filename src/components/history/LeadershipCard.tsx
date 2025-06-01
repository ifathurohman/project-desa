import React from 'react';
import { motion } from 'framer-motion';

interface LeaderProps {
  name: string;
  period: string;
  note?: string;
  index: number;
}

const LeadershipCard: React.FC<LeaderProps> = ({ name, period, note, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="bg-gray-50 p-4 rounded-lg border border-gray-100"
    >
      <div className="text-sm text-gray-600 mb-1">{period}</div>
      <div className="font-medium">{name}</div>
      {note && <div className="text-sm text-gray-500 mt-1">{note}</div>}
    </motion.div>
  );
};

export default LeadershipCard;