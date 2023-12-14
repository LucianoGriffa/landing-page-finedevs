/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'finedevs-red': '#FF3434',
        'finedevs-black': '#110F0F',
        'finedevs-white': '#ffffff',
        'finedevs-grey': 'rgba(255, 255, 255, 0.60)'
      },
    },
    fontFamily: {
      'finedevs-font': ['"Poppins", sans-serif']
    }
  },
  plugins: [require("daisyui")],
}