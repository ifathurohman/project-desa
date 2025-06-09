import React from 'react';
import PageHeader from '../../components/ui/PageHeader';
import { motion } from 'framer-motion';
import { Users, FileText, Calendar, Award, CheckCircle, Clock, MessageCircle } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

interface BpdMember {
  id: number;
  name: string;
  position: string;
  image: string;
  period: string;
  education: string;
  background: string;
  achievements: string[];
}

interface MeetingData {
  month: string;
  count: number;
  color: string;
}

interface DecisionData {
  category: string;
  count: number;
  color: string;
}

const bpdMembers: BpdMember[] = [
  {
    id: 1,
    name: 'H. Dadang Hermawan',
    position: 'Ketua BPD',
    image: 'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    period: '2020-2026',
    education: 'S1 Ilmu Pemerintahan',
    background: 'Mantan Kepala Desa periode 2008-2014, aktif dalam organisasi kemasyarakatan sejak 2000.',
    achievements: [
      'Menginisiasi program transparansi anggaran desa',
      'Memimpin perumusan 8 Peraturan Desa',
      'Membangun kemitraan dengan 3 perguruan tinggi untuk program pemberdayaan'
    ]
  },
  {
    id: 2,
    name: 'Ibu Yanti Sumarni',
    position: 'Wakil Ketua BPD',
    image: 'https://images.pexels.com/photos/5615665/pexels-photo-5615665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    period: '2020-2026',
    education: 'D3 Manajemen',
    background: 'Aktivis perempuan desa, mantan ketua PKK, pengusaha UMKM produk olahan pertanian.',
    achievements: [
      'Memprakarsai program pemberdayaan perempuan desa',
      'Mengadvokasi alokasi anggaran untuk kesehatan ibu dan anak',
      'Menginisiasi forum dialog rutin antara BPD dan masyarakat'
    ]
  },
  {
    id: 3,
    name: 'Bapak Ahmad Fauzi',
    position: 'Sekretaris BPD',
    image: 'https://images.pexels.com/photos/8127035/pexels-photo-8127035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    period: '2020-2026',
    education: 'S1 Administrasi Publik',
    background: 'Mantan pegawai kecamatan, konsultan program pemberdayaan masyarakat desa.',
    achievements: [
      'Menyusun sistem dokumentasi dan arsip BPD',
      'Mengembangkan mekanisme pengaduan masyarakat',
      'Mengelola publikasi kegiatan BPD melalui media sosial'
    ]
  },
  {
    id: 4,
    name: 'Bapak Ujang Suherlan',
    position: 'Anggota BPD',
    image: 'https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    period: '2020-2026',
    education: 'SMA',
    background: 'Tokoh pemuda desa, ketua karang taruna 2015-2020, penggiat lingkungan.',
    achievements: [
      'Mengadvokasi program pengelolaan sampah desa',
      'Menginisiasi pembentukan BUMDes bidang ekowisata',
      'Mengorganisir forum kepemudaan desa'
    ]
  },
  {
    id: 5,
    name: 'Ibu Siti Aminah',
    position: 'Anggota BPD',
    image: 'https://images.pexels.com/photos/6000065/pexels-photo-6000065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    period: '2020-2026',
    education: 'S1 Pendidikan',
    background: 'Guru sekolah dasar, aktif dalam kegiatan sosial dan keagamaan di desa.',
    achievements: [
      'Mengadvokasi peningkatan fasilitas pendidikan desa',
      'Menginisiasi program beasiswa untuk siswa kurang mampu',
      'Mengembangkan perpustakaan desa'
    ]
  },
  {
    id: 6,
    name: 'Bapak Dedi Kuswandi',
    position: 'Anggota BPD',
    image: 'https://images.pexels.com/photos/8127554/pexels-photo-8127554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    period: '2020-2026',
    education: 'D3 Teknik Sipil',
    background: 'Kontraktor lokal, mantan ketua RT, aktif dalam kegiatan pembangunan infrastruktur desa.',
    achievements: [
      'Mengawasi proyek infrastruktur desa',
      'Menginisiasi program pemeliharaan jalan desa',
      'Mengadvokasi pembangunan sistem irigasi untuk pertanian'
    ]
  },
  {
    id: 7,
    name: 'Bapak Asep Saepudin',
    position: 'Anggota BPD',
    image: 'https://images.pexels.com/photos/8127696/pexels-photo-8127696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    period: '2020-2026',
    education: 'SMA',
    background: 'Petani, ketua kelompok tani, aktif dalam kegiatan pemberdayaan petani.',
    achievements: [
      'Mengadvokasi program bantuan untuk petani',
      'Menginisiasi koperasi pertanian desa',
      'Mengembangkan program pelatihan pertanian organik'
    ]
  }
];

