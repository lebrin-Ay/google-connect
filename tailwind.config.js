/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "lato": ['Lato', 'sans-serif']
      },
      colors: {
        bgColor: "#F2F3F5",
      }
    },
  },
  plugins: [],
}

