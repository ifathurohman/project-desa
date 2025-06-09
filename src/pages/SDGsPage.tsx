import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import PageHeader from '../components/ui/PageHeader';
import SDGDetailModal from '../components/SDGsPageDetails';
import { Info, CheckCircleIcon, AlertTriangleIcon, BarChart2, Target, TrendingUp, Users, Heart, BookOpen, Droplets, Zap, Building2, Factory, ArrowDown, Scale, Citrus as City, Leaf, Waves, Fish, Trees as Tree, Shield, Handshake as HandShake, Signal, CheckCircle, AlertTriangle, ChevronDown, ChevronUp, Globe } from 'lucide-react';
import { SDGApiResponse } from '../types/types';

// Define allowed status types
export type SDGStatus =
    | "Sangat Baik"
    | "Baik"
    | "Cukup"
    | "Perlu Perhatian"
    | "Sangat Perlu Perhatian";

// Type the return value to match
export const getStatusFromScore = (score: number): SDGStatus => {
    if (score >= 81) return "Sangat Baik";
    if (score >= 71) return "Baik";
    if (score >= 61) return "Cukup";
    if (score >= 51) return "Perlu Perhatian";
    return "Sangat Perlu Perhatian";
};

interface SDGGoal {
    id: number;
    title: string;
    icon: React.ElementType;
    logo: string;
    color: string;
    score: number;
    status: 'Sangat Baik' | 'Baik' | 'Cukup' | 'Perlu Perhatian' | 'Sangat Perlu Perhatian';
    description: string;
    achievements: string[];
    challenges: string[];
}

interface SDGGoal {
    id: number;
    title: string;
    score: number;
}