// Data for charts
const meetingData: MeetingData[] = [
  { month: 'Jan', count: 3, color: '#4F46E5' },
  { month: 'Feb', count: 2, color: '#4F46E5' },
  { month: 'Mar', count: 4, color: '#4F46E5' },
  { month: 'Apr', count: 3, color: '#4F46E5' },
  { month: 'Mei', count: 2, color: '#4F46E5' },
  { month: 'Jun', count: 5, color: '#4F46E5' },
  { month: 'Jul', count: 3, color: '#4F46E5' },
  { month: 'Agu', count: 2, color: '#4F46E5' },
  { month: 'Sep', count: 4, color: '#4F46E5' },
  { month: 'Okt', count: 3, color: '#4F46E5' },
  { month: 'Nov', count: 3, color: '#4F46E5' },
  { month: 'Des', count: 2, color: '#4F46E5' },
];

const decisionData: DecisionData[] = [
  { category: 'Pembangunan', count: 12, color: '#4F46E5' },
  { category: 'Anggaran', count: 8, color: '#10B981' },
  { category: 'Sosial', count: 6, color: '#F59E0B' },
  { category: 'Kesehatan', count: 5, color: '#EC4899' },
  { category: 'Pendidikan', count: 7, color: '#6366F1' },
  { category: 'Lainnya', count: 4, color: '#8B5CF6' },
];

