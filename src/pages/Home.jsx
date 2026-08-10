import React from 'react';
import ConstructionScrollExperience from '../components/home/ConstructionScrollExperience';
import HeroContent from '../components/home/HeroContent';
import ScrollStages from '../components/home/ScrollStages';
import Stats from '../components/home/Stats';
import FeaturedProjects from '../components/home/FeaturedProjects';
import ServicesPreview from '../components/home/ServicesPreview';
import Process from '../components/home/Process';
import Testimonial from '../components/home/Testimonial';
import FinalCTA from '../components/home/FinalCTA';

const Home = () => {
  return (
    <main style={{ position: 'relative', width: '100%' }}>
      {/* Hero content */}
      <HeroContent />

      <Stats />
      <FeaturedProjects />
      <ServicesPreview />
      <Process />
      <Testimonial />
      <FinalCTA />
    </main>
  );
};

export default Home;
