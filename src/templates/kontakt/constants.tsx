import { CustomBr } from "@/components/atoms/custom-br";

export default {
  header: {
    title: (
      <>
        Kontaktieren Sie
        <CustomBr byViewport="mobile" /> uns
      </>
    ),
    description: (
      <>
        Lassen Sie uns gemeinsam Ihr
        <CustomBr byViewport="mobile" /> nächstes Bauprojekt starten
      </>
    ),
    background: {
      src: "imgs/kontakt/bg.png",
      alt: "Background Header",
    },
    breadcrumb: "Kontakt",
  },
};
