import { CustomBr } from "@/components/atoms/custom-br";

export default {
  title: (
    <>
      Unsere Vision und
      <CustomBr byViewport="mobile" /> Mission:{" "}
      <span>
        Baukunst <CustomBr byViewport="mobile" />
        neu <CustomBr byViewport="desktop" />
        definiert
      </span>
    </>
  ),
  description: (
    <>
      Mit über zwei Jahrzehnten Erfahrung
      <CustomBr byViewport="mobile" /> und modernster Technologie setzen
      <CustomBr byViewport="mobile" /> wir Maßstäbe in der
      <CustomBr byViewport="desktop" /> Bauindustrie.
      <CustomBr byViewport="mobile" /> Unsere Vision treibt uns an, die
      <CustomBr byViewport="mobile" /> Zukunft des Bauens zu gestalten.
      <CustomBr byViewport="mobile" /> Unsere Mission
      <CustomBr byViewport="desktop" /> ist es, exzellente
      <CustomBr byViewport="mobile" /> Qualität und Zuverlässigkeit in jedem
      <CustomBr byViewport="mobile" /> Projekt zu gewährleisten.
    </>
  ),
  list: [
    {
      icon: {
        src: "svgs/industrie.svg",
        alt: "Industrie",
      },
      title: "Vision",
      description: (
        <>
          Wir gestalten die Zukunft des Bauens
          <CustomBr byViewport="mobile" /> mit fortschrittlicher Technologie
          <CustomBr byViewport="desktop" /> und
          <CustomBr byViewport="mobile" /> herausragender Baupraxis. Unser{" "}
          <CustomBr byViewport="mobile" />
          Ziel: Die Erwartungen unserer <br />
          Kunden stets zu übertreffen und
          <CustomBr byViewport="mobile" /> neue Maßstäbe in der Bauindustrie
          <CustomBr byViewport="mobile" /> zu
          <CustomBr byViewport="desktop" /> setzen.
        </>
      ),
    },
    {
      icon: {
        src: "svgs/mission.svg",
        alt: "Mission",
      },
      title: "Mission",
      description: (
        <>
          Unsere Mission ist es, Qualität und
          <CustomBr byViewport="mobile" /> Zuverlässigkeit in jedem Projekt zu
          <br /> gewährleisten. Mit über 22 Jahren
          <CustomBr byViewport="mobile" /> Erfahrung kombinieren wir Tradition
          <br /> mit modernster Technik, um die
          <CustomBr byViewport="mobile" /> Visionen unserer Kunden
          <CustomBr byViewport="mobile" /> termingerecht
          <CustomBr byViewport="desktop" /> zu verwirklichen.
        </>
      ),
    },
  ],
  img: {
    desktop: {
      src: "imgs/uber-uns/vision/img.png",
      alt: "Unsere Vision und Mission",
    },
    mobile: {
      src: "imgs/uber-uns/vision/mobile/img.png",
      alt: "Unsere Vision und Mission",
    },
  },
};
