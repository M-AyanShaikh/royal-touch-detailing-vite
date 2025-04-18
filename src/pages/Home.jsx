import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    
    <div className="bg-[#121212] text-white font-sans">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-[#1a1a1a] shadow-md">
        <h1 className="text-2xl font-bold text-gold">Royal Touch Detailing</h1>
        <nav className="space-x-6 text-sm">
          <Link to="Services" className="hover:text-gold">Services</Link>
          <Link to="/book" className="hover:text-gold">Book Now</Link>
          <Link to="/portfolio" className="hover:text-gold">Portfolio</Link>
          <Link to="/contact" className="hover:text-gold">Contact</Link>
        </nav>
      </header>
      <div className="bg-black text-gold p-6 text-center">
        <h1 className="text-3xl font-bold">Tailwind is working 🎯</h1>
    </div>

      {/* Hero Banner */}
      <section className="text-center py-20 px-6 bg-[#181818]">
        <h2 className="text-4xl font-bold mb-4 text-gold">Mississauga's #1 Mobile Car Detailing Service</h2>
        <p className="text-lg mb-6 text-gray-300">We come to you. Book a detail today and see why 100+ clients rated us 5 stars.</p>
        <Link to="/book" className="bg-gold text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition">Book Now</Link>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h3 className="text-3xl font-semibold mb-6 text-gold text-center">Our Packages</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-[#1f1f1f] text-gold">
                <th className="p-4 border-b border-gray-700">Package</th>
                <th className="p-4 border-b border-gray-700">Interior</th>
                <th className="p-4 border-b border-gray-700">Exterior</th>
                <th className="p-4 border-b border-gray-700">Engine Bay</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-[#202020] hover:bg-[#2a2a2a]">
                <td className="p-4 border-b border-gray-700">Basic</td>
                <td className="p-4 border-b border-gray-700">Vacuum + Wipe Down</td>
                <td className="p-4 border-b border-gray-700">Wash & Dry</td>
                <td className="p-4 border-b border-gray-700">-</td>
              </tr>
              <tr className="bg-[#202020] hover:bg-[#2a2a2a]">
                <td className="p-4 border-b border-gray-700">Premium</td>
                <td className="p-4 border-b border-gray-700">Shampoo + Leather Treat</td>
                <td className="p-4 border-b border-gray-700">Clay + Wax</td>
                <td className="p-4 border-b border-gray-700">-</td>
              </tr>
              <tr className="bg-[#202020] hover:bg-[#2a2a2a]">
                <td className="p-4 border-b border-gray-700">Elite</td>
                <td className="p-4 border-b border-gray-700">Steam Clean + Protection</td>
                <td className="p-4 border-b border-gray-700">Detail + Wax + Tire Shine</td>
                <td className="p-4 border-b border-gray-700">Yes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 px-6 bg-[#181818] text-center">
        <h3 className="text-3xl font-semibold mb-6 text-gold">What Our Clients Say</h3>
        <div className="flex flex-wrap justify-center gap-6">
          <img src="/reviews/review1.png" alt="Review 1" className="h-40 w-auto rounded-md shadow-md" />
          <img src="/reviews/review2.png" alt="Review 2" className="h-40 w-auto rounded-md shadow-md" />
          <img src="/reviews/review3.png" alt="Review 3" className="h-40 w-auto rounded-md shadow-md" />
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h3 className="text-3xl font-semibold mb-4 text-center text-gold">Why Choose Royal Touch?</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc pl-6 text-gray-300">
          <li>Completely Mobile – We come to you</li>
          <li>100% Satisfaction Guarantee</li>
          <li>100+ 5 Star Reviews</li>
          <li>3+ Years in Service</li>
          <li>Licensed and Insured</li>
          <li>Serving the Greater Toronto Area</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center py-16 bg-gold text-black">
        <h3 className="text-3xl font-bold mb-4">Ready to Book?</h3>
        <Link to="/book" className="bg-black text-gold px-6 py-3 rounded-full font-semibold hover:bg-[#1a1a1a] transition">Get Started</Link>
      </section>

      <footer className="text-center py-4 text-sm bg-[#1a1a1a] text-gray-400">
        &copy; {new Date().getFullYear()} Royal Touch Detailing. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
