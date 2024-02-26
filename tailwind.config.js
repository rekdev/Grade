/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'grade-black-100': '#121212ff',
      'grade-black-200': '#303030ff',
      'grade-black-300': '#545454ff',
      'grade-black-400': '#636363ff',
      'grade-white-100': '#f5f5f5ff',
      'grade-white-200': '#f2f2f2ff',
      'grade-white-300': '#e5e5e5ff',
      'grade-white-400': '#d6d6d6ff',
      'grade-white-500': '#28282847',
      'grade-red-100': '#db264bff',
      'grade-red-200': '#b51c3fff',
      'grade-red-300': '#981535ff',
    },
    fontFamily: {
      sans: ['Noto Sans', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
};
