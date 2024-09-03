import { CustomBr } from "@/components/atoms/custom-br";

export default {
  title: (
    <>
      Hochwertige <CustomBr byViewport="mobile" />
      Bauarbeiten <CustomBr byViewport="desktop" />
      mit <CustomBr byViewport="mobile" />
      Tradition und <br />
      Expertise
    </>
  ),
  description: (
    <>
      Von der Idee bis zur Umsetzung <CustomBr byViewport="mobile" />
      realisieren wir Ihr <CustomBr byViewport="desktop" />
      Bauprojekt mit <CustomBr byViewport="mobile" />
      unserer langjährigen Erfahrung und <br />
      einem engagierten Team.
    </>
  ),

  button: {
    text: "Kontaktieren Sie uns",
    link: "/contact",
  },

  items: [
    {
      title: <>Trockenbau 1</>,
      description: (
        <>
          Wände und Deckenmontage: <CustomBr byViewport="mobile" />
          Professionelle <CustomBr byViewport="desktop" />
          Installation von <CustomBr byViewport="mobile" />
          Trennwänden und abgehängten <br />
          Decken für eine optimale <CustomBr byViewport="mobile" />
          Raumaufteilung.
        </>
      ),
      href: "/",
    },
    {
      title: <>Trockenbau 2</>,
      description: (
        <>
          Wände und Deckenmontage: <CustomBr byViewport="mobile" />
          Professionelle <CustomBr byViewport="desktop" />
          Installation von <CustomBr byViewport="mobile" />
          Trennwänden und abgehängten <br />
          Decken für eine optimale <CustomBr byViewport="mobile" />
          Raumaufteilung.
        </>
      ),
      href: "/",
    },
    {
      title: <>Trockenbau 3</>,
      description: (
        <>
          Wände und Deckenmontage: <CustomBr byViewport="mobile" />
          Professionelle <CustomBr byViewport="desktop" />
          Installation von <CustomBr byViewport="mobile" />
          Trennwänden und abgehängten <br />
          Decken für eine optimale <CustomBr byViewport="mobile" />
          Raumaufteilung.
        </>
      ),
      href: "/",
    },
  ],
};
