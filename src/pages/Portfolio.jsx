import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const portfolioImages = Array.from({ length: 18 }, (_, i) => `/portfolio/${i + 1}.jpg`);

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Portfolio = () => {
  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Navbar />

      <motion.header
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="text-center py-16"
      >
        <h1 className="text-4xl font-bold text-[#FFD700] mb-4">Our Portfolio</h1>
        <p className="text-lg text-gray-300">
          Explore the vehicles we’ve transformed with our mobile detailing expertise.
        </p>
      </motion.header>

      <div className="px-6 md:px-20 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {portfolioImages.map((src, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-lg shadow-md border border-gray-700 cursor-pointer"
              onClick={() => setLightboxImage(i)}
              >
              <img
                src={src}
                alt={`Portfolio ${i + 1}`}
                className="w-full h-64 md:h-80 lg:h-[24rem] object-cover transform transition duration-300 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {lightboxImage !== null && (
  <div
    className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center"
    onClick={(e) => {
      if (e.target.id === 'lightbox-overlay') setLightboxImage(null);
    }}
    id="lightbox-overlay"
  >
    <img
      src={portfolioImages[lightboxImage]}
      alt={`Portfolio ${lightboxImage + 1}`}
      className="max-w-[90%] max-h-[80vh] rounded shadow-lg mb-6"
    />
    <div className="flex items-center gap-6 text-white">
      <button
        onClick={(e) => {
          e.stopPropagation();
          setLightboxImage((lightboxImage - 1 + portfolioImages.length) % portfolioImages.length);
        }}
        className="text-3xl px-4 py-2 hover:text-[#FFD700] transition"
      >
        &#8592; 
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setLightboxImage((lightboxImage + 1) % portfolioImages.length);
        }}
        className="text-3xl px-4 py-2 hover:text-[#FFD700] transition"
      >
        &#8594;
      </button>
    </div>
    <button
      className="absolute top-4 right-6 text-white text-3xl font-bold"
      onClick={() => setLightboxImage(null)}
    >
      &times;
    </button>
  </div>
)}


      <Footer />
    </div>
  );
};

export default Portfolio;
