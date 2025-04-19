import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const blogs = [
  {
    title: '5 Reasons to Get Your Car Detailed Before Summer',
    summary:
      'Detailing your car before the hot months arrive protects your paint, interior, and increases resale value. Discover why summer prep is key.',
    link: '/blog/summer-detailing',
  },
  {
    title: 'Interior vs. Exterior Detailing: What’s the Difference?',
    summary:
      'Understand the core differences between interior and exterior detailing and learn which package best fits your car’s needs.',
    link: '/blog/interior-vs-exterior',
  },
  {
    title: 'How Ceramic Coatings Work (And Are They Worth It?)',
    summary:
      'Ceramic coatings offer long-term protection and shine, but are they worth the price? We break it down in this simple guide.',
    link: '/blog/ceramic-coating-guide',
  },
];

// Fade-in animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Blog = () => {
  return (
    <div className="bg-white text-black font-sans min-h-screen flex flex-col">
      <Navbar />

      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex-grow py-20 px-6 border-t border-gray-200"
      >
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-semibold text-center mb-10">Latest from Our Blog</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition"
              >
                <h4 className="text-xl font-bold text-[#FFD700] mb-2">{blog.title}</h4>
                <p className="text-gray-700 mb-4 text-sm">{blog.summary}</p>
                <a
                  href={blog.link}
                  className="text-sm font-semibold text-black hover:text-[#FFD700] transition"
                >
                  Read More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Blog;
