/** @type {import('tailwindcss').Config} */

const gray = {
  100: "#EFEFEF",
  200: "#dfdfdf",
  300: "#cfcfcf",
  500: "#8f8f8f",
  700: "#505050",
};

const textColor = {
  default: "#000000",
  secondary: "#707070",
};

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        gray,
      },
      textColor,
    },
  },
  plugins: [],
};
