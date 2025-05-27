import React from 'react';
import { motion } from 'framer-motion';
import { Tree, TreeNode } from 'react-organizational-chart';

interface Official {
  id: number;
  name: string;
  position: string;
  division?: string;
  image: string;
}

const officials: Official[] = [
  {
    id: 1,
    name: 'Bapak Suparman',
    position: 'Kepala Desa',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 2,
    name: 'Ibu Suryani',
    position: 'Sekretaris Desa',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    name: 'Bapak Ahmad',
    position: 'Kepala Seksi Pemerintahan',
    division: 'Pelaksana Teknis',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 4,
    name: 'Ibu Siti',
    position: 'Kepala Seksi Kesejahteraan',
    division: 'Pelaksana Teknis',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 5,
    name: 'Bapak Rahmat',
    position: 'Kepala Seksi Pelayanan',
    division: 'Pelaksana Teknis',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 6,
    name: 'Ibu Rina',
    position: 'Kaur Umum',
    division: 'Sekretariat Desa',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 7,
    name: 'Bapak Dedi',
    position: 'Kaur Keuangan',
    division: 'Sekretariat Desa',
    image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 8,
    name: 'Ibu Maya',
    position: 'Kaur Perencanaan',
    division: 'Sekretariat Desa',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 9,
    name: 'Ibu Maya',
    position: 'Staff Kaur Keuangan',
    division: 'Sekretariat Desa',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 10,
    name: 'Ibu Maya',
    position: 'Kepala Wilayah Dusun I',
    division: 'Kepala Wilayah',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 11,
    name: 'Ibu Maya',
    position: 'Kepala Wilayah Dusun II',
    division: 'Kepala Wilayah',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 12,
    name: 'Ibu Maya',
    position: 'Kepala Wilayah Dusun III',
    division: 'Kepala Wilayah',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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

const VillageOfficials: React.FC = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-8"
        >
          <h2 className="section-title">Struktur Pemerintahan Desa</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Mengenal para pemimpin yang mengabdi untuk kemajuan Desa Sindangjaya
          </p>
        </motion.div>

        <div className="flex justify-center pb-4 mx-auto">
          <div className="min-w-fit p-4 mx-auto">
            <Tree
              lineWidth="1px"
              lineStyle="solid"
              lineColor="rgb(35 116 65)"
              // lineBorderRadius="12px"
              label={<OfficialCard official={officials[0]} />}
            >
              {/* Pelaksana Teknis */}
              <TreeNode label={<OfficialCard official={officials[2]} />} />
              <TreeNode label={<OfficialCard official={officials[3]} />} />
              <TreeNode label={<OfficialCard official={officials[4]} />} />

              {/* Wilayah Dusun */}
              <TreeNode label=''>
                <Tree
                  lineWidth="1px"
                  lineStyle="solid"
                  lineColor="rgb(35 116 65)"
                  // lineBorderRadius="12px"
                  lineHeight="80px"
                  label=''
                >
                  <TreeNode label={<OfficialCard official={officials[9]} />} />
                  <TreeNode label={<OfficialCard official={officials[10]} />} />
                  <TreeNode label={<OfficialCard official={officials[11]} />} />
                </Tree>
              </TreeNode>

              {/* Sekretaris Desa */}
              <TreeNode label={<OfficialCard official={officials[1]} />}>
                <TreeNode label={<OfficialCard official={officials[5]} />} />
                <TreeNode label={<OfficialCard official={officials[6]} />}>
                  <TreeNode label={<OfficialCard official={officials[8]} />} />
                </TreeNode>
                <TreeNode label={<OfficialCard official={officials[7]} />} />
              </TreeNode>
            </Tree>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VillageOfficials;