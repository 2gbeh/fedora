/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./modules/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#eeeef1",
        brand: "#db1a5a",
        accent: "#19db9a",
      },
    },
  },
  plugins: [],
};
