import { Facebook } from "@/components/svgs/facebook";
import { Instagram } from "@/components/svgs/instagram";
import C from "@/constants";

export default {
  info: {
    text: "Copyright © 2024 DAC Innenausbau GmbH ",
    agency: (
      <>
        Mit 💚 entwickelt von <span>FiberWeb.ch</span>
      </>
    ),
  },
  categories: {
    title: "Seiten",
    list: C.categories,
  },
  contact: {
    title: "Kontakt Informationen",
    list: [
      <>Nummer: {C.phone}</>,
      <>E-mail: {C.mail}</>,
      <>
        <span>Folge uns</span>
        <a href={C.links.face} target="_blank" rel="noreferrer">
          <Facebook />
        </a>
        <a href={C.links.insta} target="_blank" rel="noreferrer">
          <Instagram />
        </a>
      </>,
    ],
  },
};
