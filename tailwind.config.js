const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    // Some useful comment
    colors: {
      ...defaultTheme.colors,
      primary: defaultTheme.colors["blue"]
    },
    fontFamily: {
      ...defaultTheme.fontFamily,
      heading: defaultTheme.fontFamily["sans"],
      body: defaultTheme.fontFamily["sans"]
    }
  },
  variants: {
    // Some useful comment
  },
  plugins: [
    // Some useful comment
  ]
};
