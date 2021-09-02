module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    fill: [],
    extend: {
      borderColor: ["focus-visible"],
      opacity: ["disabled"],
    },
  },
  plugins: [],
};
