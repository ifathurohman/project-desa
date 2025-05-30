import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/ui/PageHeader';
import { CheckCircle, AlertTriangle } from 'lucide-react';

interface SDGGoal {
  id: number;
  title: string;
  image: string;
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
    image: "/assets/images/sdgs/sdgs-1.png",
    color: "#E5243B",
    score: 77.1,
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
                <div className="relative aspect-square mb-4">
                  <img 
                    src={goal.image}
                    alt={`SDG ${goal.id}`}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute top-2 right-2">
                    <span className={`text-sm px-3 py-1 rounded-full ${getStatusColor(goal.status)}`}>
                      {goal.score}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Goal {goal.id}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{goal.title}</p>
                  
                  <div className="mt-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="h-2 rounded-full"
                        style={{
                          width: `${goal.score}%`,
                          backgroundColor: goal.color
                        }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
                      <img 
                        src={selectedGoal.image}
                        alt={`SDG ${selectedGoal.id}`}
                        className="w-10 h-10 object-contain"
                      />
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