const theme = {
  screens: {
    sm: "480px",
    md: "768px",
    lg: "976px",
    xl: "1440px",
  },
  colors: {
    primary: "#22b9b0",
    secondary: "#59d4cc",
    text: {
      black: "#2c2c2c",
      gray: "#878787",
    },
    white: "#fff",
    whitegray: "#ededed",
    gray1: "#ebebeb",
    gray2: "#e1e1e1",
    gray3: "#878787",
    black: "#000",
    black2: "#2c2c2c",
    grade: {
      uncommon: "#56b131",
      rare: "#2072aa",
      epic: "#69388f",
      legendary: "#b4811f",
    },
  },
  fontFamily: {
    sans: ["Graphik", "sans-serif"],
    serif: ["Merriweather", "serif"],
    fredoka: ["Fredoka", "serif"],
  },
  extend: {
    spacing: {
      128: "32rem",
      144: "36rem",
    },
    borderRadius: {
      "4xl": "2rem",
    },
  },
};

export default theme;
