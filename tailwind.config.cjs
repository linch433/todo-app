/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-bg': '#b08968',
        'buttons-hover-bg': '#7f5539',
        'buttons-bg': '#6c584c',
        'secondary-bg': '#9c6644',
        'input-bg': '#e6ccb2',
      },
      fontFamily: {
        'spaceGrotesk': ['Space Grotesk', 'sans-serif']
      }
    },
  },
  plugins: [],
}
