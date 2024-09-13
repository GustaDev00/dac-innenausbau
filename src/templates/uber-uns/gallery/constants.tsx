import { CustomBr } from "@/components/atoms/custom-br";

export default {
  title: "Alles ist machbar.",
  description: (
    <>
      Unser Motto „Alles ist machbar“ <CustomBr byViewport="mobile" />
      spiegelt unsere Überzeugung wider,
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
        src: "imgs/uber-uns/gallery/slider/img1.jpg",
        alt: "img1",
      },
      {
        src: "imgs/uber-uns/gallery/slider/img2.jpg",
        alt: "img2",
      },
      {
        src: "imgs/uber-uns/gallery/slider/img3.jpg",
        alt: "img3",
      },
      {
        src: "imgs/uber-uns/gallery/slider/img4.jpg",
        alt: "img4",
      },
      {
        src: "imgs/uber-uns/gallery/slider/img5.jpg",
        alt: "img5",
      },
      {
        src: "imgs/uber-uns/gallery/slider/img6.jpg",
        alt: "img6",
      },
    ],
  },
};
