import { CustomBr } from "@/components/atoms/custom-br";

export default {
  text: "Was uns speziell macht",
  title: (
    <>
      Exzellenz in jedem Detail: Projekte, die den <CustomBr byViewport="desktop" />
      Qualitätsstandard neu definieren
    </>
  ),
  description: (
    <>
      Unsere Projekte werden mit höchster Sorgfalt geplant, unter Verwendung erstklassiger
      Materialien und modernster <CustomBr byViewport="desktop" />
      Techniken. Jede Bauweise ist ein Zeugnis unseres unerschütterlichen Engagements für Qualität.
    </>
  ),
  cards: [
    {
      title: <>Langjährige Erfahrung</>,
      text: (
        <>
          Mit über 22 Jahren Erfahrung in der Baubranche bietet die DAC Innenausbau GmbH fundiertes
          <CustomBr byViewport="desktop" />
          Know-how und Fachkompetenz für Projekte jeder Grössenordnung.
        </>
      ),
      img: {
        src: "/svgs/rating-stars.svg",
        alt: "Langjährige Erfahrung",
      },
    },
    {
      title: <>Verlässlichkeit garantiert</>,
      text: (
        <>
          Was wir versprechen, das halten wir. Keine leeren Worte, sondern pünktliche Fertigstellung
          und <CustomBr byViewport="desktop" />
          präzise Arbeit – darauf können Sie sich verlassen.
        </>
      ),
      img: {
        src: "/svgs/engineer.svg",
        alt: "Verlässlichkeit garantiert",
      },
    },
    {
      title: <>Höchste Qualitätsstandards</>,
      text: (
        <>
          Unsere Arbeit zeichnet sich durch höchste Qualitätsstandards aus, die sowohl bei kleinen
          <CustomBr byViewport="desktop" />
          Renovierungen als auch bei grossen Bauvorhaben konsequent eingehalten werden.
        </>
      ),
      img: {
        src: "/svgs/buildings.svg",
        alt: "Höchste Qualitätsstandards",
      },
    },
    {
      title: <>Umfassendes Leistungsspektrum</>,
      text: (
        <>
          Von Trockenbau und Rohrbau bis hin zu Plattenarbeiten und Kernsanierungen – wir bieten ein
          <CustomBr byViewport="desktop" />
          breites Spektrum an Dienstleistungen aus einer Hand.
        </>
      ),
      img: {
        src: "/svgs/notes.svg",
        alt: "Umfassendes Leistungsspektrum",
      },
    },
  ],
};
