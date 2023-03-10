/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "primary-600": "#134730",
        "primary-500": "#25855A",
        "primary-400": "#3b916b",
        "primary-300": "#519d7b",
        "primary-200": "#F0FFF4",
        cream: "#EBD6A8"
      },
      fontFamily: {
        "fira-sans": "'Fira Sans', sans-serif"
      },
      spacing: {
        "header-height": "80px",
        "sidebar-width": "250px"
      }
    }
  },
  plugins: []
}
