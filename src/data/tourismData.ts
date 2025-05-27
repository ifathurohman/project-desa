export interface TourismSpot {
  id: number;
  name: string;
  description: string;
  image: string;
  location: string;
  hours: string;
  ticketPrice: string;
  facilities: string[];
  activities: string[];
  gallery: string[];
}

export const tourismData: TourismSpot[] = [
  {
    id: 1,
    name: 'Curug Ngebul',
    description: 'Curug Ngebul adalah air terjun unik yang memiliki fenomena "asap" yang muncul dari tekanan air yang menghantam bebatuan dasar. Menurut mitos lokal, nama ini berasal dari kejadian ketika seorang putri mandi di kolamnya dan mengeluarkan asap. Namun secara ilmiah, efek asap ini terjadi karena tekanan air yang menghantam bebatuan dasar, menciptakan percikan yang menyerupai asap.',
    image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    location: 'Desa Sindangjaya, Kecamatan Gununghalu, Kabupaten Bandung Barat',
    hours: 'Setiap hari, 07.00 - 17.00 WIB',
    ticketPrice: 'Rp7.500 per orang',
    facilities: [
      'Area parkir',
      'Toilet',
      'Saung dan gazebo',
      'Area berkemah',
      'Kedai dan warung makan'
    ],
    activities: [
      'Trekking',
      'Fotografi',
      'Berkemah',
      'Berenang',
      'Menikmati pemandangan alam'
    ],
    gallery: [
      'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1451076/pexels-photo-1451076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/2042092/pexels-photo-2042092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  }
];