const sdgsData: SDGGoal[] = [
    {
        id: 1,
        title: "Desa Tanpa Kemiskinan",
        icon: Target,
        logo: "Picture1.png",
        color: "#E5243B",
        score: 0,
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
        logo: "Picture2.png",
        color: "#DDA63A",
        score: 0,
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
        logo: "Picture3.png",
        color: "#4C9F38",
        score: 0,
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
        logo: "Picture4.png",
        color: "#C5192D",
        score: 0,
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
        logo: "Picture5.png",
        color: "#FF3A21",
        score: 0,
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
        logo: "Picture6.png",
        color: "#26BDE2",
        score: 0,
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
        logo: "Picture7.png",
        color: "#FCC30B",
        score: 0,
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
        logo: "Picture8.png",
        color: "#A21942",
        score: 0,
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
        logo: "Picture9.png",
        color: "#FD6925",
        score: 0,
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
        logo: "Picture10.png",
        color: "#DD1367",
        score: 0,
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
        logo: "Picture11.png",
        color: "#FD9D24",
        score: 0,
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
        logo: "Picture12.png",
        color: "#BF8B2E",
        score: 0,
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
        logo: "Picture13.png",
        color: "#3F7E44",
        score: 0,
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
        logo: "Picture14.png",
        color: "#0A97D9",
        score: 0,
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
        logo: "Picture15.png",
        color: "#56C02B",
        score: 0,
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
        logo: "Picture16.png",
        color: "#00689D",
        score: 0,
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
        logo: "Picture17.png",
        color: "#19486A",
        score: 0,
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
        logo: "Picture18.png",
        color: "#ED4036",
        score: 0,
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
    const [showModal, setShowModal] = useState(false);
    const [sdgsUpdate, setSdgsUpdate] = useState<SDGGoal[]>(sdgsData);
    const [targetData, setTargetData] = useState<SDGApiResponse | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const apiUrl = "https://backend-desa-cors.onrender.com";
    // const apiUrl = "http://localhost:3001";

    const averageScore = React.useMemo(() => {
        const total = sdgsUpdate.reduce((sum, goal) => sum + goal.score, 0);
        return (total / sdgsUpdate.length).toFixed(1);
    }, [sdgsUpdate]);

    const statusCounts = React.useMemo(() => {
        return sdgsUpdate.reduce((acc, goal) => {
            acc[goal.status] = (acc[goal.status] || 0) + 1;
            return acc;
        }, {} as Record<SDGStatus, number>);
    }, [sdgsUpdate]);

    // Fetch summary + detail scores
    // from api
    useEffect(() => {
        const fetchSDGsData = async () => {
            try {
                const response = await axios.get(`${apiUrl}/api/sdgs-score`);
                const apiData = response.data?.data || [];

                const updatedData = sdgsData.map((goal) => {
                    const match = apiData.find((item: any) => item.goals === goal.id);
                    if (match) {
                        const score = parseFloat(match.score);
                        return {
                            ...goal,
                            score,
                            status: getStatusFromScore(score),
                        };
                    }
                    return goal;
                });

                setSdgsUpdate(updatedData);
            } catch (err) {
                console.error("Failed to fetch SDGs score:", err);
                setError("Failed to load SDGs score");
            }
        };

        fetchSDGsData();
    }, []);

    // // without api
    // useEffect(() => {
    //     const fetchSDGsData = async () => {
    //         try {
    //             const response = await fetch('/data/sdgs-score.json'); // <-- PUBLIC path
    //             const apiData = await response.json();

    //             const updatedData = sdgsData.map((goal) => {
    //                 const match = apiData.data.find((item: any) => item.goals === goal.id);
    //                 if (match) {
    //                     const score = parseFloat(match.score);
    //                     return {
    //                         ...goal,
    //                         score,
    //                         status: getStatusFromScore(score),
    //                     };
    //                 }
    //                 return goal;
    //             });

    //             setSdgsUpdate(updatedData);
    //         } catch (err) {
    //             console.error("Failed to fetch SDGs score:", err);
    //             setError("Failed to load SDGs score");
    //         }
    //     };

    //     fetchSDGsData();
    // }, []);


    // Fetch detail data when goal selected
    // from api
    useEffect(() => {
        const fetchTargetData = async (goalId: number) => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get(`${apiUrl}/api/sdgs-data`);
                const detailData = response.data?.[goalId]; // e.g. data["1"], data["2"]

                if (detailData) {
                    setTargetData(detailData);
                } else {
                    setError("No detail data found");
                    setTargetData(null);
                }
            } catch (err) {
                setError("Failed to fetch detail target data");
                console.error("Error fetching detail:", err);
            } finally {
                setLoading(false);
            }
        };

        if (selectedGoal) {
            fetchTargetData(selectedGoal.id);
        } else {
            setTargetData(null);
            setError(null);
        }
    }, [selectedGoal]);

    //without api 
    // useEffect(() => {
    //     const fetchTargetData = async (goalId: number) => {
    //         setLoading(true);
    //         setError(null);
    //         try {
    //             const response = await fetch('/data/sdgs-data.json');
    //             const allData = await response.json();
    //             const detailData = allData[goalId];

    //             if (detailData) {
    //                 setTargetData(detailData);
    //             } else {
    //                 setError("No detail data found");
    //                 setTargetData(null);
    //             }
    //         } catch (err) {
    //             setError("Failed to fetch detail target data");
    //             console.error("Error fetching detail:", err);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     if (selectedGoal) {
    //         fetchTargetData(selectedGoal.id);
    //     } else {
    //         setTargetData(null);
    //         setError(null);
    //     }
    // }, [selectedGoal]);

    const handleCloseModal = () => {
        setSelectedGoal(null);
        setShowModal(false);
    };

    return (
        <div>
            <PageHeader
                title="SDGs Desa Sindangjaya"
                description="Pencapaian Sustainable Development Goals (SDGs) Desa Sindangjaya"
                image="https://images.pexels.com/photos/1076885/pexels-photo-1076885.jpeg"
            />

            <section className="section">
                <div className="container">
                    <div className="mx-auto text-center mb-12">
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

                            <motion.div
                                className="bg-gray-50 p-8 md:p-12 rounded-xl mb-12 text-center text-white"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-12">

                                    {/* Rata-rata Skor - Center Highlight */}
                                    <div
                                        className="relative rounded-lg shadow-lg p-6 overflow-hidden text-white hover:shadow-xl transition duration-300 cursor-pointer
             bg-primary-600 bg-blend-overlay bg-cover bg-center"
                                        style={{
                                            backgroundImage: "url('https://images.pexels.com/photos/6965539/pexels-photo-6965539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", // Replace with your image path (e.g. public/images/bg-pattern.svg)
                                        }}
                                        onClick={() => setShowModal(true)}
                                    >
                                        {/* Optional semi-transparent dark overlay */}
                                        <div className="absolute inset-0 bg-black bg-opacity-20 pointer-events-none z-0 backdrop-blur-xs"></div>

                                        <div className="relative z-10">
                                            <div className="absolute top-0 right-0 p-2 z-10">
                                                <div className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center">
                                                    <BarChart2 className="w-6 h-6 text-white opacity-70" />
                                                </div>
                                            </div>
                                            <div className="text-sm font-semibold mb-2">Rerata Skor</div>
                                            <div className="text-5xl font-extrabold">{averageScore}</div>
                                            <p className="text-xs mt-1 opacity-80">
                                                Data Per {new Date().toLocaleDateString("id-ID")} {new Date().toLocaleTimeString("id-ID")}
                                            </p>
                                        </div>
                                    </div>


                                    {/* Modal Overlay */}
                                    {showModal && (
                                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                                            <div className="bg-white max-w-xl w-full rounded-xl shadow-lg p-6 relative">
                                                <button
                                                    className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
                                                    onClick={() => setShowModal(false)}
                                                >
                                                    ✕
                                                </button>
                                                <div className="flex items-center mb-4">
                                                    <Info className="to-primary-600 mr-2" />
                                                    <h3 className="text-lg font-semibold to-primary-600">Informasi Grafik</h3>
                                                </div>
                                                <div className="text-sm text-gray-700 space-y-3">
                                                    <p>
                                                        <strong>Skor SDGs Desa</strong> merupakan hasil data yang diolah oleh
                                                        Kementerian Desa, Pembangunan Daerah Tertinggal, dan Transmigrasi (Kemendesa
                                                        PDTT) melalui Sistem Informasi Desa (SID) dan Aplikasi SDGs Desa.
                                                    </p>
                                                    <p>
                                                        Data ini dikumpulkan melalui survei lapangan oleh relawan desa, kemudian
                                                        divalidasi oleh pemerintah desa serta pihak terkait. Skor yang ditampilkan
                                                        mencerminkan kinerja desa dalam mencapai tujuan pembangunan berkelanjutan.
                                                    </p>
                                                    <p>
                                                        Rerata skor yang dicapai adalah <strong>{averageScore}</strong>, sebagai dasar
                                                        evaluasi dan perencanaan pembangunan desa.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                                    {/* Cukup */}
                                    <div className="bg-white rounded-xl shadow-md p-6 flex items-center justify-between gap-4 hover:shadow-lg transition duration-300">
                                        <CheckCircleIcon className="text-yellow-500 w-10 h-10" />
                                        <div className="text-right">
                                            <div className="text-4xl font-extrabold text-yellow-500">
                                                {statusCounts['Cukup'] || 0}
                                            </div>
                                            <p className="text-gray-500 text-sm">Goals Cukup</p>
                                        </div>
                                    </div>


                                    {/* Baik */}
                                    <div className="bg-white rounded-xl shadow-md p-6 flex items-center justify-between gap-4 hover:shadow-lg transition duration-300">
                                        <CheckCircleIcon className="text-blue-600 w-10 h-10" />
                                        <div className="text-right">
                                            <div className="text-4xl font-extrabold text-blue-600">
                                                {statusCounts['Baik'] || 0}
                                            </div>
                                            <p className="text-gray-500 text-sm">Goals Baik</p>
                                        </div>
                                    </div>

                                    {/* Sangat Baik */}
                                    <div className="bg-white rounded-xl shadow-md p-6 flex items-center justify-between gap-4 hover:shadow-lg transition duration-300">
                                        <CheckCircleIcon className="text-green-600 w-10 h-10" />
                                        <div className="text-right">
                                            <div className="text-4xl font-extrabold text-green-600">
                                                {statusCounts['Sangat Baik'] || 0}
                                            </div>
                                            <p className="text-gray-500 text-sm">Goals Sangat Baik</p>
                                        </div>
                                    </div>

                                    {/* Perlu Perhatian */}
                                    <div className="bg-white rounded-xl shadow-md p-6 flex items-center justify-between gap-4 hover:shadow-lg transition duration-300">
                                        <AlertTriangleIcon className="text-red-500 w-10 h-10" />
                                        <div className="text-right">
                                            <div className="text-4xl font-extrabold text-red-500">
                                                {statusCounts['Sangat Perlu Perhatian'] || 0}
                                            </div>
                                            <p className="text-gray-500 text-sm">Goals Perlu Perhatian</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                        {sdgsUpdate.map((goal, index) => (
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
                                                className="rounded-lg flex items-center justify-center mr-4"
                                                style={{ backgroundColor: `${goal.color}20`, color: goal.color }}
                                            >
                                                {/* <goal.icon size={24} /> */}
                                                <img src={`images/sdgs/${goal.logo}`} alt="Logo Desa Kersik" className="w-20 h-20" />
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
                <SDGDetailModal
                    goal={selectedGoal}
                    onClose={handleCloseModal}
                    targetData={targetData}
                    loading={loading}
                    error={error}
                />
            )}

            <section className="section bg-gradient-to-b from-white via-slate-50 to-slate-100 py-16">
                <div className="container max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-10"
                    >
                        <div className="inline-flex items-center gap-3 justify-center mb-2 text-primary-600">
                            <Globe className="w-6 h-6" />
                            <span className="font-semibold text-lg">SDGs Nasional</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Metadata SDGs Indonesia
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Lihat informasi resmi indikator dan definisi dari setiap Tujuan Pembangunan Berkelanjutan (TPB) langsung dari situs resmi Bappenas.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="rounded-xl overflow-hidden shadow-xl ring-1 ring-slate-200 bg-white"
                    >
                        <iframe
                            src="https://sdgs.bappenas.go.id/metadata-api/"
                            title="SDGs Metadata Viewer"
                            className="w-full h-screen border-0 overflow-hidden"
                        />
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default SDGsPage;