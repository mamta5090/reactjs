/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Vite uses index.html at the root
    "./src/**/*.{js,jsx,ts,tsx}", // Tailwind scans all files in src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
