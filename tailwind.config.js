/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: {
          black: "#222222",
          red: "#FF7971",
          blue: "#717FFF",
          green: "#43DC49",
          orange: "#FFBA69",
          purple: "#A055FF",
          gray: "#C9C9C9",
          defaultGray: "#F5F5F5",
          coopelloBlue: "#5AC8D8",
        },
      },
    },
  },
  important: true,
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
