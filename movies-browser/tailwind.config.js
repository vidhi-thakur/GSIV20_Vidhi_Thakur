module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      "boxShadow-bottom": '0 8px 6px -6px black',
    },
  },
  variants: {
    extend: {
      colors: {
        gray: {
          light: '#9b9b9b',
          standard: '#4a4a4a',
          disabled: '#dfdfdf'
        }
      }
    },
  },
  plugins: [],
}
