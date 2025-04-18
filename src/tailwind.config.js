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
          gold: "#f5b301",
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
};

  