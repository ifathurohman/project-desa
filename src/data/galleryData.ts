export interface GalleryItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
}

export const galleryData: GalleryItem[] = [
  {
    id: 1,
    title: 'Musyawarah Desa RKPDes 2024',
    description: 'Kegiatan musyawarah desa untuk menetapkan Rencana Kerja Pemerintah Desa tahun 2024.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'event',
    date: '15 April 2024'
  },
  {
    id: 2,
    title: 'Pelatihan Pengolahan Kopi',
    description: 'Petani desa mengikuti pelatihan pengolahan kopi untuk meningkatkan kualitas produksi.',
    image: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'development',
    date: '10 April 2024'
  },
  {
    id: 3,
    title: 'Pembangunan Saluran Irigasi',
    description: 'Proyek pembangunan saluran irigasi di Dusun Cisitu untuk mendukung pertanian.',
    image: 'https://images.pexels.com/photos/1483880/pexels-photo-1483880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'development',
    date: '5 April 2024'
  },
  {
    id: 4,
    title: 'Kebun Kopi Desa',
    description: 'Perkebunan kopi yang menjadi salah satu komoditas unggulan Desa Sindangjaya.',
    image: 'https://images.pexels.com/photos/2909083/pexels-photo-2909083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'agriculture',
    date: '1 April 2024'
  },
  {
    id: 5,
    title: 'Sawah Desa Sindangjaya',
    description: 'Hamparan sawah yang menjadi sumber penghasilan utama warga desa.',
    image: 'https://images.pexels.com/photos/2258536/pexels-photo-2258536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'agriculture',
    date: '28 Maret 2024'
  }
];