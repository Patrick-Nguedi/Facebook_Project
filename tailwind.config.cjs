// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{vue,js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      black: '#000000',
      'blue-100': '#E5F2FF',
      'blue-200': '#F9FCFF',
      'blue-400': '#66B2FF',
      'blue-500': '#0069D1',
      'blue-600': '#0F2E52',
      'blue-900': '#001933',
      'gray-50': '#F6F8FA',
      'gray-100': '#A3ABC2',
      'gray-200': '#F0F1F5',
      'gray-300': '#49536E',
      'gray-400': '#C2C7D6',
      'gray-700': 'rgba(132, 143, 174, 0.15)',
      'gray-900': '#1D1A1A',
      'green-50': '#DFF5EA',
      'green-400': '#00B05A',
      'green-900': 'rgba(0,176,90,0.3)',
      'neutral-500': '#49536E',
      'red-100': 'rgba(255, 50, 54, 0.13)',
      'red-900': '#F82F2F',
      'sky-50': '#F1F8FF',
      'sky-100': '#E5F2FF',
      'teal-900': '#2EC4B6',
      white: '#FFFFFF',
      'yellow-400': '#FFAD0D',
      'yellow-900': 'rgba(255,173,13,0.3)'
    },
    extend: {},
    fontFamily: {
      outfit: ['Outfit', 'sans-serif'],
      abrilfatface: ['Abril Fatface', 'sans-serif']
    }
  },
  plugins: []
}
