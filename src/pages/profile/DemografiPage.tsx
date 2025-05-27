import React from 'react';
import PageHeader from '../../components/ui/PageHeader';
import PopulationStats from '../../components/PopulationStats';
import CultureSection from '../../components/CultureSection';
import EducationFacilities from '../../components/EducationFacilities';
import HealthFacilities from '../../components/HealthFacilities';

const Demografi: React.FC = () => {
    return (
        <div>
            <PageHeader
                title="Demografi Desa"
                description="Informasi mengenai wilayah dan kependudukan Desa Sindangjaya"
                image="https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <CultureSection />
            <PopulationStats />
            <EducationFacilities />
            <HealthFacilities />
        </div>
    );
};

export default Demografi;