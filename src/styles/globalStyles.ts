import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  ":root": {
    fontWeight: 400,
    fontSynthesis: "none",
    fontFamily: "$default",
    backgroundColor: "$gray900",
    color: "$gray100",
    textRendering: "optimizeLegibility",
    "-moz-osx-font-smoothing": "grayscale",
    "-webkit-font-smoothing": "antialiased",
  },
});
