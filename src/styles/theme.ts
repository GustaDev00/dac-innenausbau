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
  davysGrey: "#545454",
};

// get the color name in https://www.color-name.com

export type ColorFamily = keyof typeof theme;
type Theme = typeof theme;

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface -- Styled component use extends, so is okay to be empty
  export interface DefaultTheme extends Theme {}
}
