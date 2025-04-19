import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: "url('/portfolio/18.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '60vh', // default height
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      {/* Responsive height override using media queries */}
      <style>
        {`
          @media (max-width: 768px) {
            section.hero-section {
              height: 50vh !important;
            }
          }
          @media (max-width: 480px) {
            section.hero-section {
              height: 45vh !important;
            }
          }
        `}
      </style>

      {/* Add a class to target via CSS */}
      <div className="hero-section" />

      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div style={{ zIndex: 1, color: 'white', maxWidth: '720px', padding: '0 1rem' }}>
        <h2 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: 'bold', marginBottom: '1rem' }}>
          Mississauga's #1 Mobile Car Detailing
        </h2>
        <p style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)', marginBottom: '2rem', color: '#ccc' }}>
          We come to you. Book a detail today and see why 100+ clients rated us 5 stars.
        </p>
        <Link
          to="/booking"
          style={{
            backgroundColor: 'white',
            color: 'black',
            padding: '0.6rem 1.5rem',
            borderRadius: '999px',
            fontWeight: '600',
            textDecoration: 'none',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            fontSize: 'clamp(0.9rem, 2vw, 1rem)',
          }}
        >
          Book Now
        </Link>
      </div>
    </section>
  );
};

export default Hero;
