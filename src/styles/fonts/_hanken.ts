import localFont from "next/font/local";

export const hankenGrotesk = localFont({
  variable: "--hankengrotesk",
  src: [
    {
      path: "../../../public/fonts/hanken-grotesk/HankenGrotesk-black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../../public/fonts/hanken-grotesk/HankenGrotesk-blackItalic.ttf",
      weight: "900",
      style: "italic",
    },
    {
      path: "../../../public/fonts/hanken-grotesk/HankenGrotesk-bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/fonts/hanken-grotesk/HankenGrotesk-boldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../../public/fonts/hanken-grotesk/HankenGrotesk-medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/hanken-grotesk/HankenGrotesk-mediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../../public/fonts/hanken-grotesk/HankenGrotesk-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/hanken-grotesk/HankenGrotesk-italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../../public/fonts/hanken-grotesk/HankenGrotesk-light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/fonts/hanken-grotesk/HankenGrotesk-lightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../../public/fonts/hanken-grotesk/HankenGrotesk-thin.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../../public/fonts/hanken-grotesk/HankenGrotesk-thinItalic.ttf",
      weight: "200",
      style: "italic",
    },
  ],
});
