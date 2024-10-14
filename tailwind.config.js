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
      why: "#464646",
      darkBlue: "#03112B",
      orange: "#FF7F50",
      lightGray: "#A3A3A3",
      darkGray: "#141414",
      light: "#CDCFD566",
    },
    extend: {
      animation: {
        "infinite-scroll": "infinite-scroll 40s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
