// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <header className="w-full bg-black border-b border-gray-700 shadow-sm sticky top-0 z-50">
      <div className="mx-auto flex justify-between items-center px-6 py-4">
        <Link to="/" className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="max-h-[10em] max-w-[10em] object-contain" />
          <span className="text-xl font-bold text-white">Royal Touch Detailing</span>
        </Link>
        <nav className="space-x-6 text-sm font-medium">
          <Link to="/" className="text-white hover:text-gray-400 transition">Home</Link>
          <Link to="/services" className="text-white hover:text-gray-400 transition">Services</Link>
          <Link to="/portfolio" className="text-white hover:text-gray-400 transition">Portfolio</Link>
          <Link to="/book" className="text-white hover:text-gray-400 transition">Book Now</Link>
          <Link to="/contact" className="text-white hover:text-gray-400 transition">Contact</Link>
          <Link to="/blog" className="text-white hover:text-gray-400 transition">Blog</Link>
          <Link
            to="/book"
            className="inline-block bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-200 hover:text-black transition shadow-md"
          >
            Book Now
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
