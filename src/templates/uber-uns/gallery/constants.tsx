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
        desktop: {
          src: "imgs/uber-uns/gallery/slider/img1.png",
          alt: "img1",
        },
        mobile: {
          src: "imgs/uber-uns/gallery/slider/mobile/img1.png",
          alt: "img1",
        },
      },
      {
        desktop: {
          src: "imgs/uber-uns/gallery/slider/img1.png",
          alt: "img1",
        },
        mobile: {
          src: "imgs/uber-uns/gallery/slider/mobile/img1.png",
          alt: "img1",
        },
      },
      {
        desktop: {
          src: "imgs/uber-uns/gallery/slider/img1.png",
          alt: "img1",
        },
        mobile: {
          src: "imgs/uber-uns/gallery/slider/mobile/img1.png",
          alt: "img1",
        },
      },
      {
        desktop: {
          src: "imgs/uber-uns/gallery/slider/img1.png",
          alt: "img1",
        },
        mobile: {
          src: "imgs/uber-uns/gallery/slider/mobile/img1.png",
          alt: "img1",
        },
      },
      {
        desktop: {
          src: "imgs/uber-uns/gallery/slider/img1.png",
          alt: "img1",
        },
        mobile: {
          src: "imgs/uber-uns/gallery/slider/mobile/img1.png",
          alt: "img1",
        },
      },
    ],
  },
};
