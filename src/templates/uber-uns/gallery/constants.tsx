import { CustomBr } from "@/components/atoms/custom-br";

export default {
  title: "Alles ist machbar.",
  description: (
    <>
      Unser Motto „Alles ist machbar“ <CustomBr byViewport="mobile" />
      spiegelt unsere Überzeugung wieder,
      <br /> dass jede Bauherausforderung mit der <CustomBr byViewport="mobile" />
      richtigen.
    </>
  ),
  img: {
    src: "imgs/uber-uns/gallery/hook.png",
    alt: "Hook",
  },

  slider: {
    title: (
      <>
        Alles ist <CustomBr byViewport="mobile" />
        machbar.
      </>
    ),
    items: [
      {
        src: "imgs/uber-uns/gallery/slider/trockenbau.jpg",
        alt: "img1",
      },
      {
        src: "imgs/uber-uns/gallery/slider/gartenbau.jpg",
        alt: "img2",
      },
      {
        src: "imgs/uber-uns/gallery/slider/kernsanierung.jpg",
        alt: "img3",
      },
      {
        src: "imgs/uber-uns/gallery/slider/bodenlegen.png",
        alt: "img4",
      },
      {
        src: "imgs/uber-uns/gallery/slider/stuckarbeiten.jpg",
        alt: "img5",
      },
      {
        src: "imgs/uber-uns/gallery/slider/malerarbeiten.jpg",
        alt: "img6",
      },
    ],
  },
};
