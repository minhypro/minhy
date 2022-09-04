/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      scale: {
        '102': '1.02'
      },
      keyframes: {
        fade: {
          '0%': { opacity: 1},
          '40%': { opacity: 0.5},
          '100%': { opacity: 0},
        }
      }
    },
  },
  plugins: [
  ],
}