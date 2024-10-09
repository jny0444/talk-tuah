/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ['Pacifico', 'sans-serif'],
        marker: ['Permanent Marker', 'sans-serif'],
        space: ['Space Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}