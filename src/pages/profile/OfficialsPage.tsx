import React from 'react';
import PageHeader from '../../components/ui/PageHeader';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

interface Official {
  id: number;
  name: string;
  position: string;
  image: string;
  contact: string;
  email: string;
  address: string;
  education: string;
  experience: string[];
}

const officials: Official[] = [
  {
    id: 1,
    name: 'Bapak Suparman',
    position: 'Kepala Desa',
    image: 'https://images.pexels.com/photos/5439455/pexels-photo-5439455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    contact: '081234567890',
    email: 'kades@desakersik.desa.id',
    address: 'Jl. Desa Kersik No. 1',
    education: 'S1 Administrasi Publik',
    experience: [
      'Kepala Desa Periode 2019-2024',
      'Ketua BPD 2014-2019',
      'Ketua Karang Taruna 2010-2014'
    ]
  },
  {
    id: 2,
    name: 'Ibu Suryani',
    position: 'Sekretaris Desa',
    image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    contact: '082345678901',
    email: 'sekdes@desakersik.desa.id',
    address: 'Jl. Desa Kersik No. 15',
    education: 'S1 Manajemen',
    experience: [
      'Sekretaris Desa 2019-sekarang',
      'Staff Administrasi Desa 2015-2019'
    ]
  },
  {
    id: 3,
    name: 'Bapak Rahmat',
    position: 'Kepala Urusan Keuangan',
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    contact: '083456789012',
    email: 'keuangan@desakersik.desa.id',
    address: 'Jl. Desa Kersik No. 23',
    education: 'S1 Akuntansi',
    experience: [
      'Kaur Keuangan 2019-sekarang',
      'Staff Keuangan BUMDes 2016-2019'
    ]
  },
  {
    id: 4,
    name: 'Ibu Indah',
    position: 'Kepala Seksi Pelayanan',
    image: 'https://images.pexels.com/photos/3810756/pexels-photo-3810756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    contact: '084567890123',
    email: 'pelayanan@desakersik.desa.id',
    address: 'Jl. Desa Kersik No. 45',
    education: 'D3 Administrasi Publik',
    experience: [
      'Kasi Pelayanan 2019-sekarang',
      'Staff Pelayanan 2017-2019'
    ]
  }
];

const OfficialsPage: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="Perangkat Desa" 
        description="Profil lengkap perangkat Desa Kersik periode 2024-2029"
        image="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-title">Perangkat Desa Kersik</h2>
            <p className="text-gray-600">
              Mengenal lebih dekat para pemimpin yang mengabdi untuk kemajuan Desa Kersik
            </p>
          </div>

          <div className="space-y-8">
            {officials.map((official, index) => (
              <motion.div
                key={official.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <div className="relative h-64 md:h-full">
                      <img
                        src={official.image}
                        alt={official.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold mb-1">{official.name}</h3>
                      <p className="text-primary-600 font-medium">{official.position}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-medium mb-2">Kontak</h4>
                        <div className="space-y-2">
                          <a href={`tel:${official.contact}`} className="flex items-center text-gray-600 hover:text-primary-600">
                            <Phone size={16} className="mr-2" />
                            {official.contact}
                          </a>
                          <a href={`mailto:${official.email}`} className="flex items-center text-gray-600 hover:text-primary-600">
                            <Mail size={16} className="mr-2" />
                            {official.email}
                          </a>
                          <div className="flex items-start text-gray-600">
                            <MapPin size={16} className="mr-2 mt-1" />
                            {official.address}
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Pendidikan</h4>
                        <p className="text-gray-600">{official.education}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Pengalaman</h4>
                      <ul className="list-disc list-inside text-gray-600">
                        {official.experience.map((exp, idx) => (
                          <li key={idx}>{exp}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OfficialsPage;