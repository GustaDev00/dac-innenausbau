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
    link: "/kontakt",
  },

  items: [
    {
      title: <>Trockenbau</>,
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
      href: "/dienstleistungen?id=1",
    },
    {
      title: <>Gartenbau</>,
      description: (
        <>
          Individuelle Gartengestaltung: Entwicklung und Umsetzung von massgeschneiderten
          Gartenkonzepten, die Ihren persönlichen Stil widerspiegeln.
        </>
      ),
      href: "/dienstleistungen?id=2",
    },
    {
      title: <>Kernsanierung</>,
      description: (
        <>
          Entkernung von Gebäuden: Fachgerechte Entfernung von alten Bauelementen und Vorbereitung
          für eine umfassende Sanierung.
        </>
      ),
      href: "/dienstleistungen?id=3",
    },
    {
      title: <>Bodenlegen</>,
      description: (
        <>
          Stuck an Decken und Wänden: Anbringung von dekorativen Stuckelementen für ein klassisches
          und elegantes Ambiente.
        </>
      ),
      href: "/dienstleistungen?id=4",
    },
    {
      title: <>Stuckarbeiten</>,
      description: (
        <>
          Fassadengestaltung: Professionelle Verkleidung und Dämmung von Fassaden für eine
          energieeffiziente und ästhetische Gebäudehülle.
        </>
      ),
      href: "/dienstleistungen?id=5",
    },
    {
      title: <>Malerarbeiten</>,
      description: (
        <>
          Innenraumgestaltung: Professionelle Farbauswahl und Anstrich von Wänden und Decken für
          eine stilvolle und harmonische Inneneinrichtung.
        </>
      ),
      href: "/dienstleistungen?id=6",
    },
  ],
};
