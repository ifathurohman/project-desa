import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

interface StructureProps {
  delay?: number;
}

const GovernmentStructure: React.FC<StructureProps> = ({ delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl shadow-sm overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <Users className="h-6 w-6 text-emerald-600" />
          <h3 className="text-xl font-semibold">Struktur Pemerintahan Desa</h3>
        </div>
        <div className="prose prose-emerald max-w-none">
          <p>
            Pemerintah Desa Sindangjaya saat ini mempunyai perangkat desa yang terdiri dari:
          </p>
          <ul>
            <li>1 orang Kepala Desa</li>
            <li>1 orang Sekretaris Desa</li>
            <li>3 orang Kepala Urusan</li>
            <li>3 orang Kepala Seksi</li>
            <li>1 orang Staf Sekertariat</li>
            <li>2 orang Staf umum</li>
          </ul>
          <p className="font-medium mt-4">Pembagian Wilayah:</p>
          <p>
            Desa Sindangjaya terdiri dari 3 Dusun, 7 RW dan 30 RT dengan rincian:
          </p>
          <ul>
            <li>Dusun Cisitu: 13 RT, 3 RW</li>
            <li>Dusun Nagrog: 9 RT, 2 RW</li>
            <li>Dusun Tugu: 8 RT, 2 RW</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default GovernmentStructure;