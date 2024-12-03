/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#38b6ff",
        secondary: "#000000",
        navyBlue:"#818388",
        stat:"#2a2a2a"
      },
    },
  },
  plugins: [],
}

