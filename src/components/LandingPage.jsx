import React from 'react';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import TestimonialsSection from './TestimonialsSection';
import ContactForm from './ContactForm';
import Footer from './Footer';

const LandingPage = ({ config }) => {
  return (
    <div className="min-h-screen" dir={config.meta.direction}>
      <HeroSection config={config} />
      <FeaturesSection config={config} />
      <TestimonialsSection config={config} />
      <ContactForm config={config} />
      <Footer config={config} />
    </div>
  );
};

export default LandingPage;
