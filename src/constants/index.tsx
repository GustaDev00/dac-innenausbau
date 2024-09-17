import { Facebook } from "@/components/svgs/facebook";
import { Instagram } from "@/components/svgs/instagram";
import { title } from "process";

export default {
  phone: "076 469 28 31",
  mail: "info@trockenbau-dac.ch",
  links: {
    face: "https://www.facebook.com",
    insta: "https://www.facebook.com",
  },
  title: <>Wie können wir helfen?</>,
  kontakt: {
    title: "Kontakt",
    href: "/kontakt",
  },
  socialShare: (
    <>
      <span>Folge uns</span>
      <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
        <Facebook />
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
        <Instagram />
      </a>
    </>
  ),
  categories: [
    { title: "Home", href: "/" },
    { title: "Dienstleistungen", href: "/dienstleistungen" },
    { title: "Über uns", href: "/uber-uns" },
    { title: "Kontakt", href: "/kontakt" },
  ],
  services: [
    {
      title: "Baukompetenz",
      text: (
        <>
          Über 22 Jahre Spitzenleistungen <br />
          im Bauwesen
        </>
      ),
    },
    {
      title: "All-in-One-Service",
      text: (
        <>
          Umfassende Dienstleistungen <br />
          aus einer Hand
        </>
      ),
    },
  ],
};
