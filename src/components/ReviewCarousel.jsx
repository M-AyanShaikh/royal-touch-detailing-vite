import React, { useEffect, useRef, useState } from 'react';

const reviewCount = 15;
const reviews = Array.from({ length: reviewCount }, (_, i) => `/reviews/${i + 1}.jpg`);

const ReviewCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  const intervalRef = useRef(null);

  const startAutoScroll = () => {
    intervalRef.current = setInterval(() => {
      setFade(false); // fade out
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % reviews.length);
        setFade(true); // fade in new image
      }, 300); // match the fade duration
    }, 4000);
  };

  const stopAutoScroll = () => clearInterval(intervalRef.current);

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  const getPrevIndex = () => (current - 1 + reviews.length) % reviews.length;
  const getNextIndex = () => (current + 1) % reviews.length;

  return (
    <section className="py-20 px-6 bg-[#F9F9F9] border-b border-gray-200">
      <h3 className="text-3xl font-semibold mb-10 text-center text-black">What Our Clients Say</h3>

      <div
        className="relative flex items-center justify-center w-full max-w-5xl mx-auto overflow-hidden"
        onMouseEnter={stopAutoScroll}
        onMouseLeave={startAutoScroll}
      >
        {/* Previous (left) */}
        <img
          src={reviews[getPrevIndex()]}
          alt="Previous"
          className="w-1/4 h-64 object-contain opacity-90 blur-sm scale-90 hidden md:block transition-all duration-700"
        />

        {/* Center (main) */}
        <div className="w-full md:w-1/2 h-64 flex items-center justify-center">
          <img
            src={reviews[current]}
            alt={`Review ${current + 1}`}
            className={`w-full h-full object-contain z-10 transition-opacity duration-700 ease-in-out ${
              fade ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>

        {/* Next (right) */}
        <img
          src={reviews[getNextIndex()]}
          alt="Next"
          className="w-1/4 h-64 object-contain opacity-90 blur-sm scale-90 hidden md:block transition-all duration-700"
        />
      </div>
    </section>
  );
};

export default ReviewCarousel;
