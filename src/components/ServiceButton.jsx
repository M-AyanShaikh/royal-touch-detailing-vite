// ServiceButton.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceButton = () => {
  return (
    <section className="text-center py-12 px-6 bg-[#FAFAFA] border-b border-gray-200">
      <h3 className="text-2xl font-semibold mb-4 text-black">See all our detailing services</h3>
      <Link
        to="/services"
        className="inline-block bg-[#FFD700] text-black px-6 py-3 rounded-full font-medium hover:bg-black hover:text-white transition"
      >
        View Services
      </Link>
    </section>
  );
};

export default ServiceButton;