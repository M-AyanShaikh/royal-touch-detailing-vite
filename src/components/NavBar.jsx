// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link to="/" className="text-xl font-bold text-black">
          Royal Touch Detailing
        </Link>
        <nav className="space-x-6 text-sm font-medium">
          <Link to="/" className="text-gray-700 hover:text-[#FFD700] transition">Home</Link>
          <Link to="/services" className="text-gray-700 hover:text-[#FFD700] transition">Services</Link>
          <Link to="/portfolio" className="text-gray-700 hover:text-[#FFD700] transition">Portfolio</Link>
          <Link to="/book" className="text-gray-700 hover:text-[#FFD700] transition">Book Now</Link>
          <Link to="/contact" className="text-gray-700 hover:text-[#FFD700] transition">Contact</Link>
          <Link to="/blog" className="text-gray-700 hover:text-[#FFD700] transition">Blog</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
