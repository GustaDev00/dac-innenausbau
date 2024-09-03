import "styled-components";

export const theme = {
  black: "#000",
  white: "#fff",
  white05: "rgba(255, 255, 255, 0.5)",
  white01: "rgba(255, 255, 255, 0.1)",
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
  davysGrey: "#545454",
};

// get the color name in https://www.color-name.com

export type ColorFamily = keyof typeof theme;
type Theme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
