/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    // TODO: next/font を使用して書き換える
    fontFamily: {
      blog: [
        "Hiragino Sans",
        "ヒラギノ角ゴシック",
        "メイリオ",
        "Meiryo",
        "YuGothic",
        "Yu Gothic",
        "ＭＳ Ｐゴシック",
        "MS PGothic",
        "sans-serif",
      ],
    },
    extend: {
      colors: {
        custom: {
          white: "#FFFFFF",
          lightGray: "#F5F5F6",
          gray: "#6E6E6E",
          black: "#222222",
          red: "#E10718",
          orange: "#FF6E27",
          yellow: "#FFD63D",
          green: "#00C85D",
          sky: "#00B8D2",
          blue: "#1362F9",
          purple: "#6806E4",
          coopelloBlue: "#5AC8D8", // TODO: どう使用するか議論する
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
