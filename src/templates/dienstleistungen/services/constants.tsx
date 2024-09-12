import { CustomBr } from "@/components/atoms/custom-br";
import C from "@/constants";
import { item } from "@/templates/home/about-us/styles";

export default {
  menu: {
    title: "All Services",
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
      title: "Call Us",
      text: C.phone,
    },
    mail: {
      title: "Or mail",
      text: C.mail,
    },
    link: {
      title: "Kontaktieren Sie uns",
      href: "/kontakt",
    },
  },
  content: {
    img: {},
    items: [],
    services: C.services,
  },
};
