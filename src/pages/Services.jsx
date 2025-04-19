import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import InteriorImage from '../assets/interior-detailing.jpg';
import ExteriorImage from '../assets/exterior-detailing.jpeg';
import CeramicImage from '../assets/ceramic-coatings.jpeg';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Services = () => {
  const services = [
    {
      title: 'Package Detailing',
      description:
        'Comprehensive care for both the inside and outside of your vehicle. Restore its pristine condition and protect it from wear and tear with our premium detailing services.',
      image: CeramicImage,
      link: '/packages/package',
    },
    {
      title: 'Interior Detailing',
      description:
        'Does the inside of your car need a refresh? Carpets looking a bit muddy or got a few stains in your seats? Take a look at our interior packages to get your car feeling brand new!',
      image: InteriorImage,
      link: '/packages/interior',
    },
    {
      title: 'Exterior Detailing',
      description:
        'Does your car have one too many mud spots? Bird droppings and tree sap plaguing your paint? Look through our exterior services to get your car looking like it just drove out of the dealership!',
      image: ExteriorImage,
      link: '/packages/exterior',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <motion.header
        variants={fadeIn}
        initial="hidden"
        animate="visible" // Trigger animation immediately
        className="text-center py-16"
      >
        <h1 className="text-4xl font-bold text-[#FFD700] mb-4">Our Services</h1>
        <p className="text-lg text-gray-300">
          Choose from our premium car detailing services to keep your vehicle looking its best.
        </p>
      </motion.header>

      {/* Services List */}
      <div className="space-y-16 px-6 md:px-20">
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible" // Trigger animation when in view
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            } items-center gap-8`}
          >
            {/* Image */}
            <div className="group relative block w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg hover:shadow-[0_0_20px_5px_#FFD700] transition-shadow z-10">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Description */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-bold text-[#FFD700]">{service.title}</h2>
              <p className="text-gray-300 mt-4">{service.description}</p>
              {/* Packages Button */}
              <a
                href={service.link}
                className="inline-block mt-6 bg-[#FFD700] text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[#FFD700] transition-all"
              >
                Packages
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Services;