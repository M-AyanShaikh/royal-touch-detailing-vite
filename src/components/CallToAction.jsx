// CallToAction.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="text-center py-20 bg-[#FFD700] text-black border-t border-gray-300">
      <h3 className="text-3xl font-bold mb-4">Ready to Book?</h3>
      <p className="mb-6 text-lg">Let us bring the shine to your driveway—100% mobile and satisfaction guaranteed.</p>
      <Link
        to="/book"
        className="inline-block bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition shadow-md"
      >
        Book My Detail
      </Link>
    </section>
  );
};

export default CallToAction;
