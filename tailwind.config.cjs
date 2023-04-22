/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'spaceGrotesk': ['Space Grotesk', 'sans-serif']
      }
    },
  },
  plugins: [],
}
