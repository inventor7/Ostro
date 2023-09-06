/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#effaf6",
          100: "#d8f3e7",
          200: "#b4e6d2",
          300: "#83d2b8",
          400: "#50b799",
          500: "#2d9c7e",
          600: "#228d73",
          700: "#186453",
          800: "#155043",
          900: "#124238",
          950: "#092520",
        },

        blackich: {
          DEFAULT: "#000000",
          100: "#2F2F2F",
          200: "#4F4F4F",
          300: "#5F5F5F",
          400: "#7F7F7F",
          500: "#9F9F9F",
        },
        secondary: "#D9D9D957",
        bg: "#FFFFFF",
        warning: "#CC0033",
      },
    },
  },

  plugins: [],
};
