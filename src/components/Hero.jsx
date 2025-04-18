// Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="text-center py-24 px-6 bg-white border-b border-gray-200">
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-black">Mississauga's #1 Mobile Car Detailing</h2>
      <p className="text-lg sm:text-xl mb-8 text-gray-700 max-w-2xl mx-auto">
        We come to you. Book a detail today and see why 100+ clients rated us 5 stars.
      </p>
      <Link
        to="/book"
        className="inline-block bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-[#FFD700] hover:text-black transition duration-300 shadow-md"
      >
        Book Now
      </Link>
    </section>
  );
};

export default Hero;
