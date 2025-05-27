import React from 'react';
import HeroSection from '../components/home/HeroSection';
import QuickLinks from '../components/home/QuickLinks';
import VillageMap from '../components/home/VillageMap';
import LatestNews from '../components/home/LatestNews';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <QuickLinks />
      <VillageMap />
      <LatestNews />
    </div>
  );
};

export default HomePage;