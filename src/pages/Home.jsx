import React from 'react';
import Hero from '../components/Hero';
import { AnimatedBeamSection } from '../components/AnimatedBeamSection';
import { ProcessSection } from '../components/ProcessSection';

const Home = () => {
  return (
    <>
      <Hero />
      <AnimatedBeamSection />
      <ProcessSection />
    </>
  );
};

export default Home;
