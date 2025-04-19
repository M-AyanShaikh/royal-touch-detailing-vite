import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import VehicleSelector from '../components/VehicleSelector';
import WhyUs from '../components/WhyUs';
import ReviewCarousel from '../components/ReviewCarousel';
import Portfolio from '../components/Portfolio';
import CallToAction from '../components/CallToAction';
import BlogSection from '../components/BlogSection';
import Footer from '../components/Footer';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Home = () => {
  return (
    <div className="bg-white text-gray-100 font-sans">
      <Navbar />

      {/* Hero Section */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible" // Trigger animation immediately
      >
        <Hero />
      </motion.div>

      {/* Vehicle Selector */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible" // Trigger animation immediately
      >
        <VehicleSelector />
      </motion.div>

      {/* Why Us Section */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible" // Trigger animation when in view
        viewport={{ once: true }}
      >
        <WhyUs />
      </motion.div>

      {/* Review Carousel */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible" // Trigger animation when in view
        viewport={{ once: true }}
      >
        <ReviewCarousel />
      </motion.div>

      {/* Portfolio */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible" // Trigger animation when in view
        viewport={{ once: true }}
      >
        <Portfolio />
      </motion.div>

      {/* Call to Action */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible" // Trigger animation when in view
        viewport={{ once: true }}
      >
        <CallToAction />
      </motion.div>

      {/* Blog Section */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible" // Trigger animation when in view
        viewport={{ once: true }}
      >
        <BlogSection />
      </motion.div>

      <Footer />
    </div>
  );
};

export default Home;
