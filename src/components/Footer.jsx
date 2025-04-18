import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import Logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-100 py-8 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-6">
        {/* Hours of Operation */}
        <div className="text-center md:text-left mt-6 md:mt-0 pl-4">
          <h3 className="text-lg font-semibold text-[#FFD700]">Hours of Operation</h3>
          <p className="text-gray-300">Mon - Fri: 7:00 AM - 11:00 PM</p>
          <p className="text-gray-300">Sat - Sun: 8:00 AM - 11:00 PM</p>
        </div>

        {/* Business Name and Logo */}
        <div className="flex flex-col items-center">
          <img
            src={Logo}
            alt="Business Logo"
            className="h-12 mb-2"
          />
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center space-y-4 md:items-end">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#FFD700] transition-colors"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#FFD700] transition-colors"
          >
            <Instagram className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;