/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Set Poppins as default sans-serif
        poppins: ['Poppins', 'sans-serif'], // Or use `font-poppins` class if you want it separate
      },
    },
  },
  plugins: [],
}

