/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          black: "#121212",
        },
      },
    },
    plugins: [],
  }
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        gold: '#FFD700', // Hex code for gold
      },
    },
  },
}

  // tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        fadein: 'fadein 0.7s ease-in-out forwards',
      },
      keyframes: {
        fadein: {
          '0%': { opacity: 0, transform: 'scale(0.98)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
      },
    },
  },

};

  