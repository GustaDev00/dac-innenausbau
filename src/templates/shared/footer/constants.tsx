import { Facebook } from "@/components/svgs/facebook";
import { Instagram } from "@/components/svgs/instagram";
import C from "@/constants";

export default {
  info: {
    text: "Copyright © 2024 DAC Innenausbau GmbH ",
    agency: (
      <>
        Mit 💚 entwickelt von{" "}
        <span>
          <a href="https://www.fiberweb.ch/" target="_blank" rel="noreferrer">
            FiberWeb.ch
          </a>
        </span>
      </>
    ),
  },
  categories: {
    title: "Navigation",
    list: C.categories,
  },
  contact: {
    title: "Kontakt Informationen",
    list: [<>Nummer: {C.phone}</>, <>E-mail: {C.mail}</>, C.socialShare],
  },
};
