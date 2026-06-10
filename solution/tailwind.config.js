/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        normal: '#d4d7ff',
        urgent: '#ffd9d4',
      },
    },
  },
  plugins: [],
};
