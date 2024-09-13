import { CustomBr } from "@/components/atoms/custom-br";

export default {
  content: {
    title: (
      <>
        Kostenlose <CustomBr byViewport="mobile" />
        Beratung <br />
        anfordern
      </>
    ),
    img: {
      desktop: {
        src: "imgs/contact/img.png",
        alt: "Kontakt",
      },
      mobile: {
        src: "imgs/contact/mobile/img.png",
        alt: "Kontakt",
      },
    },
    Certificate: {
      src: "imgs/contact/quality.png",
      alt: "Qualität",
    },
    text: (
      <>
        Unsere Partner sind die Besten <CustomBr byViewport="mobile" />
        der Branche
      </>
    ),
    clients: [
      {
        src: "imgs/contact/implenia.png",
        alt: "implenia",
      },
      {
        src: "imgs/contact/gipser.png",
        alt: "gipser",
      },
    ],
  },

  form: [
    {
      label: "Name",
      type: "text",
      placeholder: "Ex: Jhon Dee",
    },
    {
      label: "Nummer",
      type: "text",
      placeholder: "000 000 00 00",
    },
    {
      label: "Email",
      type: "email",
      placeholder: "Jhon@gmail.com",
    },
    {
      label: "Gewünschter Service",
      type: "textarea",
      placeholder: "Gewünschter...",
    },
  ],
  button: "Kontakt",
};
