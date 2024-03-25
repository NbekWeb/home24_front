/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{vue,js}",
    "./pages/**/*.vue",
    "./layouts/**/*.vue",
    "./plugins/**/*.{js}",
    "./nuxt.config.{js}",
  ],
  theme: {
    extend: {
      colors: {
        "bold-orenge": "rgb(255, 100, 24)",
        orenge: "rgb(255, 126,0)",
        "light-orenge": "rgb(255, 168, 84)",
        grey: "rgb(114, 116, 116)",
        "bold-grey": " rgb(2, 1, 5)",
        "light-grey": " rgb(148, 148, 152)",
        "back-grey": " rgb(244, 245, 245)",
        "bor-grey": " rgb(242, 242, 250)",
        "btn-grey": " rgb(248, 248, 248)",
      },
    },
  },
  plugins: [],
};
