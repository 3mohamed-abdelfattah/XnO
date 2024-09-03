/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#DCBF3F",
        secondary: "#72CFF9",
        background: "#5A1E76",
      },
      screens: {
      },
    },
  },
  plugins: [],
}