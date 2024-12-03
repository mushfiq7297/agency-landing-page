/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f79426",
        secondary: "#faf5ef",
        navyBlue:"#2a2f40",
        stat:"#2a2a2a"
      },
    },
  },
  plugins: [],
}

