import { CustomBr } from "@/components/atoms/custom-br";
import C from "@/constants";

export default {
  menu: {
    title: "Alle Dienstleistungen",
    items: [
      { id: 1, text: "Trockenbau" },
      { id: 2, text: "Gartenbau" },
      { id: 3, text: "Kernsanierung" },
      { id: 4, text: "Bodenlegen" },
      { id: 5, text: "Stuckarbeiten" },
      { id: 6, text: "Malerarbeiten" },
    ],
  },
  contact: {
    title: (
      <>
        Wie können wir
        <CustomBr byViewport="mobile" /> helfen?
      </>
    ),
    description: (
      <>
        Wenn Sie Hilfe benötigen, <CustomBr byViewport="mobile" />
        zögern Sie
        <CustomBr byViewport="desktop" /> nicht.
      </>
    ),
    call: {
      title: "Ruf uns an",
      text: C.phone,
    },
    mail: {
      title: "Schreibe uns ein E-mail",
      text: C.mail,
    },
    link: {
      title: "Kontaktieren Sie uns",
      href: "/kontakt",
    },
  },
  content: {
    img: {
      desktop: {
        src: "imgs/dienstleistungen/services.png",
        alt: "Services",
      },
      mobile: {
        src: "imgs/dienstleistungen/mobile/services.png",
        alt: "Services",
      },
    },
    items: [
      {
        id: 1,
        title: "Trockenbau",
        list: [
          "Wände und Deckenmontage: Professionelle Installation von Trennwänden und abgehängten Decken für eine optimale Raumaufteilung.",
          "Brandschutzlösungen: Montage von brandschutzgerechten Trockenbausystemen gemäss den aktuellen Sicherheitsvorschriften.",
          "Schallschutz: Implementierung von schallisolierenden Trockenbauelementen für mehr Ruhe und Komfort in Wohn- und Geschäftsräumen.",
          "Indirekte Beleuchtung: Integration von Beleuchtungssystemen in Decken und Wände für ein modernes und angenehmes Raumklima.",
        ],
        img: {
          src: "imgs/dienstleistungen/services/trockenbau.png",
          alt: "img1",
        },
      },
      {
        id: 2,
        title: "Gartenbau",
        list: [
          "Individuelle Gartengestaltung: Entwicklung und Umsetzung von massgeschneiderten Gartenkonzepten, die Ihren persönlichen Stil widerspiegeln.",
          "Pflanzen- und Baumarbeiten: Auswahl, Pflanzung und Pflege von Bäumen, Sträuchern und Blumenbeeten.",
          "Wege und Terrassenbau: Professioneller Bau von Gartenwegen, Terrassen und Sitzplätzen für eine harmonische Gartengestaltung.",
          "Wasserinstallationen: Anlage von Teichen, Brunnen und Bewässerungssystemen für eine entspannte und natürliche Atmosphäre.",
        ],
        img: {
          src: "imgs/dienstleistungen/services/gartenbau.png",
          alt: "img2",
        },
      },
      {
        id: 3,
        title: "Kernsanierung",
        list: [
          "Entkernung von Gebäuden: Fachgerechte Entfernung von alten Bauelementen und Vorbereitung für eine umfassende Sanierung.",
          "Modernisierung von Bädern und Küchen: Komplette Neugestaltung und Modernisierung von sanitären Anlagen und Küchenbereichen.",
          "Sanierung von Wohn- und Gewerberäumen: Umfassende Renovierung von Wohn- und Geschäftsräumen für eine zeitgemässe Nutzung.",
          "Wärmedämmung und Energiesanierung: Optimierung der Gebäudeisolierung für höhere Energieeffizienz und geringere Betriebskosten.",
        ],
        img: {
          src: "imgs/dienstleistungen/services/kernsanierung.png",
          alt: "img3",
        },
      },
      {
        id: 4,
        title: "Bodenlegen",
        list: [
          "Verlegung von Holzfussböden: Installation von Parkett, Dielen und Laminat für eine warme und natürliche Wohnatmosphäre.",
          "Fliesenarbeiten: Fachmännische Verlegung von Fliesen in Bädern, Küchen und Wohnräumen für ein langlebiges und pflegeleichtes Finish.",
          "Teppichbodenverlegung: Auswahl und Verlegung von Teppichböden für eine gemütliche und schalldämmende Raumgestaltung.",
          "Bodenreparaturen und -ausbesserungen: Reparatur beschädigter Böden und Ausbesserung von Unebenheiten für eine makellose Oberfläche.",
        ],
        img: {
          src: "imgs/dienstleistungen/services/bodenlegen.png",
          alt: "img4",
        },
      },
      {
        id: 5,
        title: "Stuckarbeiten",
        list: [
          "Stuck an Decken und Wänden: Anbringung von dekorativen Stuckelementen für ein klassisches und elegantes Ambiente.",
          "Restaurierung historischer Stuckarbeiten: Fachgerechte Restaurierung und Konservierung von alten Stuckarbeiten, um den historischen Charme zu erhalten.",
          "Moderne Stucktechniken: Einsatz innovativer Techniken zur Gestaltung moderner Stuckelemente nach individuellen Wünschen.",
          "Kreative Wand- und Deckengestaltung: Schaffung einzigartiger Wand- und Deckengestaltungen durch kreative Kombinationen von Stuck und Farbe.",
        ],
        img: {
          src: "imgs/udienstleistungen/servicesder/stuckarbeiten.png",
          alt: "img5",
        },
      },
      {
        id: 6,
        title: "Malerarbeiten",
        list: [
          "Innenraumgestaltung: Professionelle Farbauswahl und Anstrich von Wänden und Decken für eine stilvolle und harmonische Inneneinrichtung.",
          "Fassadenanstriche: Wetterfeste und langlebige Anstriche für Fassaden, die Gebäude optisch aufwerten und schützen.",
          "Lackierarbeiten: Hochwertige Lackierung von Türen, Fenstern und anderen Holzelementen für eine glatte und langlebige Oberfläche.",
          "Dekorative Maltechniken: Anwendung spezieller Maltechniken wie Wisch-, Tupf- oder Spachteltechniken für einzigartige Oberflächeneffekte.",
        ],
        img: {
          src: "imgs/dienstleistungen/services/malerarbeiten.png",
          alt: "img6",
        },
      },
    ],
    services: C.services,
  },
};
