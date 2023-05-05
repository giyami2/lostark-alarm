const theme = {
  screens: {
    sm: "480px",
    md: "768px",
    lg: "976px",
    xl: "1440px",
  },
  colors: {
    primary: "#22B9B0",
    secondary: "#59D4CC",
    text: {
      black: "#2C2C2C",
      gray: "#878787",
    },
    white: "#fff",
    whitegray: "EDEDED",
    gray1: "#EBEBEB",
    gray2: "#E1E1E1",
    gray3: "#878787",
    black: "#000",
    black2: "#2C2C2C",
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
