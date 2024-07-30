/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'custom-yellow': '#FFDF00',
      }
    },

    fontFamily: {
      'oxanium': ['Oxanium', 'sans-serif'],
      'Audiowide': ['Audiowide', 'sans-serif']
    },
  },
  plugins: [],
}
