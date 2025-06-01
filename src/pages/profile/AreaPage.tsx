import React from 'react';
import PageHeader from '../../components/ui/PageHeader';
import VillageProfile from '../../components/VillageProfile';
import VillageStats from '../../components/VillageStats';

const Area: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="Wilayah Desa"
        description="Informasi mengenai wilayah dan kependudukan Desa Sindangjaya"
        image="https://images.pexels.com/photos/32345447/pexels-photo-32345447/free-photo-of-aerial-view-of-rural-czech-countryside-village.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <VillageProfile />
      <VillageStats />
    </div>
  );
};

export default Area;