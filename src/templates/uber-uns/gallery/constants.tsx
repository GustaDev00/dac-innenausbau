import { CustomBr } from "@/components/atoms/custom-br";

export default {
  title: "Alles ist machbar.",
  description: (
    <>
      Unser Motto „Alles ist machbar“ <CustomBr byViewport="mobile" />
      spiegelt unsere Überzeugung wieder,
      <br /> dass jede Bauherausforderung mit der <CustomBr byViewport="mobile" />
      richtigen herangehensweise <CustomBr byViewport="mobile" />
      gelöst werden kann.
    </>
  ),
  img: {
    src: "imgs/uber-uns/gallery/hook.png",
    alt: "Hook",
    notLazy: true,
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
        src: "imgs/uber-uns/gallery/slider/1.png",
        alt: "img1 - png",
      },
      {
        src: "imgs/uber-uns/gallery/slider/2.png",
        alt: "img2 - png",
      },
      {
        src: "imgs/uber-uns/gallery/slider/3.png",
        alt: "img3 - png",
      },
      {
        src: "imgs/uber-uns/gallery/slider/4.png",
        alt: "img4 - png",
      },
      {
        src: "imgs/uber-uns/gallery/slider/5.png",
        alt: "img5 - png",
      },
      {
        src: "imgs/uber-uns/gallery/slider/trockenbau.jpg",
        alt: "img1",
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
    ],
  },
};
