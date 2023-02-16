/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
"./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui'), require('@shrutibalasa/tailwind-grid-auto-fit')],
}
