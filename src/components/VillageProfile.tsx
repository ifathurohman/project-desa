import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, ArrowUp, ArrowDown, Building2, Compass, Mountain, Cloud, Trees as Tree, Home, GraduationCap, Building } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { MapContainer, TileLayer, Polygon, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png'
});

interface DensityLevel {
    level: string;
    range: string;
    color: string;
}

const populationData = [
    { year: 2019, total: 4614, male: 2327, female: 2287, growthRate: 2.08 },
    { year: 2020, total: 4662, male: 2357, female: 2305, growthRate: 1.04 },
    { year: 2021, total: 4736, male: 2384, female: 2352, growthRate: 1.59 },
    { year: 2022, total: 4759, male: 2413, female: 2346, growthRate: 0.49 },
    { year: 2023, total: 4784, male: 2427, female: 2357, growthRate: 0.53 },
    { year: 2024, total: 4797, male: 2452, female: 2345, growthRate: 0.27 }
];

const currentYearData = {
    year: 2024,
    total: 4797,
    regions: [
        { name: 'Cisitu', population: 2037, density: 7, distribution: 44.41, level: 'Tinggi' },
        { name: 'Nagrog', population: 1497, density: 4, distribution: 31.73, level: 'Rendah' },
        { name: 'Tugu', population: 1262, density: 6, distribution: 27.55, level: 'Sedang' }
    ]
};

const densityLevels = [
    { level: 'Rendah', range: '1-3 Jiwa/Ha', color: '#22C55E' },
    { level: 'Sedang', range: '4-6 Jiwa/Ha', color: '#F59E0B' },
    { level: 'Tinggi', range: '7-10 Jiwa/Ha', color: '#EF4444' }
];

const boundaries = {
    north: 'Desa Cilangari',
    east: 'Desa Bunijaya',
    south: 'Desa Sirnajaya',
    west: 'Desa Gununghalu'
};

const markers = [
    {
        position: [-7.0257, 107.2073],
        title: "Kantor Desa Sindangjaya",
        description: "Pusat administrasi dan pelayanan masyarakat"
    },
    {
        position: [-7.0227, 107.2053],
        title: "Pasar Desa",
        description: "Pusat kegiatan ekonomi masyarakat"
    },
    {
        position: [-7.0287, 107.2093],
        title: "Puskesmas Pembantu",
        description: "Fasilitas kesehatan masyarakat"
    }
];

const boundaryCoordinates = [
  [-6.891, 107.611],
  [-6.892, 107.613],
  [-6.893, 107.610],
  [-6.891, 107.611],
];


const boundaryLabels = [
    { position: [-7.0107, 107.2073], text: 'Desa Cilangari', direction: 'Utara' },
    { position: [-7.0257, 107.2223], text: 'Desa Bunijaya', direction: 'Timur' },
    { position: [-7.0407, 107.2073], text: 'Desa Sirnajaya', direction: 'Selatan' },
    { position: [-7.0257, 107.1923], text: 'Desa Gununghalu', direction: 'Barat' }
];

const areaStats = {
    area: 20.25,
    population: 4580,
    density: 226,
    altitude: '500-1000',
    climate: 'Sejuk',
    rainfall: '2500-3000'
};

const generalInfo = {
    established: 1984,
    postalCode: '40565',
    district: 'Gununghalu',
    regency: 'Kabupaten Bandung Barat',
    province: 'Jawa Barat',
    topography: 'Berbukit',
    mainCommodities: ['Kopi', 'Padi', 'Sayuran'],
    potentials: ['Pertanian', 'Wisata Alam', 'Kerajinan Tangan']
};

