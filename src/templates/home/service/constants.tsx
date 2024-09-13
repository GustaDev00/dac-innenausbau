import { CustomBr } from "@/components/atoms/custom-br";

export default {
  title: (
    <>
      Das sind unsere <br />
      Spezialgebiete
    </>
  ),
  tag: {
    text: "Dienstleistungen",
  },
  description: (
    <>
      Wir sind spezialisiert auf Trockenbau
      <CustomBr byViewport="mobile" /> und <CustomBr byViewport="desktop" />
      Innenausbau. Darüber hinaus
      <CustomBr byViewport="mobile" /> bieten wir Ihnen eine <CustomBr byViewport="desktop" />
      Vielzahl weiterer
      <CustomBr byViewport="mobile" /> Dienstleistungen an.
    </>
  ),
  button: {
    text: "Mehr dazu",
    link: "/dienstleistungen",
  },
  content: {
    imgFirst: {
      src: "imgs/home/services/img1.png",
      alt: "Trockenbau",
    },
    tag: "Qualifizierte Experten",
    imgSecond: {
      src: "imgs/home/services/img2.png",
      alt: "Innenausbau",
    },
  },
};
