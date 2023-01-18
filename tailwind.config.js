/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.html"],
  theme: {
    screens: {
      sm: "360px",
      md: "760px",
      lg: "1280px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        Vampiro: ["Vampiro One", "cursive"],
      },
      colors: {
        hijau: "#00ff00",
        DarkGreen: "#3C4411",
        DarkOliveGreen: "#556b2f",
        cyan: "hsl(180, 66%, 49%)",
        cyanLight: "hsl(180, 66%, 69%)",
        darkViolet: "hsl(257, 27%, 26%)",
        darkBlue: "hsl(217, 28%, 15%)",
        darkBlue1: "hsl(218, 28%, 13%)",
        darkBlue2: "hsl(216, 53%, 9%)",
        darkBlue3: "hsl(219, 30%, 18%)",
        red: "hsl(0, 87%, 67%)",
        grayishViolet: "hsl(257, 7%, 63%)",
        veryDarkBlue: "hsl(255, 11%, 22%)",
        veryDarkViolet: "hsl(260, 8%, 14%) ",
        "soft-blue": "hsl(215, 51%, 70%)",
        "dark-blue": {
          "main-bg": "hsl(217, 54%, 11%)",
          "card-bg": "hsl(216, 50%, 16%)",
          line: "hsl(215, 32%, 27%)",
        },
      },
    },
  },
  plugins: [],
}
