/** @type {import('tailwindcss').Config} */
export default {
  darkMode:"class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        customFont: ['"Dancing Script"', "cursive"],
        // Add more custom font families as needed
      },
      keyframes: {
        snowflake: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(100vh)', opacity: '0' },
        },
      },
      animation: {
        snowflake: 'snowflake linear infinite',
      },
    },
  },
  plugins: [],
}