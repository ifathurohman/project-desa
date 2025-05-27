export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  seller: string;
  contact: string;
}

export const productData: Product[] = [
  {
    id: 1,
    name: 'Kopi Arabika Sindangjaya',
    description: 'Kopi arabika premium yang ditanam di ketinggian 1000 mdpl di Desa Sindangjaya. Memiliki cita rasa fruity dengan tingkat keasaman yang seimbang.',
    price: 125000,
    image: 'https://images.pexels.com/photos/4820714/pexels-photo-4820714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'kuliner',
    seller: 'Kelompok Tani Kopi Sindangjaya',
    contact: '081234567890'
  },
  {
    id: 2,
    name: 'Beras Merah Organik',
    description: 'Beras merah organik hasil pertanian Desa Sindangjaya. Ditanam tanpa pestisida kimia dan dipanen dengan metode tradisional.',
    price: 35000,
    image: 'https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'pertanian',
    seller: 'Kelompok Tani Organik Sindangjaya',
    contact: '082345678901'
  },
  {
    id: 3,
    name: 'Kerajinan Anyaman Bambu',
    description: 'Kerajinan tangan berupa anyaman bambu yang dibuat oleh pengrajin Desa Sindangjaya. Tersedia dalam berbagai bentuk seperti keranjang dan wadah serbaguna.',
    price: 75000,
    image: 'https://images.pexels.com/photos/5816934/pexels-photo-5816934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'kerajinan',
    seller: 'Kelompok Pengrajin Bambu Sindangjaya',
    contact: '083456789012'
  },
  {
    id: 4,
    name: 'Sayuran Organik',
    description: 'Sayuran segar organik dari kebun petani Desa Sindangjaya. Tersedia berbagai jenis sayuran sesuai musim.',
    price: 25000,
    image: 'https://images.pexels.com/photos/2255903/pexels-photo-2255903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'pertanian',
    seller: 'Kelompok Tani Sayur Sindangjaya',
    contact: '084567890123'
  }
];