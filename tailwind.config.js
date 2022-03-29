module.exports = {
  content: ['./components/**/*.tsx', './containers/**/*.tsx', './pages/**/*.tsx'], // add this line
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'fancy-gray': '#404040',
        'light-red': '#F21B07',
      },
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
};
