/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Include all JS, JSX, TS, and TSX files in the src directory
    './public/index.html', // Include the main HTML file
  ],
  theme: {
    container: {
      center: true
    },
    extend: {},
  },
  plugins: [],
}

