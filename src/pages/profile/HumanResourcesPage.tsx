import React from 'react';
import PageHeader from '../../components/ui/PageHeader';
import { motion } from 'framer-motion';
import { Users, GraduationCap, Briefcase, TrendingUp, Award, BarChart2, PieChart as PieChartIcon, Activity } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid, LineChart, Line } from 'recharts';

interface StaffMember {
  id: number;
  name: string;
  position: string;
  image: string;
  contact: string;
  email: string;
  address: string;
  education: string;
  experience: string[];
  skills: string[];
  department: string;
  gender: string;
  educationLevel: string;
  yearsOfService: number;
}

const staffMembers: StaffMember[] = [
  {
    id: 1,
    name: 'Bapak Asep Saepudin',
    position: 'Kepala Desa',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    contact: '081234567890',
    email: 'kades@sindangjaya.desa.id',
    address: 'Dusun Sindangjaya RT 01/01',
    education: 'S1 Administrasi Publik',
    experience: [
      'Kepala Desa (2020-sekarang)',
      'Sekretaris Desa (2015-2020)',
      'Ketua Karang Taruna (2010-2015)'
    ],
    skills: [
      'Kepemimpinan',
      'Manajemen Organisasi',
      'Komunikasi Publik',
      'Perencanaan Strategis'
    ],
    department: 'Pemerintahan',
    gender: 'Laki-laki',
    educationLevel: 'S1',
    yearsOfService: 12
  },
  {
    id: 2,
    name: 'Ibu Rina Marlina',
    position: 'Sekretaris Desa',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    contact: '082345678901',
    email: 'sekdes@sindangjaya.desa.id',
    address: 'Dusun Gununghalu RT 02/03',
    education: 'S1 Ilmu Administrasi',
    experience: [
      'Sekretaris Desa (2020-sekarang)',
      'Kaur Umum (2016-2020)',
      'Staff Administrasi Kecamatan (2012-2016)'
    ],
    skills: [
      'Administrasi Perkantoran',
      'Manajemen Arsip',
      'Komunikasi Organisasi',
      'Microsoft Office'
    ],
    department: 'Sekretariat',
    gender: 'Perempuan',
    educationLevel: 'S1',
    yearsOfService: 8
  },
  {
    id: 3,
    name: 'Bapak Dedi Supriadi',
    position: 'Kepala Urusan Keuangan',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    contact: '083456789012',
    email: 'keuangan@sindangjaya.desa.id',
    address: 'Dusun Sindangjaya RT 03/02',
    education: 'D3 Akuntansi',
    experience: [
      'Kaur Keuangan (2018-sekarang)',
      'Staff Keuangan BUMDes (2015-2018)',
      'Administrasi Koperasi Desa (2012-2015)'
    ],
    skills: [
      'Akuntansi Dasar',
      'Pengelolaan Anggaran',
      'Pelaporan Keuangan',
      'Aplikasi Siskeudes'
    ],
    department: 'Keuangan',
    gender: 'Laki-laki',
    educationLevel: 'D3',
    yearsOfService: 9
  },
  {
    id: 4,
    name: 'Bapak Ujang Koswara',
    position: 'Kepala Seksi Pemerintahan',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    contact: '084567890123',
    email: 'pemerintahan@sindangjaya.desa.id',
    address: 'Dusun Gununghalu RT 04/02',
    education: 'SMA',
    experience: [
      'Kasi Pemerintahan (2019-sekarang)',
      'Ketua RT 04 (2015-2019)',
      'Anggota BPD (2010-2015)'
    ],
    skills: [
      'Administrasi Kependudukan',
      'Pengelolaan Aset Desa',
      'Koordinasi Lintas Lembaga',
      'Mediasi Konflik'
    ],
    department: 'Pemerintahan',
    gender: 'Laki-laki',
    educationLevel: 'SMA',
    yearsOfService: 10
  },
  {
    id: 5,
    name: 'Ibu Siti Nurhasanah',
    position: 'Kepala Seksi Kesejahteraan',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    contact: '085678901234',
    email: 'kesra@sindangjaya.desa.id',
    address: 'Dusun Sindangjaya RT 02/01',
    education: 'S1 Kesejahteraan Sosial',
    experience: [
      'Kasi Kesejahteraan (2020-sekarang)',
      'Kader PKK (2015-2020)',
      'Guru PAUD (2012-2015)'
    ],
    skills: [
      'Pengembangan Program Sosial',
      'Koordinasi Bantuan Sosial',
      'Pemberdayaan Masyarakat',
      'Pendampingan Kelompok Rentan'
    ],
    department: 'Kesejahteraan',
    gender: 'Perempuan',
    educationLevel: 'S1',
    yearsOfService: 7
  },
  {
    id: 6,
    name: 'Bapak Ahmad Hidayat',
    position: 'Kepala Seksi Pelayanan',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    contact: '086789012345',
    email: 'pelayanan@sindangjaya.desa.id',
    address: 'Dusun Gununghalu RT 01/03',
    education: 'D3 Manajemen',
    experience: [
      'Kasi Pelayanan (2021-sekarang)',
      'Staff Kecamatan (2016-2021)',
      'Relawan PMI (2014-2016)'
    ],
    skills: [
      'Pelayanan Prima',
      'Administrasi Publik',
      'Manajemen Keluhan',
      'Komunikasi Efektif'
    ],
    department: 'Pelayanan',
    gender: 'Laki-laki',
    educationLevel: 'D3',
    yearsOfService: 6
  }
];

