/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#1B1B1B",
        light: "#F5F5F5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
      },
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #F5F5F5 5px, #F5F5F5 100px)",
        circularDark:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #1B1B1B 8px, #1B1B1B 100px)",
      },
    },
  },
  plugins: [],
};