const VillageProfile: React.FC = () => {
    const [showBoundaries, setShowBoundaries] = useState(false);
    const [selectedBoundary, setSelectedBoundary] = useState<string | null>(null);

    const formatNumber = (num: number) => num.toLocaleString('id-ID');

    const getGrowthRate = (current: number, previous: number) => {
        const rate = ((current - previous) / previous) * 100;
        return rate.toFixed(2);
    };

    const currentYear = populationData[populationData.length - 1];
    const previousYear = populationData[populationData.length - 2];
    const growthRate = getGrowthRate(currentYear.total, previousYear.total);

    return (
        <section className="section bg-white">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-12"
                >
                    <h2 className="section-title">Profil Desa Sindangjaya</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Desa Sindangjaya terletak di Kecamatan Gununghalu, Kabupaten Bandung Barat. Desa ini memiliki kontur geografis yang berbukit dan beriklim sejuk, menjadikannya cocok untuk pertanian dan pariwisata alam.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="bg-white rounded-xl shadow-sm p-6 mb-8"
                >
                    <div className="flex items-center mb-6">
                        <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mr-4">
                            <Building size={24} />
                        </div>
                        <h3 className="text-xl font-semibold">Informasi Umum</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-medium mb-3">Administrasi</h4>
                            <div className="space-y-2">
                                <p className="text-sm">
                                    <span className="text-gray-600">Tahun Berdiri:</span>{' '}
                                    <span className="font-medium">{generalInfo.established}</span>
                                </p>
                                <p className="text-sm">
                                    <span className="text-gray-600">Kode Pos:</span>{' '}
                                    <span className="font-medium">{generalInfo.postalCode}</span>
                                </p>
                                <p className="text-sm">
                                    <span className="text-gray-600">Kecamatan:</span>{' '}
                                    <span className="font-medium">{generalInfo.district}</span>
                                </p>
                                <p className="text-sm">
                                    <span className="text-gray-600">Kabupaten:</span>{' '}
                                    <span className="font-medium">{generalInfo.regency}</span>
                                </p>
                                <p className="text-sm">
                                    <span className="text-gray-600">Provinsi:</span>{' '}
                                    <span className="font-medium">{generalInfo.province}</span>
                                </p>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-medium mb-3">Geografis</h4>
                            <div className="space-y-2">
                                <p className="text-sm">
                                    <span className="text-gray-600">Topografi:</span>{' '}
                                    <span className="font-medium">{generalInfo.topography}</span>
                                </p>
                                <p className="text-sm">
                                    <span className="text-gray-600">Ketinggian:</span>{' '}
                                    <span className="font-medium">{areaStats.altitude} mdpl</span>
                                </p>
                                <p className="text-sm">
                                    <span className="text-gray-600">Iklim:</span>{' '}
                                    <span className="font-medium">{areaStats.climate}</span>
                                </p>
                                <p className="text-sm">
                                    <span className="text-gray-600">Curah Hujan:</span>{' '}
                                    <span className="font-medium">{areaStats.rainfall} mm/tahun</span>
                                </p>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-medium mb-3">Potensi Desa</h4>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-sm text-gray-600 mb-2">Komoditas Utama:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {generalInfo.mainCommodities.map((commodity) => (
                                            <span
                                                key={commodity}
                                                className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium"
                                            >
                                                {commodity}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600 mb-2">Sektor Unggulan:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {generalInfo.potentials.map((potential) => (
                                            <span
                                                key={potential}
                                                className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium"
                                            >
                                                {potential}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="bg-white rounded-xl shadow-sm p-6"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center">
                                <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mr-4">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold">Batas Wilayah</h3>
                                    <p className="text-gray-600">Luas Total: {areaStats.area} Km²</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setShowBoundaries(!showBoundaries)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${showBoundaries
                                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {showBoundaries ? 'Sembunyikan Batas' : 'Tampilkan Batas'}
                            </button>
                        </div>

                        <div className="aspect-square rounded-lg overflow-hidden z-0 bg-gray-100 mb-6 relative">
                            <MapContainer
                                center={[-7.0257, 107.2073]}
                                zoom={14}
                                style={{ height: '100%', width: '100%' }}
                            >
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                />

                                {markers.map((marker, index) => (
                                    <Marker
                                        key={index}
                                        position={marker.position as L.LatLngExpression}
                                    >
                                        <Popup>
                                            <div>
                                                <h3 className="font-semibold">{marker.title}</h3>
                                                <p className="text-sm text-gray-600">{marker.description}</p>
                                            </div>
                                        </Popup>
                                    </Marker>
                                ))}

                                {showBoundaries && (
                                    <>
                                        <Polygon
                                            positions={boundaryCoordinates}
                                            pathOptions={{
                                                color: '#4F46E5',
                                                weight: 2,
                                                fillColor: '#4F46E5',
                                                fillOpacity: 0.1,
                                            }}
                                            eventHandlers={{
                                                click: () => setSelectedBoundary(selectedBoundary ? null : 'Sindangjaya'),
                                                mouseover: (e) => {
                                                    const layer = e.target;
                                                    layer.setStyle({
                                                        fillOpacity: 0.2,
                                                        weight: 3,
                                                    });
                                                },
                                                mouseout: (e) => {
                                                    const layer = e.target;
                                                    layer.setStyle({
                                                        fillOpacity: 0.1,
                                                        weight: 2,
                                                    });
                                                }
                                            }}
                                        >
                                            <Popup>
                                                <div>
                                                    <h3 className="font-semibold">Desa Sindangjaya</h3>
                                                    <p className="text-sm text-gray-600">Luas: {areaStats.area} Km²</p>
                                                    <p className="text-sm text-gray-600">Populasi: {formatNumber(currentYear.total)} jiwa</p>
                                                </div>
                                            </Popup>
                                        </Polygon>

                                        {boundaryLabels.map((label, index) => (
                                            <Marker
                                                key={index}
                                                position={label.position as L.LatLngExpression}
                                                icon={L.divIcon({
                                                    className: 'custom-div-icon',
                                                    html: `<div class="bg-white px-2 py-1 rounded shadow text-sm">${label.text}</div>`,
                                                    iconSize: [100, 20],
                                                    iconAnchor: [50, 10]
                                                })}
                                            >
                                                <Popup>
                                                    <div>
                                                        <h3 className="font-semibold">{label.text}</h3>
                                                        <p className="text-sm text-gray-600">Batas {label.direction}</p>
                                                    </div>
                                                </Popup>
                                            </Marker>
                                        ))}
                                    </>
                                )}
                            </MapContainer>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {Object.entries(boundaries).map(([direction, village]) => (
                                <div key={direction} className="bg-gray-50 p-4 rounded-lg">
                                    <div className="flex items-center mb-2">
                                        <Compass size={16} className="text-gray-500 mr-2" />
                                        <p className="font-medium capitalize">{direction}</p>
                                    </div>
                                    <p className="text-gray-700">{village}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="bg-white rounded-xl shadow-sm p-6"
                    >
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mr-4">
                                <Users size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">Kependudukan</h3>
                                <p className="text-gray-600">Tahun {currentYear.year}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <p className="text-sm text-gray-600 mb-1">Total Penduduk</p>
                                <p className="text-2xl font-bold text-primary-600">
                                    {formatNumber(currentYear.total)}
                                </p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <p className="text-sm text-gray-600 mb-1">Pertumbuhan</p>
                                <div className="flex items-center">
                                    {parseFloat(growthRate) >= 0 ? (
                                        <ArrowUp size={20} className="text-green-500" />
                                    ) : (
                                        <ArrowDown size={20} className="text-red-500" />
                                    )}
                                    <p className={`text-2xl font-bold ml-2 ${parseFloat(growthRate) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                        {growthRate}%
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="h-64 mb-6">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={populationData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="year" />
                                    <YAxis domain={['dataMin - 100', 'dataMax + 100']} />
                                    <Tooltip />
                                    <Legend />
                                    <Line
                                        type="monotone"
                                        name="Total"
                                        dataKey="total"
                                        stroke="#4F46E5"
                                        strokeWidth={2}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Distribusi per Dusun</h4>
                            <div className="space-y-4">
                                {currentYearData.regions.map((region) => (
                                    <div key={region.name} className="bg-gray-50 p-4 rounded-lg">
                                        <div className="flex justify-between items-center mb-2">
                                            <div className="flex items-center">
                                                <Building2 size={16} className="text-gray-500 mr-2" />
                                                <h5 className="font-medium">{region.name}</h5>
                                            </div>
                                            <span className={`text-sm font-medium px-2 py-1 rounded-full ${region.level === 'Rendah' ? 'bg-green-100 text-green-800' :
                                                region.level === 'Sedang' ? 'bg-yellow-100 text-yellow-800' :
                                                    'bg-red-100 text-red-800'
                                                }`}>
                                                {region.level}
                                            </span>
                                        </div>
                                        <div className="flex justify-between text-sm text-gray-600 mb-2">
                                            <span>Populasi: {formatNumber(region.population)}</span>
                                            <span>Kepadatan: {region.density} Jiwa/Ha</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="h-2 rounded-full"
                                                style={{
                                                    width: `${region.distribution}%`,
                                                    backgroundColor:
                                                        region.level === 'Rendah' ? '#22C55E' :
                                                            region.level === 'Sedang' ? '#F59E0B' :
                                                                '#EF4444'
                                                }}
                                            />
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1">
                                            {region.distribution.toFixed(2)}% dari total penduduk
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="bg-white rounded-xl shadow-sm p-6"
                >
                    <h4 className="font-semibold mb-4">Tingkat Kepadatan Penduduk</h4>
                    <div className="flex flex-wrap gap-6">
                        {densityLevels.map((level) => (
                            <div key={level.level} className="flex items-center">
                                <div
                                    className="w-4 h-4 rounded-full mr-2"
                                    style={{ backgroundColor: level.color }}
                                />
                                <div>
                                    <p className="font-medium">{level.level}</p>
                                    <p className="text-sm text-gray-600">{level.range}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default VillageProfile;