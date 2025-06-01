import React from 'react';
import PageHeader from '../../components/ui/PageHeader';
import VillageOfficials from '../../components/VillageOfficials';

const Organization: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="Struktur Organisasi" 
        description="Informasi mengenai struktur organisasi Desa Sindangjaya"
        image="https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <VillageOfficials />
    </div>
  );
};

export default Organization;