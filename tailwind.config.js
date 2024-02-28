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
      'grade-white-500': '#c7c7c7ff',
      'grade-white-600': '#b0b0b0ff',
      'grade-white-shadow-100': '#28282847',
      'grade-red-100': '#db264bff',
      'grade-red-200': '#b51c3fff',
      'grade-red-300': '#981535ff',
      'grade-modal-bg': '#c5c5c547'
    },
    fontFamily: {
      sans: ['Noto Sans', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif']
    },
    extend: {
      keyframes: {
        'open-button': {
          '0%': {'transform': 'scale(0)'},
          '100%': {'transform': 'scale(1)'}
        }
      },
      animation: {
        'open-button': 'open-button 0.15s ease-out'
      },
    },
  },
  plugins: [],
};