const BpdPage: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="Badan Permusyawaratan Desa" 
        description="Lembaga Perwakilan Masyarakat Desa Sindangjaya Gununghalu"
        image="https://images.pexels.com/photos/7648047/pexels-photo-7648047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Tentang BPD Sindangjaya</h2>
            <p className="text-gray-600 mb-6">
              Badan Permusyawaratan Desa (BPD) adalah lembaga yang melaksanakan fungsi pemerintahan yang anggotanya merupakan wakil dari penduduk desa berdasarkan keterwakilan wilayah dan ditetapkan secara demokratis.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 text-primary-600">Tugas dan Fungsi BPD</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="inline-block bg-primary-100 text-primary-600 p-1 rounded-full mr-2 mt-1">
                      <CheckCircle size={16} />
                    </span>
                    <p className="text-gray-700">Membahas dan menyepakati Rancangan Peraturan Desa bersama Kepala Desa</p>
                  </div>
                  <div className="flex items-start">
                    <span className="inline-block bg-primary-100 text-primary-600 p-1 rounded-full mr-2 mt-1">
                      <CheckCircle size={16} />
                    </span>
                    <p className="text-gray-700">Menampung dan menyalurkan aspirasi masyarakat desa</p>
                  </div>
                  <div className="flex items-start">
                    <span className="inline-block bg-primary-100 text-primary-600 p-1 rounded-full mr-2 mt-1">
                      <CheckCircle size={16} />
                    </span>
                    <p className="text-gray-700">Melakukan pengawasan kinerja Kepala Desa</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="inline-block bg-primary-100 text-primary-600 p-1 rounded-full mr-2 mt-1">
                      <CheckCircle size={16} />
                    </span>
                    <p className="text-gray-700">Mengusulkan pengangkatan dan pemberhentian Kepala Desa</p>
                  </div>
                  <div className="flex items-start">
                    <span className="inline-block bg-primary-100 text-primary-600 p-1 rounded-full mr-2 mt-1">
                      <CheckCircle size={16} />
                    </span>
                    <p className="text-gray-700">Membentuk panitia pemilihan Kepala Desa</p>
                  </div>
                  <div className="flex items-start">
                    <span className="inline-block bg-primary-100 text-primary-600 p-1 rounded-full mr-2 mt-1">
                      <CheckCircle size={16} />
                    </span>
                    <p className="text-gray-700">Menyelenggarakan musyawarah desa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Meeting Frequency Chart */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-6 text-center">Frekuensi Rapat BPD 2023</h3>
              
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={meetingData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`${value} kali`, 'Jumlah Rapat']} />
                    <Bar dataKey="count" name="Jumlah Rapat">
                      {meetingData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 text-center text-gray-600 text-sm">
                <div className="flex items-center justify-center">
                  <Clock size={16} className="mr-2 text-primary-600" />
                  <span>Total 36 rapat sepanjang tahun 2023</span>
                </div>
              </div>
            </motion.div>

            {/* Decision Categories Chart */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-6 text-center">Kategori Keputusan BPD 2023</h3>
              
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={decisionData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      dataKey="count"
                      nameKey="category"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      labelLine={false}
                    >
                      {decisionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value} keputusan`, 'Jumlah']} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 text-center text-gray-600 text-sm">
                <div className="flex items-center justify-center">
                  <FileText size={16} className="mr-2 text-primary-600" />
                  <span>Total 42 keputusan dihasilkan sepanjang tahun 2023</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* BPD Members */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-center mb-8">Anggota BPD Periode 2020-2026</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bpdMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow h-full flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <h3 className="text-xl font-bold text-white">{member.name}</h3>
                      <p className="text-white/90">{member.position}</p>
                    </div>
                  </div>
                  
                  <div className="p-5 flex-grow flex flex-col">
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2 text-primary-600" />
                        <span className="text-gray-700">Periode: {member.period}</span>
                      </div>
                      <div className="flex items-center">
                        <Users size={16} className="mr-2 text-primary-600" />
                        <span className="text-gray-700">Pendidikan: {member.education}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{member.background}</p>
                    
                    <div className="mt-auto">
                      <h4 className="font-medium mb-2 flex items-center text-gray-800">
                        <Award size={16} className="mr-2 text-primary-600" />
                        Capaian
                      </h4>
                      <ul className="space-y-1">
                        {member.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-gray-600 flex items-start">
                            <span className="text-primary-600 mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container">
          <div className="mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Mekanisme Aspirasi Masyarakat</h2>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                  className="flex flex-col items-center text-center p-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-primary-100 text-primary-600 p-4 rounded-full mb-4">
                    <MessageCircle size={24} />
                  </div>
                  <h3 className="font-semibold mb-2">Sampaikan Aspirasi</h3>
                  <p className="text-gray-600 text-sm">Masyarakat dapat menyampaikan aspirasi melalui forum desa, kotak saran, atau langsung kepada anggota BPD</p>
                </motion.div>
                
                <motion.div
                  className="flex flex-col items-center text-center p-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-primary-100 text-primary-600 p-4 rounded-full mb-4">
                    <Users size={24} />
                  </div>
                  <h3 className="font-semibold mb-2">Pembahasan BPD</h3>
                  <p className="text-gray-600 text-sm">BPD membahas aspirasi dalam rapat internal dan menentukan tindak lanjut yang diperlukan</p>
                </motion.div>
                
                <motion.div
                  className="flex flex-col items-center text-center p-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-primary-100 text-primary-600 p-4 rounded-full mb-4">
                    <FileText size={24} />
                  </div>
                  <h3 className="font-semibold mb-2">Tindak Lanjut</h3>
                  <p className="text-gray-600 text-sm">Hasil pembahasan diteruskan kepada Kepala Desa atau instansi terkait untuk ditindaklanjuti</p>
                </motion.div>
              </div>
            </div>

            <div className="bg-primary-50 p-6 rounded-lg border border-primary-100">
              <h3 className="text-xl font-semibold mb-4 text-center text-primary-700">Jadwal Musyawarah Desa 2024</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-primary-100">
                      <th className="py-2 px-4 text-left text-primary-800">Bulan</th>
                      <th className="py-2 px-4 text-left text-primary-800">Agenda</th>
                      <th className="py-2 px-4 text-left text-primary-800">Peserta</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-primary-100">
                    <tr className="hover:bg-primary-50/50">
                      <td className="py-3 px-4">Januari</td>
                      <td className="py-3 px-4">Evaluasi Program Desa 2023</td>
                      <td className="py-3 px-4">BPD, Perangkat Desa, Tokoh Masyarakat</td>
                    </tr>
                    <tr className="hover:bg-primary-50/50">
                      <td className="py-3 px-4">Maret</td>
                      <td className="py-3 px-4">Pembahasan APBDes Perubahan</td>
                      <td className="py-3 px-4">BPD, Perangkat Desa, Perwakilan Masyarakat</td>
                    </tr>
                    <tr className="hover:bg-primary-50/50">
                      <td className="py-3 px-4">Juni</td>
                      <td className="py-3 px-4">Evaluasi Semester I dan Rencana Semester II</td>
                      <td className="py-3 px-4">BPD, Perangkat Desa, Karang Taruna, PKK</td>
                    </tr>
                    <tr className="hover:bg-primary-50/50">
                      <td className="py-3 px-4">September</td>
                      <td className="py-3 px-4">Pembahasan Rencana Pembangunan Desa 2025</td>
                      <td className="py-3 px-4">BPD, Perangkat Desa, Seluruh Elemen Masyarakat</td>
                    </tr>
                    <tr className="hover:bg-primary-50/50">
                      <td className="py-3 px-4">November</td>
                      <td className="py-3 px-4">Pembahasan APBDes 2025</td>
                      <td className="py-3 px-4">BPD, Perangkat Desa, Perwakilan Masyarakat</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BpdPage;