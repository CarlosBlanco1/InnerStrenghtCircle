module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'zen' : 'Zen'
      },
      colors: {
        'nav-green': '#007C7B'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
