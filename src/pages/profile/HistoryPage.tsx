import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPin, Calendar, Users, Landmark, Book, Building,
  GraduationCap, Briefcase, Activity, Heart, Building2,
  School, Store, Wallet
} from 'lucide-react';
import PageHeader from '../../components/history/PageHeader';
import AnimatedCard from '../../components/history/AnimatedCard';
import TimelineItem from '../../components/history/TimelineItem';
import LeadershipCard from '../../components/history/LeadershipCard';
import DemographicsCard from '../../components/history/DemographicsCard';
import FacilitiesCard from '../../components/history/FacilitiesCard';
import StatisticsChart from '../../components/history/StatisticsChart';
import BusinessCard from '../../components/history/BusinessCard';
import FinanceCard from '../../components/history/FinanceCard';
import GovernmentStructure from '../../components/history/GovernmentStructure';

const HistoryPage: React.FC = () => {
  const timeline = [
    {
      year: '1984',
      title: 'Pembentukan Desa',
      description: 'Pada tanggal 31 Juli 1984, Desa Bunijaya secara resmi dipecah menjadi dua dan terbentuklah Desa Sindangjaya.',
      icon: Calendar
    },
    {
      year: '1984-1985',
      title: 'Masa Transisi',
      description: 'Bapak Rahmat S (Ulis Rahmat) menjadi Pejabat Kepala Desa Sementara dan rumahnya dijadikan Kantor Desa untuk sementara.',
      icon: Building
    },
    {
      year: '1985',
      title: 'Pembangunan Awal',
      description: 'Dengan semangat gotong royong dan sedikit bantuan dana dari pemerintah, masyarakat desa mampu membangun Kantor Desa, Pasar Desa dan Lapang Merah Desa.',
      icon: Landmark
    },
    {
      year: '1986',
      title: 'Kepemimpinan Pertama',
      description: 'Bapak MD. Hidayat menjadi Kepala Desa pertama yang menjabat secara penuh periode, memimpin hingga tahun 1994.',
      icon: Users
    }
  ];

  const leaders = [
    { period: '1984-1986', name: 'Rahmat', note: 'PJS' },
    { period: '1986-1994', name: 'MD. Hidayat' },
    { period: '1994-1995', name: 'Dedi Sarifudin', note: 'PJS' },
    { period: '1995-2003', name: 'Usup Supriatna' },
    { period: '2003-2008', name: 'Ahyar Hidayat' },
    { period: '2008-2014', name: 'Ahyar Hidayat' },
    { period: '2014-2015', name: 'Asep Supardan', note: 'PJS' },
    { period: '2015-2021', name: 'Asep Saepul Muqodas' },
    { period: '2021', name: 'Undang', note: 'PJS' },
    { period: '2021-Sekarang', name: 'Wahyudin' }
  ];

  const demographicsData = [
    {
      label: 'Jumlah Penduduk',
      values: [
        { year: '', value: '' },
        { year: '2019', value: '4,614' },
        { year: '2020', value: '4,724' },
        { year: '2021', value: '4,803' }
      ],
      growth: '0,02%'
    },
    {
      label: 'Petani',
      values: [
        { year: '', value: '' },
        { year: '2019', value: '126' },
        { year: '2020', value: '800' },
        { year: '2021', value: '1,200' }
      ],
      growth: '300%'
    },
    {
      label: 'Buruh',
      values: [
        { year: '', value: '' },
        { year: '2019', value: '3,407' },
        { year: '2020', value: '900' },
        { year: '2021', value: '800' }
      ],
      growth: '-0,20%'
    },
    {
      label: 'Pegawai Swasta',
      values: [
        { year: '', value: '' },
        { year: '2019', value: '72' },
        { year: '2020', value: '13' },
        { year: '2021', value: '25' }
      ],
      growth: '-0,30%'
    }
  ];

  const educationFacilities = [
    { name: 'TK/PAUD', count: 4 },
    { name: 'SD/Sederajat', count: 3 },
    { name: 'Perpustakaan Desa', count: 1 }
  ];

  const healthFacilities = [
    { name: 'Posyandu', count: 6 }
  ];

  const religiousFacilities = [
    { name: 'Masjid', count: 20 },
    { name: 'Mushola', count: 158 }
  ];

  const sportsFacilities = [
    { name: 'Lapangan Sepak Bola', count: 2 },
    { name: 'Lapangan Bulu Tangkis', count: 2 },
    { name: 'Meja Pingpong', count: 4 },
    { name: 'Lapangan Voli', count: 2 },
    { name: 'Arena Motocross', count: 1 },
    { name: 'Lapangan Futsal', count: 1 }
  ];

  const economicData = [
    { name: 'Petani', value: 1200 },
    { name: 'Buruh', value: 800 },
    { name: 'Pegawai Swasta', value: 25 },
    { name: 'PNS/TNI/Polri', value: 15 },
    { name: 'Pedagang', value: 370 }
  ];

  const businesses = [
    { name: 'Industri Pengolahan Gula Aren', count: 122 },
    { name: 'Usaha Toko/Kios/Warung', count: 313 },
    { name: 'Usaha Peternakan', count: 120 },
    { name: 'Pengecer Gas dan BBM', count: 60 },
    { name: 'Rumah Makan dan Restoran', count: 4 },
    { name: 'Industri Kerajinan', count: 3 },
    { name: 'Group Musik/Band', count: 3 },
    { name: 'Industri Makanan', count: 3 },
    { name: 'Industri Alat Rumah Tangga', count: 2 },
    { name: 'Industri Pengolahan Kayu', count: 2 },
    { name: 'Usaha Perkebunan', count: 2 }
  ];

  const villageIncome = [
    { year: '2019', value: 2735420500 },
    { year: '2020', value: 2900745698 },
    { year: '2021', value: 2751508500 }
  ];

  const villageExpenses = [
    { year: '2019', value: 2145947500 },
    { year: '2020', value: 2900745698 },
    { year: '2021', value: 2753468164 }
  ];

  return (
    <div>
      <PageHeader
        title="Sejarah Desa Sindangjaya"
        description="Menelusuri jejak sejarah dan perkembangan Desa Sindangjaya dari masa ke masa"
        image="https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedCard className="mb-12">
              <div className="p-6 md:p-8">
                <div className="flex items-center mb-6">
                  <MapPin className="h-6 w-6 text-emerald-600 mr-2" />
                  <h2 className="text-2xl font-bold">Asal Usul Nama</h2>
                </div>
                <div className="prose prose-lg">
                  <p>
                    Nama "Sindangjaya" berasal dari dua kata, yaitu "Sindang" dan "Jaya". "Sindang" artinya
                    mampir atau berhenti sejenak dalam melakukan perjalanan, sedangkan "Jaya" artinya unggul
                    atau menang. Hal ini dikarenakan Desa Sindangjaya dahulunya merupakan persinggahan bagi
                    para pejalan kaki yang sedang bepergian yang kebetulan melewati desa ini.
                  </p>
                  <p>
                    Sumber lain menyebutkan, bahwa kata "Sindang" diambil dari kata "Sindangpalay" yaitu
                    nama sebuah kampung di Desa Cilangari yang bersebelahan dengan pusat desa Sindangjaya
                    dan menjadi batas desa Sindangjaya. Kata "Jaya" diambil dari nama desa yang menjadi
                    induknya yaitu Desa Bunijaya, karena Desa Sindangjaya merupakan Desa Pemekaran dari
                    Desa Bunijaya.
                  </p>
                  <p>
                    Pada tanggal 31 Juli 1984 secara resmi Desa Bunijaya dipecah menjadi dua
                    desa dan disitulah awal terbentuknya Desa Sindangjaya.
                  </p>
                </div>
              </div>
            </AnimatedCard>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-12"
            >
              <div className="flex items-center mb-8 justify-center">
                <Book className="h-6 w-6 text-emerald-600 mr-2" />
                <h2 className="text-2xl font-bold text-center">Perjalanan Sejarah</h2>
              </div>
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <TimelineItem
                    key={item.year}
                    year={item.year}
                    title={item.title}
                    description={item.description}
                    icon={item.icon}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>

            <AnimatedCard delay={0.4} className="mb-12">
              <div className="p-6 md:p-8">
                <div className="flex items-center mb-6">
                  <GraduationCap className="h-6 w-6 text-emerald-600 mr-2" />
                  <h2 className="text-2xl font-bold">Kondisi Desa</h2>
                </div>
                <div className="prose prose-lg">
                  <p>
                    Desa Sindangjaya merupakan desa termuda diantara desa-desa yang berada di wilayah
                    Kecamatan Gununghalu Kabupaten Bandung Barat dan merupakan daerah paling ujung
                    sebelah selatan Kabupaten Bandung Barat yang berbatasan langsung dengan Kabupaten
                    Cianjur.
                  </p>
                  <p>
                    Mata pencaharian penduduknya dari dulu hingga sekarang mayoritas bertani
                    atau bercocok tanam. Perbedaannya, jika dulu bercocok tanam dilakukan dengan
                    peralatan yang sangat sederhana sekali dan belum ada peralatan modern seperti sekarang.
                    Dulu masyarakatnya bercocok tanam hanya menghasilkan apa-apa saja yang tumbuh secara alami
                    dari tanah pegunungan, sedangkan sekarang sudah bisa bercocok tanam dengan menanamnya sendiri
                    dan hasilnya bisa dijual dan dapat menghasilkan penghasilan untuk kepentingan masyarakat desa.
                  </p>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.6} className="mb-12">
              <div className="p-6 md:p-8">
                <div className="flex items-center mb-6">
                  <Users className="h-6 w-6 text-emerald-600 mr-2" />
                  <h2 className="text-2xl font-bold">Kepemimpinan Desa</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {leaders.map((leader, index) => (
                    <LeadershipCard
                      key={leader.period}
                      period={leader.period}
                      name={leader.name}
                      note={leader.note}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.8}>
              <div className="p-6 md:p-8">
                <div className="flex items-center mb-6">
                  <Briefcase className="h-6 w-6 text-emerald-600 mr-2" />
                  <h2 className="text-2xl font-bold">Data Demografis</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {demographicsData.map((data, index) => (
                    <DemographicsCard
                      key={index}
                      label={data.label}
                      values={data.values}
                      growth={data.growth}
                    />
                  ))}
                </div>
                <div className="mt-6 text-sm text-gray-500">
                  Sumber: Buku kependudukan desa Sindangjaya 2021
                </div>
              </div>
            </AnimatedCard>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2">
                <School className="h-6 w-6 text-emerald-600" />
                Fasilitas dan Infrastruktur
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <FacilitiesCard
                  title="Fasilitas Pendidikan"
                  facilities={educationFacilities}
                  icon={<GraduationCap className="h-6 w-6 text-emerald-600" />}
                  delay={0.1}
                />
                <FacilitiesCard
                  title="Fasilitas Kesehatan"
                  facilities={healthFacilities}
                  icon={<Heart className="h-6 w-6 text-emerald-600" />}
                  delay={0.2}
                />
                <FacilitiesCard
                  title="Fasilitas Ibadah"
                  facilities={religiousFacilities}
                  icon={<Building2 className="h-6 w-6 text-emerald-600" />}
                  delay={0.3}
                />
                <FacilitiesCard
                  title="Fasilitas Olahraga"
                  facilities={sportsFacilities}
                  icon={<Activity className="h-6 w-6 text-emerald-600" />}
                  delay={0.4}
                />
              </div>
            </div>

            <AnimatedCard delay={0.5}>
              <div className="p-6 md:p-8">
                <div className="flex items-center mb-6">
                  <Briefcase className="h-6 w-6 text-emerald-600 mr-2" />
                  <h2 className="text-2xl font-bold">Kondisi Ekonomi</h2>
                </div>
                <div className="prose prose-lg mb-8">
                  <p>
                    Perekonomian di Desa Sindangjaya merupakan aset yang besar bagi pertumbuhan
                    perekonomian penduduk Desa. Selain mayoritas penduduk sebagai petani, di Desa
                    Sindangjaya banyak tumbuh usaha-usaha kerajinan, warung, gilingan padi,
                    kelontong, toko, home industry, dan peternakan.
                  </p>
                </div>
                <StatisticsChart
                  data={economicData}
                  title="Distribusi Pekerjaan Penduduk"
                  color="#059669"
                />
              </div>
            </AnimatedCard>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2">
                <Store className="h-6 w-6 text-emerald-600" />
                Usaha Mikro, Kecil dan Menengah
              </h2>
              <BusinessCard
                title="UMKM dan Industri"
                businesses={businesses}
                delay={0.1}
              />
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2">
                <Wallet className="h-6 w-6 text-emerald-600" />
                Keuangan Desa
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FinanceCard
                  title="Pendapatan Desa"
                  data={villageIncome}
                  delay={0.2}
                />
                <FinanceCard
                  title="Belanja Desa"
                  data={villageExpenses}
                  delay={0.3}
                />
              </div>
            </div>

            <GovernmentStructure delay={0.4} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;