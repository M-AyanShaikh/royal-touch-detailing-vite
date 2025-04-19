import React from 'react';

const imageCount = 6; // Adjust this to match your number of images
const portfolioImages = Array.from({ length: imageCount }, (_, i) => `/portfolio/${i + 1}.jpg`);

const Portfolio = () => {
  return (
    <section className="py-20 px-6 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-semibold text-center mb-10 text-black">Our Work</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {portfolioImages.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Portfolio ${i + 1}`}
              className="rounded-lg shadow-md border border-gray-200 w-full object-cover h-64"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
