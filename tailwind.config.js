/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "Poppins", "sans-serif"],
        poppins: ["Poppins", "Inter", "sans-serif"],
      },
      boxShadow: {
        image:
          " rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
        feature: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
        contact:
          "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;",
        popUp: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
      },

      backgroundImage: {
        playStation: "url('/playstation.png')",
        women: "url('/Womens Collections.jpg')",
        speaker: "url('/speakers.png')",
        perfume: "url('/perfume.png')",
      },
      scale: {
        200: "2",
      },

      // fontSize: {
      //   // HTML: "62.5%",
      //   one: "1.1rem",
      //   two: "1.2rem",
      //   there: "1.4rem",
      //   four: "1.6rem",
      //   five: "2rem",
      //   six: "2.4rem",
      //   seven: "3.2rem",
      //   eight: "3.6rem",
      //   nine: "4.8rem",
      //   ten: "5.4rem",
      //   eleven: "11rem",
      // },

      colors: {
        one: "#fafafa",
        two: "#000",
        three: "#f5f5f5",
        four: "#ffad33",
        five: "#db4444",
        six: "#00ff66",
        // sixPlus: "#00e65c",
        seven: "#6d6d6e",
        eight: "#eeff61",
        nine: "#ddd",
        ten: "#ffcaa6",
      },
      keyframes: {
        "slide-up-fade-in": {
          from: {
            opacity: 0,
            transform: "translateY(5rem)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        "slide-in": {
          from: {
            opacity: 0,
            transform: "scale(0.5) rotate(90deg) translateY(-5rem)",
          },
          to: {
            opacity: 1,
            transform: "scale(1) rotate(0) translateY(0)",
          },
        },
      },

      animation: {
        up: "slide-up-fade-in 0.5s forwards ease-in-out",
        in: "slide-in 0.5s forwards ease-in-out",
      },

      lineHeight: {
        one: "1.2rem",
        two: "1.8rem",
        three: "2rem",
        four: "2.1rem",
        five: "2.4rem",
        six: "2.6rem",
        seven: "2.8rem",
        eight: "3rem",
        nine: "4.8rem",
        ten: "6rem",
        eleven: "6.4rem",
        twelve: "11.5rem",
      },
    },
  },
  plugins: [],
};
