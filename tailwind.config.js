/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#c9252f",
          200: "#ebbb4a",
          300: "#f7ee8b",
          400: "#3a3a3c",
          500: "#d1d2d4"
        }
      },
    },
  },
  plugins: [],
}

