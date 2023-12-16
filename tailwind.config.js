/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EDF1D6",
        secondary: "#40513B",
      },
      backgroundColor: {
        primary: "#609966",
        primaryBox: "#9DC08B",
        primaryInput: "#EDF1D6",
      },
      boxShadow: {
        main: "0px 5px 15px 0px rgba(0, 0, 0, 0.25)",
      },
      dropShadow: {
        main: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        serif: ["Averia Serif Libre"],
      },
    },
  },
  plugins: [],
}
