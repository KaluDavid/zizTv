/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat, sans-serif"],
      ribeye: ["Ribeye"],
      grotesk: ["Schibsted Grotesk, sans-serif"],
      poppins: ["Poppins, sans-serif"],
    },
    colors: {
      white: "#ffffff",
      gray: "#292929",
      darkBlue: "#03112B",
      orange: "#FF7F50",
      lightGray: "#A3A3A3",
      darkGray: "#141414",
      light: "#CDCFD566",
    },
    extend: {},
  },
  plugins: [],
};
