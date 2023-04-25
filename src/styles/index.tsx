import { createStitches, defaultThemeMap } from "@stitches/react";
import { colors, fontSizes, fonts, space } from "./tokens";

export const MEDIA_QUERY = "@media (max-width: 870px)";
export const MEDIA_QUERY_SM = "@media (max-width: 500px)";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    width: "space",
    height: "space",
    maxWidth: "space",
  },

  theme: {
    colors,
    fontSizes,
    fonts,
    space,
  },
});
