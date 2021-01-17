module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      scale: {
        "1": "-1",
      },
      rotate: {
        "-120": "-120deg",
      },
      strokeWidth: {
        "3": "3",
        "4": "4",
      },
      fontSize: {
        "10xl": "10rem",
      },
      fontFamily: {
        hand: ['"Hachi Maru Pop"', "cursive"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
