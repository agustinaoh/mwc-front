module.exports = {
  purge: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.ts",
    "./src/**/*.tsx",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        "teal-light": "#3FA8C4",
        "teal-dark": "#116B7D",
      },
    },
  },
  variants: {},
  plugins: [],
};
