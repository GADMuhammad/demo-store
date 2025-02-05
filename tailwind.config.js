/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-pink": "hsl(275, 100%, 97%)",
        "grayish-purple": "hsl(292, 16%, 49%)",
        "sunny-purple": "#ad28eb",
        "dark-purple": "hsl(292, 42%, 14%)",
      },

      backgroundImage: {
        pattern: "url('/background-pattern-desktop.svg')",
        mobilePattern: "url('/background-pattern-mobile.svg')",
      },
      backgroundSize: { stretch: "100vw" },

      fontFamily: {
        sans: ["Work Sans", "serif"],
      },

      screens: {
        first: "1195px",
        second: "850px",
      },
    },
  },
  plugins: [],
};
