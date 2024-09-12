import { CustomBr } from "@/components/atoms/custom-br";

export default {
  header: {
    title: (
      <>
        Unsere
        <CustomBr byViewport="mobile" /> Dienstleistungen
      </>
    ),
    description: (
      <>
        Umfassende Lösungen für jeden
        <CustomBr byViewport="mobile" /> Baubedarf
      </>
    ),
    background: {
      src: "/imgs/dienstleistungen/bg.png",
      alt: "Background Header",
    },
    breadcrumb: "Dienstleistungen",
  },
};
