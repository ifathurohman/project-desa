import React from 'react';
import { motion } from 'framer-motion';
import { Tree, TreeNode } from 'react-organizational-chart';

interface Official {
  id: number;
  name: string;
  position: string;
  division?: string;
  image: string;
  description?: string;
  duties?: string[];
}

const officials: Official[] = [
  {
    id: 1,
    name: 'Bapak Suparman',
    position: 'Kepala Desa',
    image: 'https://images.pexels.com/photos/5439455/pexels-photo-5439455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Memimpin penyelenggaraan Pemerintahan Desa',
    duties: [
      'Memegang kekuasaan pengelolaan Keuangan dan Aset Desa',
      'Menetapkan Peraturan Desa',
      'Membina kehidupan masyarakat Desa'
    ]
  },
  {
    id: 2,
    name: 'Ibu Suryani',
    position: 'Sekretaris Desa',
    division: 'Sekretariat Desa',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Membantu Kepala Desa dalam administrasi pemerintahan',
    duties: [
      'Melaksanakan urusan ketatausahaan',
      'Melaksanakan urusan umum',
      'Melaksanakan urusan keuangan'
    ]
  },
  {
    id: 3,
    name: 'Bapak Ahmad',
    position: 'Kepala Seksi Pemerintahan',
    division: 'Pelaksana Teknis',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Melaksanakan manajemen tata pemerintahan',
    duties: [
      'Menyusun rancangan regulasi Desa',
      'Pembinaan masalah pertanahan',
      'Pembinaan ketentraman dan ketertiban'
    ]
  },
  {
    id: 4,
    name: 'Ibu Siti',
    position: 'Kepala Seksi Kesejahteraan',
    division: 'Pelaksana Teknis',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Melaksanakan pembangunan sarana prasarana dan kesejahteraan',
    duties: [
      'Melaksanakan program pembangunan',
      'Melaksanakan pembinaan kesehatan',
      'Melaksanakan pembinaan pendidikan'
    ]
  },
  {
    id: 5,
    name: 'Bapak Rahmat',
    position: 'Kepala Seksi Pelayanan',
    division: 'Pelaksana Teknis',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Melaksanakan penyuluhan dan motivasi masyarakat',
    duties: [
      'Melaksanakan pelayanan masyarakat',
      'Melaksanakan pembinaan kemasyarakatan',
      'Melaksanakan pemberdayaan masyarakat'
    ]
  }
];

const OfficialCard: React.FC<{ official: Official }> = ({ official }) => (
  <div className="bg-white rounded-lg shadow-sm p-3 w-[125px] h-[140px] transition-all duration-300 hover:shadow-md mx-auto">
    <div className="relative w-14 h-14 mx-auto mb-2">
      <img
        src={official.image}
        alt={official.name}
        className="w-full h-full object-cover rounded-full border-2 border-primary-100"
      />
      {official.division && (
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white text-[8px] px-2 py-0.5 rounded-full whitespace-nowrap">
          {official.division}
        </div>
      )}
    </div>
    <div className="text-center">
      <h4 className="font-medium text-[10px] text-gray-900 mb-1 line-clamp-1">{official.name}</h4>
      <p className="text-[8px] font-medium text-primary-600 bg-primary-50 rounded-full py-0.5 px-1 line-clamp-2">
        {official.position}
      </p>
    </div>
  </div>
);

const MobileOfficialCard: React.FC<{ official: Official }> = ({ official }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    viewport={{ once: true }}
    className="bg-white rounded-xl shadow-sm overflow-hidden"
  >
    <div className="md:flex">
      <div className="md:w-1/3 relative">
        <img
          src={official.image}
          alt={official.name}
          className="w-full h-48 md:h-full object-cover"
        />
        {official.division && (
          <div className="absolute top-4 left-4 bg-primary-600 text-white text-xs px-3 py-1 rounded-full">
            {official.division}
          </div>
        )}
      </div>
      <div className="p-6 md:w-2/3">
        <h3 className="text-xl font-bold mb-1">{official.name}</h3>
        <p className="text-primary-600 font-medium mb-4">{official.position}</p>
        <p className="text-gray-600 mb-4">{official.description}</p>
        {official.duties && (
          <div>
            <h4 className="font-medium mb-2">Tugas Pokok:</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {official.duties.map((duty, index) => (
                <li key={index}>{duty}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  </motion.div>
);

const VillageOfficials: React.FC = () => {
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
          <h2 className="section-title">Struktur Pemerintahan Desa</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Mengenal para pemimpin yang mengabdi untuk kemajuan Desa Sindangjaya
          </p>
        </motion.div>

        {/* Desktop Organization Chart */}
        <div className="hidden lg:block">
          <div className="flex justify-center pb-4 mx-auto">
            <div className="min-w-fit p-4 mx-auto">
              <Tree
                lineWidth="1px"
                lineStyle="solid"
                lineColor="rgb(35 116 65)"
                label={<OfficialCard official={officials[0]} />}
              >
                {/* Pelaksana Teknis */}
                <TreeNode label={<OfficialCard official={officials[2]} />} />
                <TreeNode label={<OfficialCard official={officials[3]} />} />
                <TreeNode label={<OfficialCard official={officials[4]} />} />

                {/* Sekretaris Desa */}
                <TreeNode label={<OfficialCard official={officials[1]} />} />
              </Tree>
            </div>
          </div>
        </div>

        {/* Mobile Organization List */}
        <div className="lg:hidden space-y-6">
          {officials.map((official) => (
            <MobileOfficialCard key={official.id} official={official} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VillageOfficials;