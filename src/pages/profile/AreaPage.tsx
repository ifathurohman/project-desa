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
        image="https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <VillageProfile />
      <VillageStats />
    </div>
  );
};

export default Area;