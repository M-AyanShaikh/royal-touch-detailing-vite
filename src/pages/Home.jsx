// Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import ServiceButton from '../components/ServiceButton';
import VehicleSelector from '../components/VehicleSelector';
import PackageComparison from '../components/PackageComparison';
import ReviewCarousel from '../components/ReviewCarousel';
import Portfolio from '../components/Portfolio';
import WhyUs from '../components/WhyUs';
import CallToAction from '../components/CallToAction';
import BlogSection from '../components/BlogSection';

const Home = () => {
  return (
    <div className="bg-white text-black font-sans">
      <Hero />
      <ServiceButton />
      <VehicleSelector />
      <PackageComparison />
      <ReviewCarousel />
      <Portfolio />
      <WhyUs />
      <CallToAction />
      <BlogSection />
    </div>
  );
};

export default Home;
