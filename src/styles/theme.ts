import "styled-components";

export const theme = {
  black: "#000",
  white: "#fff",
  carnelian: "#AE1717",
  red: "#C30606",
  smokyBlack: "#0E0E0E",
  raisinBlack: "#202020",
  raisinBlackHalf: "#252525",
  oldSilver: "#858585",
  quickSilver: "#A1A1A1",
  metallicSilver: "#A6AFB5",
  gainsboro: "#DBDBDB",
  antiFlashWhite: "#F0F0F0",
};

// get the color name in https://www.color-name.com

export type ColorFamily = keyof typeof theme;
type Theme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
