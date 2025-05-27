export interface DocumentService {
  id: string;
  name: string;
  description: string;
  fileSize?: string;
  category: 'identity' | 'business' | 'residence' | 'family' | 'other';
  pdfUrl?: string;
  formUrl?: string; 
}

export const documentServicesData: DocumentService[] = [
  {
    id: 'sk-domisili',
    name: 'RPJMDes',
    description: 'Dokumen Rencana Pembangunan Jangka Menengah Desa (RPJMDes) Sindangjaya 2022 - 2027',
    fileSize: '21 mb',
    category: 'other',
    pdfUrl: '/src/assets/documents/RPJMDes Sindangjaya.pdf',
    formUrl: '/src/assets/documents/RPJMDes Sindangjaya.pdf'
  }
];