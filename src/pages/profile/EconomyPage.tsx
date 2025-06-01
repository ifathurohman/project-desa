import React from 'react';
import PageHeader from '../../components/ui/PageHeader';
import AgricultureStats from '../../components/AgricultureStats';

const Economy: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="Ekonomi Desa"
        description="Informasi mengenai ekonomi dan kependudukan Desa Sindangjaya"
        image="https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <AgricultureStats />
    </div>
  );
};

export default Economy;