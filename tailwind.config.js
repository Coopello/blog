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
          primary: "#5AC8D8",
          white: "#FFFFFF",
          lightGray: "#F5F5F6",
          gray: "#C9C9C9",
          black: "#222222",
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
