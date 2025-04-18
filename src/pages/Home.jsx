import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import VehicleSelector from '../components/VehicleSelector';
import PackageComparison from '../components/PackageComparison';
import WhyUs from '../components/WhyUs';
import ReviewCarousel from '../components/ReviewCarousel';
import Portfolio from '../components/Portfolio';
import ServiceButton from '../components/ServiceButton';
import CallToAction from '../components/CallToAction';
import BlogSection from '../components/BlogSection';
import Footer from '../components/Footer';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Home = () => {
  return (
    <div className="bg-black text-gray-100 font-sans">
      <Navbar />

      <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Hero />
      </motion.div>

      <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <VehicleSelector />
      </motion.div>

      <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <PackageComparison />
      </motion.div>

      <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <WhyUs />
      </motion.div>

      <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <ReviewCarousel />
      </motion.div>

      <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Portfolio />
      </motion.div>

      <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <ServiceButton />
      </motion.div>

      <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <CallToAction />
      </motion.div>

      <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <BlogSection />
      </motion.div>

      <Footer />
    </div>
  );
};

export default Home;
