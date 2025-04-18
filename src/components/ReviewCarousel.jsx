// ReviewCarousel.jsx
import React from 'react';

const reviews = [
  './public/review1.png',
  './public/review2.png',
  './public/review3.png',
  './public/review4.png',
];

const ReviewCarousel = () => {
  return (
    <section className="py-20 px-6 bg-[#F9F9F9] border-b border-gray-200">
      <h3 className="text-3xl font-semibold mb-10 text-center text-black">What Our Clients Say</h3>
      <div className="flex overflow-x-auto gap-6 scrollbar-hide">
        {reviews.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Review ${i + 1}`}
            className="h-48 w-auto rounded-lg shadow-md border border-gray-200 flex-shrink-0"
          />
        ))}
      </div>
    </section>
  );
};

export default ReviewCarousel;