import "styled-components";

export const theme = {
  black: "#000",
  black01: "rgba(0, 0, 0, 0.1)",
  black02: "rgba(0, 0, 0, 0.2)",
  black10: "rgba(0, 0, 0, 0.1)",
  black15: "rgba(0, 0, 0, 0.15)",
  black12: "rgba(0, 0, 0, 0.12)",
  black05: "rgba(0, 0, 0, 0.05)",
  black25: "rgba(0, 0, 0, 0.25)",
  black07: "rgba(0, 0, 0, 0.07)",
  white: "#fff",
  platinum: "#DEE2E6",
  lightGray: "#d4d4d499",
  brightGray: "#EBEEF4",
  eerieBlackLight: "#1E1E1E",
  eerieBlackHalf: "#191919",
  white05: "rgba(255, 255, 255, 0.5)",
  white01: "rgba(255, 255, 255, 0.1)",
  white15: "rgba(255, 255, 255, 0.15)",
  white20: "rgba(255, 255, 255, 0.2)",
  white25: "rgba(255, 255, 255, 0.25)",
  ghostWhite: "#F9F9F9",
  carnelian: "#AE1717",
  carnelian05: "rgba(174, 23, 23, 0.15)",
  carnelian00: "rgba(174, 23, 23, 0)",
  red: "#C30606",
  cultured: "#F5F5F5",
  darkLiver: "#505050",
  licorice: "#1E0D0D",
  green: "#2ECC71",
  redForm: "#E74C3C",
  smokyBlack: "#0E0E0E",
  raisinBlack: "#202020",
  raisinBlackHalf: "#252525",
  eerieBlack: "#16191B",
  oldSilver: "#858585",
  quickSilver: "#A1A1A1",
  metallicSilver: "#A6AFB5",
  gainsboro: "#DBDBDB",
  antiFlashWhite: "#F0F0F0",
  davysGrey: "#545454",
  philippineBrown: "#661616",
  persianPlum: "#711916",
  crimsonRed: "#990303",
};

// get the color name in https://www.color-name.com

export type ColorFamily = keyof typeof theme;
type Theme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
