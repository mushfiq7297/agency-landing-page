/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f79426",
        secondary: "#faf5ef",
        navyBlue:"#2a2f40",
      },
    },
  },
  plugins: [],
}

