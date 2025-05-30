import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/ui/PageHeader';
import { Target, TrendingUp, Users, Heart, BookOpen, Droplets, Zap, Building2, Factory, ArrowDown, Scale, Citrus as City, Leaf, Waves, Fish, Trees as Tree, Shield, Handshake as HandShake, Signal, CheckCircle, AlertTriangle } from 'lucide-react';

interface SDGGoal {
  id: number;
  title: string;
  icon: React.ElementType;
  color: string;
  score: number;
  status: 'Sangat Baik' | 'Baik' | 'Cukup' | 'Perlu Perhatian' | 'Sangat Perlu Perhatian';
  description: string;
  achievements: string[];
  challenges: string[];
}

const sdgsData: SDGGoal[] = [
  {
    id: 1,
    title: "Desa Tanpa Kemiskinan",
    icon: Target,
    color: "#E5243B",
    score: 75.8,
    status: "Baik",
    description: "Upaya pengentasan kemiskinan melalui berbagai program pemberdayaan masyarakat",
    achievements: [
      "Penurunan angka kemiskinan sebesar 2.5%",
      "Program bantuan usaha mikro untuk 50 KK",
      "Pelatihan keterampilan untuk 100 warga"
    ],
    challenges: [
      "Masih ada 15% KK dalam kategori prasejahtera",
      "Keterbatasan akses modal usaha",
      "Perlu peningkatan kapasitas SDM"
    ]
  },
  {
    id: 2,
    title: "Desa Tanpa Kelaparan",
    icon: Heart,
    color: "#DDA63A",
    score: 82.3,
    status: "Sangat Baik",
    description: "Program ketahanan pangan dan gizi masyarakat desa",
    achievements: [
      "Produksi pangan lokal mencukupi kebutuhan desa",
      "Program diversifikasi pangan untuk 200 KK",
      "Penurunan stunting menjadi 8.5%"
    ],
    challenges: [
      "Optimalisasi lahan pertanian",
      "Peningkatan nilai tambah produk pertanian",
      "Distribusi pangan yang merata"
    ]
  },
  {
    id: 3,
    title: "Desa Sehat dan Sejahtera",
    icon: Heart,
    color: "#4C9F38",
    score: 78.5,
    status: "Baik",
    description: "Peningkatan layanan kesehatan dan kesejahteraan masyarakat",
    achievements: [
      "Cakupan BPJS Kesehatan 85%",
      "Posyandu aktif di setiap dusun",
      "Program sehat untuk lansia"
    ],
    challenges: [
      "Peningkatan fasilitas kesehatan",
      "Pemerataan akses layanan kesehatan",
      "Kesadaran hidup sehat"
    ]
  },
  {
    id: 4,
    title: "Pendidikan Desa Berkualitas",
    icon: BookOpen,
    color: "#C5192D",
    score: 72.4,
    status: "Baik",
    description: "Peningkatan akses dan kualitas pendidikan desa",
    achievements: [
      "Angka partisipasi sekolah 98%",
      "Beasiswa untuk 50 siswa berprestasi",
      "Perpustakaan desa aktif"
    ],
    challenges: [
      "Peningkatan kualitas pendidik",
      "Fasilitas pendidikan terbatas",
      "Akses pendidikan tinggi"
    ]
  },
  {
    id: 5,
    title: "Keterlibatan Perempuan Desa",
    icon: Users,
    color: "#FF3A21",
    score: 80.1,
    status: "Sangat Baik",
    description: "Pemberdayaan dan kesetaraan gender di desa",
    achievements: [
      "30% perangkat desa adalah perempuan",
      "Program UMKM untuk ibu rumah tangga",
      "Kelompok PKK aktif"
    ],
    challenges: [
      "Peningkatan partisipasi dalam pengambilan keputusan",
      "Kesetaraan kesempatan kerja",
      "Penghapusan diskriminasi"
    ]
  },
  {
    id: 6,
    title: "Desa Layak Air Bersih dan Sanitasi",
    icon: Droplets,
    color: "#26BDE2",
    score: 68.9,
    status: "Cukup",
    description: "Penyediaan air bersih dan sanitasi layak",
    achievements: [
      "Akses air bersih 85% rumah tangga",
      "Program jamban sehat",
      "Pengelolaan sampah terpadu"
    ],
    challenges: [
      "Infrastruktur air bersih terbatas",
      "Kesadaran sanitasi",
      "Pengelolaan limbah"
    ]
  },
  {
    id: 7,
    title: "Desa Berenergi Bersih",
    icon: Zap,
    color: "#FCC30B",
    score: 65.2,
    status: "Cukup",
    description: "Pengembangan energi terbarukan dan efisiensi energi",
    achievements: [
      "Program biogas untuk 30 KK",
      "Lampu jalan tenaga surya",
      "Efisiensi energi rumah tangga"
    ],
    challenges: [
      "Keterbatasan teknologi",
      "Biaya investasi tinggi",
      "Kesadaran energi bersih"
    ]
  },
  {
    id: 8,
    title: "Pertumbuhan Ekonomi Desa",
    icon: TrendingUp,
    color: "#A21942",
    score: 73.6,
    status: "Baik",
    description: "Peningkatan ekonomi dan lapangan kerja desa",
    achievements: [
      "Pertumbuhan UMKM 15%",
      "Program magang pemuda",
      "BUMDes berkembang"
    ],
    challenges: [
      "Modal usaha terbatas",
      "Daya saing produk",
      "Keterampilan wirausaha"
    ]
  },
  {
    id: 9,
    title: "Infrastruktur dan Inovasi Desa",
    icon: Building2,
    color: "#FD6925",
    score: 70.8,
    status: "Baik",
    description: "Pembangunan infrastruktur dan inovasi desa",
    achievements: [
      "Jalan desa 85% baik",
      "Internet desa",
      "Inovasi pelayanan publik"
    ],
    challenges: [
      "Pemeliharaan infrastruktur",
      "Adopsi teknologi",
      "Anggaran terbatas"
    ]
  },
  {
    id: 10,
    title: "Desa Tanpa Kesenjangan",
    icon: ArrowDown,
    color: "#DD1367",
    score: 71.2,
    status: "Baik",
    description: "Pengurangan kesenjangan sosial ekonomi",
    achievements: [
      "Program bantuan sosial tepat sasaran",
      "Akses layanan publik merata",
      "Pemberdayaan kelompok rentan"
    ],
    challenges: [
      "Kesenjangan ekonomi",
      "Akses sumber daya",
      "Inklusi sosial"
    ]
  },
  {
    id: 11,
    title: "Desa yang Berkelanjutan",
    icon: City,
    color: "#FD9D24",
    score: 76.4,
    status: "Baik",
    description: "Pembangunan desa yang berkelanjutan",
    achievements: [
      "Tata ruang desa terencana",
      "Ruang terbuka hijau",
      "Pengelolaan risiko bencana"
    ],
    challenges: [
      "Pertumbuhan penduduk",
      "Alih fungsi lahan",
      "Mitigasi bencana"
    ]
  },
  {
    id: 12,
    title: "Konsumsi dan Produksi Desa",
    icon: Factory,
    color: "#BF8B2E",
    score: 69.5,
    status: "Cukup",
    description: "Pola konsumsi dan produksi yang berkelanjutan",
    achievements: [
      "Pengurangan sampah plastik",
      "Produk ramah lingkungan",
      "Bank sampah aktif"
    ],
    challenges: [
      "Pola konsumsi",
      "Pengelolaan limbah",
      "Efisiensi sumber daya"
    ]
  },
  {
    id: 13,
    title: "Desa Beriklim",
    icon: Leaf,
    color: "#3F7E44",
    score: 67.8,
    status: "Cukup",
    description: "Penanganan perubahan iklim di tingkat desa",
    achievements: [
      "Program penghijauan",
      "Adaptasi perubahan iklim",
      "Pengurangan emisi"
    ],
    challenges: [
      "Kesadaran lingkungan",
      "Kapasitas adaptasi",
      "Teknologi ramah lingkungan"
    ]
  },
  {
    id: 14,
    title: "Desa Maritim",
    icon: Fish,
    color: "#0A97D9",
    score: 71.9,
    status: "Baik",
    description: "Pengelolaan sumber daya maritim desa",
    achievements: [
      "Konservasi pesisir",
      "Budidaya perikanan",
      "Wisata bahari"
    ],
    challenges: [
      "Pencemaran laut",
      "Overfishing",
      "Infrastruktur pesisir"
    ]
  },
  {
    id: 15,
    title: "Desa Hijau",
    icon: Tree,
    color: "#56C02B",
    score: 74.3,
    status: "Baik",
    description: "Pelestarian ekosistem darat desa",
    achievements: [
      "Hutan desa terjaga",
      "Keanekaragaman hayati",
      "Rehabilitasi lahan"
    ],
    challenges: [
      "Deforestasi",
      "Degradasi lahan",
      "Konflik tata guna lahan"
    ]
  },
  {
    id: 16,
    title: "Desa Damai",
    icon: Shield,
    color: "#00689D",
    score: 82.7,
    status: "Sangat Baik",
    description: "Kedamaian, keadilan, dan kelembagaan desa",
    achievements: [
      "Resolusi konflik efektif",
      "Pelayanan publik transparan",
      "Partisipasi masyarakat"
    ],
    challenges: [
      "Penegakan aturan",
      "Kapasitas aparatur",
      "Akuntabilitas"
    ]
  },
  {
    id: 17,
    title: "Kemitraan untuk Desa",
    icon: HandShake,
    color: "#19486A",
    score: 77.1,
    status: "Baik",
    description: "Kerjasama dan kemitraan pembangunan desa",
    achievements: [
      "Kerjasama antar desa",
      "Kemitraan UMKM",
      "Jaringan pembangunan"
    ],
    challenges: [
      "Koordinasi program",
      "Sinergi stakeholder",
      "Keberlanjutan program"
    ]
  },
  {
    id: 18,
    title: "Kelembagaan Desa Dinamis",
    icon: Signal,
    color: "#ED4036",
    score: 79.4,
    status: "Baik",
    description: "Penguatan kelembagaan dan tata kelola desa",
    achievements: [
      "Digitalisasi administrasi",
      "Kapasitas BPD",
      "Inovasi pelayanan"
    ],
    challenges: [
      "SDM aparatur",
      "Sistem informasi",
      "Partisipasi masyarakat"
    ]
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Sangat Baik':
      return 'bg-green-100 text-green-800';
    case 'Baik':
      return 'bg-blue-100 text-blue-800';
    case 'Cukup':
      return 'bg-yellow-100 text-yellow-800';
    case 'Perlu Perhatian':
      return 'bg-orange-100 text-orange-800';
    case 'Sangat Perlu Perhatian':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const SDGsPage: React.FC = () => {
  const [selectedGoal, setSelectedGoal] = React.useState<SDGGoal | null>(null);

  const averageScore = React.useMemo(() => {
    const total = sdgsData.reduce((sum, goal) => sum + goal.score, 0);
    return (total / sdgsData.length).toFixed(1);
  }, []);

  const statusCounts = React.useMemo(() => {
    return sdgsData.reduce((acc, goal) => {
      acc[goal.status] = (acc[goal.status] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  }, []);

  return (
    <div>
      <PageHeader 
        title="SDGs Desa Sindangjaya" 
        description="Pencapaian Sustainable Development Goals (SDGs) Desa Sindangjaya"
        image="https://images.pexels.com/photos/1076885/pexels-photo-1076885.jpeg"
      />

      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">SDGs Desa Sindangjaya 2025</h2>
              <p className="text-gray-600 mb-8">
                Sustainable Development Goals (SDGs) Desa adalah upaya terpadu untuk memastikan pembangunan desa yang berkelanjutan dan inklusif.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="text-3xl font-bold text-primary-600 mb-2">{averageScore}</div>
                  <p className="text-gray-600">Rata-rata Skor SDGs</p>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {statusCounts['Sangat Baik'] || 0}
                  </div>
                  <p className="text-gray-600">Goals Sangat Baik</p>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">
                    {statusCounts['Perlu Perhatian'] || 0}
                  </div>
                  <p className="text-gray-600">Goals Perlu Perhatian</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sdgsData.map((goal, index) => (
              <motion.div
                key={goal.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => setSelectedGoal(goal)}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                        style={{ backgroundColor: `${goal.color}20`, color: goal.color }}
                      >
                        <goal.icon size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Goal {goal.id}</h3>
                        <p className="text-sm text-gray-600">{goal.title}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-2">
                    <div className="text-2xl font-bold" style={{ color: goal.color }}>
                      {goal.score}
                    </div>
                    <span className={`text-sm px-3 py-1 rounded-full ${getStatusColor(goal.status)}`}>
                      {goal.status}
                    </span>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                    <div
                      className="h-2 rounded-full"
                      style={{
                        width: `${goal.score}%`,
                        backgroundColor: goal.color
                      }}
                    />
                  </div>

                  <p className="text-sm text-gray-600 line-clamp-2">{goal.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Goal Detail Modal */}
      {selectedGoal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" onClick={() => setSelectedGoal(null)}>
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Goal {selectedGoal.id}: {selectedGoal.title}
                      </h3>
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${selectedGoal.color}20`, color: selectedGoal.color }}
                      >
                        <selectedGoal.icon size={20} />
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700">Skor</span>
                        <span className="font-semibold" style={{ color: selectedGoal.color }}>
                          {selectedGoal.score}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                        <div
                          className="h-2 rounded-full"
                          style={{
                            width: `${selectedGoal.score}%`,
                            backgroundColor: selectedGoal.color
                          }}
                        />
                      </div>

                      <div className="mb-4">
                        <h4 className="font-medium mb-2">Capaian</h4>
                        <ul className="space-y-2">
                          {selectedGoal.achievements.map((achievement, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                              <span className="text-gray-600">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Tantangan</h4>
                        <ul className="space-y-2">
                          {selectedGoal.challenges.map((challenge, index) => (
                            <li key={index} className="flex items-start">
                              <AlertTriangle className="w-5 h-5 text-yellow-500 mr-2 flex-shrink-0" />
                              <span className="text-gray-600">{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary-600 text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setSelectedGoal(null)}
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SDGsPage;