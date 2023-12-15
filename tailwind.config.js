/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    textColor: {
      HeaderText: '#EDF1D6',
      FooterText: '#40513B',
    },
    backgroundColor: {
      main: '#609966',
      box: '#9DC08B',
    },
    boxShadow: {
      main: '0px 5px 15px 0px rgba(0, 0, 0, 0.25);',
    },
    fontFamily: {
      serif: ['Averia Serif Libre'],
    },

    extend: {},
  },
  plugins: [],
}
