import React from 'react';
import { motion } from 'framer-motion';

const PackageCard = ({ pkg, onClick }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative bg-gray-800 rounded-lg shadow-lg w-full md:w-80 h-80 text-center cursor-pointer overflow-hidden group"
      onClick={onClick}
    >
      {/* Service Name */}
      <div className="absolute inset-0 flex items-center justify-center bg-gray-800 text-[#FFD700] text-2xl font-bold group-hover:translate-y-[-50%] transition-transform duration-300">
        {pkg.title}
      </div>
      {/* Short Description */}
      <div className="absolute inset-0 flex items-center justify-center bg-gray-900 text-gray-300 text-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
        {pkg.shortDescription}
      </div>
    </motion.div>
  );
};

export default PackageCard;