// Prepare data for charts
const departmentData = [
  { name: 'Pemerintahan', value: staffMembers.filter(m => m.department === 'Pemerintahan').length, color: '#4F46E5' },
  { name: 'Sekretariat', value: staffMembers.filter(m => m.department === 'Sekretariat').length, color: '#10B981' },
  { name: 'Keuangan', value: staffMembers.filter(m => m.department === 'Keuangan').length, color: '#F59E0B' },
  { name: 'Kesejahteraan', value: staffMembers.filter(m => m.department === 'Kesejahteraan').length, color: '#EC4899' },
  { name: 'Pelayanan', value: staffMembers.filter(m => m.department === 'Pelayanan').length, color: '#6366F1' },
];

const educationData = [
  { name: 'S1', value: staffMembers.filter(m => m.educationLevel === 'S1').length, color: '#10B981' },
  { name: 'D3', value: staffMembers.filter(m => m.educationLevel === 'D3').length, color: '#F59E0B' },
  { name: 'SMA', value: staffMembers.filter(m => m.educationLevel === 'SMA').length, color: '#6366F1' },
];

const experienceData = staffMembers.map(staff => ({
  name: staff.name.split(' ')[1], // Just use the first name for brevity
  years: staff.yearsOfService,
  color: staff.gender === 'Laki-laki' ? '#4F46E5' : '#EC4899'
}));

interface EducationData {
  name: string;
  value: number;
  color: string;
}

interface OccupationData {
  name: string;
  value: number;
  color: string;
}

interface AgeData {
  ageGroup: string;
  male: number;
  female: number;
}

interface SkillData {
  name: string;
  value: number;
  color: string;
}

interface TrainingProgram {
  name: string;
  description: string;
  participants: number;
  duration: string;
  status: 'Aktif' | 'Selesai' | 'Direncanakan';
  image: string;
}

interface Achievement {
  title: string;
  year: string;
  description: string;
  icon: React.ReactNode;
}

const populationEducationData: EducationData[] = [
  { name: 'SD', value: 25, color: '#F59E0B' },
  { name: 'SMP', value: 30, color: '#3B82F6' },
  { name: 'SMA/SMK', value: 35, color: '#10B981' },
  { name: 'Diploma', value: 5, color: '#8B5CF6' },
  { name: 'Sarjana', value: 4, color: '#EC4899' },
  { name: 'Pascasarjana', value: 1, color: '#6366F1' },
];

