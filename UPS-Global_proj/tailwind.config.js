/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "header": "80px",
        "para": "17px",
        "sub-head": "38px"
      }
    },
  },
  plugins: [],
}