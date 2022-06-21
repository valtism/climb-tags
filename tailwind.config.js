/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Ubuntu: ["Ubuntu", "sans-serif"],
        icomoon: ["icomoon", "sans-serif"],
      },
    },
  },
  plugins: [],
};