const occupationData: OccupationData[] = [
  { name: 'Petani', value: 40, color: '#10B981' },
  { name: 'Pedagang', value: 15, color: '#F59E0B' },
  { name: 'PNS', value: 5, color: '#3B82F6' },
  { name: 'Swasta', value: 20, color: '#8B5CF6' },
  { name: 'Wirausaha', value: 10, color: '#EC4899' },
  { name: 'Lainnya', value: 10, color: '#6366F1' },
];

const ageData: AgeData[] = [
  { ageGroup: '0-14', male: 120, female: 115 },
  { ageGroup: '15-24', male: 100, female: 105 },
  { ageGroup: '25-34', male: 85, female: 90 },
  { ageGroup: '35-44', male: 75, female: 80 },
  { ageGroup: '45-54', male: 60, female: 65 },
  { ageGroup: '55-64', male: 45, female: 50 },
  { ageGroup: '65+', male: 30, female: 35 },
];

const skillData: SkillData[] = [
  { name: 'Pertanian', value: 85, color: '#10B981' },
  { name: 'Kerajinan', value: 65, color: '#F59E0B' },
  { name: 'Digital', value: 30, color: '#3B82F6' },
  { name: 'Kuliner', value: 70, color: '#8B5CF6' },
  { name: 'Konstruksi', value: 50, color: '#EC4899' },
];

