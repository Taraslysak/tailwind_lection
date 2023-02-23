/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing:{
        simple2b: "55px"
      },
      colors: {
        taras: '#555555',
        viking: {
          50: "#effbfc",
          100: "#d6f4f7",
          200: "#b2e8ef",
          300: "#64cfdd",
          400: "#41bccf",
          500: "#26a0b4",
          600: "#228198",
          700: "#22697c",
          800: "#245666",
          900: "#224957",
        },
      },
    },
  },
  plugins: [],
};
