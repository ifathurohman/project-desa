export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

export const newsData: NewsItem[] = [
  {
    id: 1,
    title: 'Musyawarah Desa Penetapan RKPDes Tahun 2024',
    excerpt: 'Desa Sindangjaya menyelenggarakan Musyawarah Desa untuk menetapkan Rencana Kerja Pemerintah Desa (RKPDes) tahun 2024.',
    content: `<p>Desa Sindangjaya, Kecamatan Gununghalu - Pemerintah Desa Sindangjaya mengadakan Musyawarah Desa (Musdes) untuk menetapkan Rencana Kerja Pemerintah Desa (RKPDes) tahun 2024. Kegiatan ini dihadiri oleh perangkat desa, BPD, tokoh masyarakat, dan perwakilan warga.</p>

    <p>Dalam musyawarah ini dibahas berbagai program prioritas yang akan dilaksanakan pada tahun 2024, termasuk pembangunan infrastruktur, pengembangan ekonomi desa, dan peningkatan pelayanan publik.</p>
    
    <p>Beberapa program prioritas yang disepakati antara lain:</p>
    <ul>
      <li>Pembangunan dan perbaikan jalan desa</li>
      <li>Pengembangan BUMDes</li>
      <li>Peningkatan fasilitas kesehatan</li>
      <li>Program pemberdayaan masyarakat</li>
    </ul>`,
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: '15 April 2024',
    author: 'Admin Desa',
    category: 'pemerintahan'
  },
  {
    id: 2,
    title: 'Pelatihan Pengolahan Kopi untuk Petani Desa',
    excerpt: 'Kelompok tani Desa Sindangjaya mengikuti pelatihan pengolahan kopi untuk meningkatkan kualitas produksi.',
    content: `<p>Desa Sindangjaya, Kecamatan Gununghalu - Kelompok tani Desa Sindangjaya mengikuti pelatihan pengolahan kopi yang diselenggarakan bekerjasama dengan Dinas Pertanian Kabupaten Bandung Barat. Pelatihan ini bertujuan untuk meningkatkan kualitas produksi kopi lokal.</p>

    <p>Pelatihan mencakup berbagai aspek pengolahan kopi, mulai dari pemilihan biji, proses roasting, hingga pengemasan. Para petani juga mendapatkan pengetahuan tentang standar kualitas dan pemasaran produk kopi.</p>`,
    image: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: '10 April 2024',
    author: 'Admin Desa',
    category: 'ekonomi'
  },
  {
    id: 3,
    title: 'Pembangunan Saluran Irigasi Dusun Cisitu',
    excerpt: 'Proyek pembangunan saluran irigasi di Dusun Cisitu untuk mendukung pertanian warga.',
    content: `<p>Desa Sindangjaya, Kecamatan Gununghalu - Pemerintah Desa Sindangjaya memulai pembangunan saluran irigasi di Dusun Cisitu. Proyek ini bertujuan untuk meningkatkan produktivitas pertanian di wilayah tersebut.</p>

    <p>Saluran irigasi sepanjang 2 kilometer ini akan mengairi area persawahan seluas 50 hektar. Pembangunan ditargetkan selesai dalam waktu tiga bulan.</p>`,
    image: 'https://images.pexels.com/photos/1483880/pexels-photo-1483880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: '5 April 2024',
    author: 'Admin Desa',
    category: 'pembangunan'
  }
];