const trainingPrograms: TrainingProgram[] = [
  {
    name: 'Pelatihan Pertanian Organik',
    description: 'Program pelatihan teknik pertanian organik untuk meningkatkan kualitas hasil pertanian dan mengurangi ketergantungan pada bahan kimia.',
    participants: 45,
    duration: '3 bulan',
    status: 'Aktif',
    image: 'https://images.pexels.com/photos/2286895/pexels-photo-2286895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    name: 'Kursus Keterampilan Digital',
    description: 'Pelatihan dasar komputer, internet, dan media sosial untuk membantu warga memanfaatkan teknologi digital dalam kehidupan sehari-hari dan usaha.',
    participants: 30,
    duration: '2 bulan',
    status: 'Selesai',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    name: 'Pelatihan Kerajinan Bambu',
    description: 'Program pengembangan keterampilan pembuatan kerajinan dari bambu untuk meningkatkan ekonomi kreatif desa.',
    participants: 25,
    duration: '1 bulan',
    status: 'Selesai',
    image: 'https://images.pexels.com/photos/5764100/pexels-photo-5764100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    name: 'Kursus Bahasa Inggris Dasar',
    description: 'Pelatihan bahasa Inggris dasar untuk mempersiapkan warga dalam menghadapi peluang pariwisata dan kerja sama internasional.',
    participants: 20,
    duration: '6 bulan',
    status: 'Direncanakan',
    image: 'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const achievements: Achievement[] = [
  {
    title: 'Desa Terbaik Tingkat Kabupaten',
    year: '2023',
    description: 'Penghargaan sebagai desa dengan pengelolaan sumber daya manusia terbaik di tingkat kabupaten.',
    icon: <Award size={24} />
  },
  {
    title: 'Juara Lomba Inovasi Desa',
    year: '2022',
    description: 'Juara 1 dalam lomba inovasi desa dengan program pemberdayaan pemuda melalui teknologi digital.',
    icon: <TrendingUp size={24} />
  },
  {
    title: 'Desa Percontohan Program Pendidikan',
    year: '2021',
    description: 'Dipilih sebagai desa percontohan untuk program peningkatan kualitas pendidikan di daerah pedesaan.',
    icon: <GraduationCap size={24} />
  }
];

const HumanResourcesPage: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="Sumber Daya Manusia" 
        description="Profil dan Pengembangan Sumber Daya Manusia Desa Sindangjaya Gununghalu"
        image="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Profil Sumber Daya Manusia</h2>
            <p className="text-gray-600">
              Desa Sindangjaya Gununghalu memiliki populasi sekitar 2,500 jiwa dengan beragam latar belakang pendidikan, pekerjaan, dan keterampilan. Pengembangan sumber daya manusia menjadi fokus utama untuk meningkatkan kesejahteraan dan kemajuan desa.
            </p>
          </div>

          {/* Demographics Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Education Distribution Chart */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Tingkat Pendidikan</h3>
                <span className="bg-primary-100 text-primary-600 p-2 rounded-full">
                  <GraduationCap size={20} />
                </span>
              </div>
              
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={populationEducationData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      dataKey="value"
                      nameKey="name"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      labelLine={false}
                    >
                      {populationEducationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value}%`, 'Persentase']} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Occupation Distribution Chart */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Jenis Pekerjaan</h3>
                <span className="bg-primary-100 text-primary-600 p-2 rounded-full">
                  <Briefcase size={20} />
                </span>
              </div>
              
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={occupationData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      dataKey="value"
                      nameKey="name"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      labelLine={false}
                    >
                      {occupationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value}%`, 'Persentase']} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>

          {/* Age Distribution Chart */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Distribusi Usia dan Gender</h3>
              <span className="bg-primary-100 text-primary-600 p-2 rounded-full">
                <Users size={20} />
              </span>
            </div>
            
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={ageData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  barGap={0}
                  barCategoryGap="10%"
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="ageGroup" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`${value} orang`, '']} />
                  <Legend />
                  <Bar dataKey="male" name="Laki-laki" fill="#3B82F6" />
                  <Bar dataKey="female" name="Perempuan" fill="#EC4899" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 text-center text-gray-600 text-sm">
              <div className="flex items-center justify-center">
                <BarChart2 size={16} className="mr-2 text-primary-600" />
                <span>Total populasi: 2,500 jiwa</span>
              </div>
            </div>
          </motion.div>

          {/* Skills Chart */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Keterampilan Masyarakat</h3>
              <span className="bg-primary-100 text-primary-600 p-2 rounded-full">
                <Activity size={20} />
              </span>
            </div>
            
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={skillData}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis dataKey="name" type="category" width={100} />
                  <Tooltip formatter={(value) => [`${value}%`, 'Tingkat Keterampilan']} />
                  <Bar dataKey="value" name="Persentase">
                    {skillData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Training Programs Section */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Program Pelatihan dan Pengembangan</h2>
            <p className="text-gray-600">
              Berbagai program pelatihan dan pengembangan keterampilan yang diselenggarakan untuk meningkatkan kapasitas sumber daya manusia di Desa Sindangjaya Gununghalu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trainingPrograms.map((program, index) => (
              <motion.div
                key={program.name}
                className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow h-full flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-0 right-0 m-2">
                    <span className={`
                      inline-block px-2 py-1 text-xs font-medium rounded-full
                      ${program.status === 'Aktif' ? 'bg-green-100 text-green-800' : ''}
                      ${program.status === 'Selesai' ? 'bg-blue-100 text-blue-800' : ''}
                      ${program.status === 'Direncanakan' ? 'bg-yellow-100 text-yellow-800' : ''}
                    `}>
                      {program.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-5 flex-grow flex flex-col">
                  <h4 className="text-lg font-semibold mb-2">{program.name}</h4>
                  
                  <p className="text-gray-600 mb-4 text-sm flex-grow">{program.description}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center">
                      <span className="text-primary-600 font-medium">Peserta:</span>
                      <span className="ml-2 text-gray-700">{program.participants} orang</span>
                    </div>
                    
                    <div className="flex items-center">
                      <span className="text-primary-600 font-medium">Durasi:</span>
                      <span className="ml-2 text-gray-700">{program.duration}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Prestasi dan Pencapaian</h2>
            <p className="text-gray-600">
              Berbagai prestasi dan pencapaian yang telah diraih oleh Desa Sindangjaya Gununghalu dalam pengembangan sumber daya manusia.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 ml-4 md:ml-0 border-r-2 md:border-r-0 md:border-l-2 border-primary-200 h-full transform md:translate-x-0 translate-x-0"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                {achievements.map((achievement, index) => (
                  <motion.div 
                    key={achievement.title}
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-1/2 ml-4 md:ml-0 w-8 h-8 bg-primary-100 border-4 border-primary-200 rounded-full transform md:-translate-x-1/2 -translate-x-1/2 flex items-center justify-center">
                      <div className="text-primary-600">
                        {achievement.icon}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8 md:pl-8 pr-8' : 'md:ml-auto md:pl-8 md:pr-8'} md:w-1/2 bg-white p-5 rounded-lg shadow-sm border border-gray-100`}>
                      <div className="flex items-center mb-2">
                        <h4 className="text-lg font-semibold">{achievement.title}</h4>
                        <span className="ml-auto bg-primary-100 text-primary-600 px-2 py-1 text-xs font-medium rounded">
                          {achievement.year}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">{achievement.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Plan Section */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Rencana Pengembangan SDM</h2>
            <p className="text-gray-600">
              Rencana strategis pengembangan sumber daya manusia Desa Sindangjaya Gununghalu untuk periode 2024-2026.
            </p>
          </div>

          <div className="mx-auto">
            <motion.div
              className="bg-primary-50 p-6 rounded-lg border border-primary-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4 text-center text-primary-700">Program Prioritas 2024-2026</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-primary-100">
                      <th className="py-2 px-4 text-left text-primary-800">Program</th>
                      <th className="py-2 px-4 text-left text-primary-800">Target</th>
                      <th className="py-2 px-4 text-left text-primary-800">Anggaran</th>
                      <th className="py-2 px-4 text-left text-primary-800">Tahun</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-primary-100">
                    <tr className="hover:bg-primary-50/50">
                      <td className="py-3 px-4">Beasiswa Pendidikan Tinggi</td>
                      <td className="py-3 px-4">25 siswa</td>
                      <td className="py-3 px-4">Rp 250.000.000</td>
                      <td className="py-3 px-4">2024</td>
                    </tr>
                    <tr className="hover:bg-primary-50/50">
                      <td className="py-3 px-4">Pelatihan Kewirausahaan Digital</td>
                      <td className="py-3 px-4">50 peserta</td>
                      <td className="py-3 px-4">Rp 150.000.000</td>
                      <td className="py-3 px-4">2024</td>
                    </tr>
                    <tr className="hover:bg-primary-50/50">
                      <td className="py-3 px-4">Pusat Pelatihan Kejuruan</td>
                      <td className="py-3 px-4">1 unit</td>
                      <td className="py-3 px-4">Rp 500.000.000</td>
                      <td className="py-3 px-4">2025</td>
                    </tr>
                    <tr className="hover:bg-primary-50/50">
                      <td className="py-3 px-4">Program Magang Industri</td>
                      <td className="py-3 px-4">30 peserta</td>
                      <td className="py-3 px-4">Rp 200.000.000</td>
                      <td className="py-3 px-4">2025</td>
                    </tr>
                    <tr className="hover:bg-primary-50/50">
                      <td className="py-3 px-4">Inkubator Bisnis Desa</td>
                      <td className="py-3 px-4">10 startup</td>
                      <td className="py-3 px-4">Rp 300.000.000</td>
                      <td className="py-3 px-4">2026</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <span className="inline-block bg-primary-100 text-primary-600 p-2 rounded-full mr-3">
                    <GraduationCap size={20} />
                  </span>
                  <h3 className="text-lg font-semibold">Pendidikan</h3>
                </div>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Peningkatan akses pendidikan tinggi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Pengembangan perpustakaan desa</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Program bimbingan belajar</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <span className="inline-block bg-primary-100 text-primary-600 p-2 rounded-full mr-3">
                    <Briefcase size={20} />
                  </span>
                  <h3 className="text-lg font-semibold">Keterampilan</h3>
                </div>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Pelatihan keterampilan digital</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Pengembangan kerajinan lokal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Kursus bahasa asing</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <span className="inline-block bg-primary-100 text-primary-600 p-2 rounded-full mr-3">
                    <TrendingUp size={20} />
                  </span>
                  <h3 className="text-lg font-semibold">Wirausaha</h3>
                </div>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Inkubator bisnis desa</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Pendampingan UMKM</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Akses permodalan usaha</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HumanResourcesPage;