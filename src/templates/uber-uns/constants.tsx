import { CustomBr } from "@/components/atoms/custom-br";

export default {
  header: {
    title: (
      <>
        Alles ist <CustomBr byViewport="mobile" />
        machbar.
      </>
    ),
    background: {
      src: "imgs/uber-uns/background.png",
      alt: "Background Header",
    },
    breadcrumb: "Über uns",
    modal: {
      content: (
        <>
          Unser Motto „Alles ist machbar“ <CustomBr byViewport="mobile" /> spiegelt unsere
          Überzeugung
          <br /> wieder, dass jede
          <CustomBr byViewport="mobile" /> Bauherausforderung mit der{" "}
          <CustomBr byViewport="mobile" />
          richtigen <CustomBr byViewport="desktop" />
          Herangehensweise <CustomBr byViewport="mobile" />
          gelöst werden kann. Ob Renovierungen <CustomBr byViewport="desktop" />
          oder Neubauten – <CustomBr byViewport="mobile" />
          wir setzen auf innovative <CustomBr byViewport="mobile" />
          Lösungen und <CustomBr byViewport="desktop" />
          modernste <CustomBr byViewport="mobile" />
          Technologien, um die <CustomBr byViewport="mobile" />
          Vorstellungen unserer <CustomBr byViewport="desktop" />
          Kunden zu <CustomBr byViewport="mobile" />
          verwirklichen.
        </>
      ),
    },
  },
};
