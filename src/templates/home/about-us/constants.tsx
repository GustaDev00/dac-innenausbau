import { CustomBr } from "@/components/atoms/custom-br";

export default {
  title: (
    <>
      Hinter den Kulissen <CustomBr byViewport="mobile" />
      der <CustomBr byViewport="desktop" />
      DAC <CustomBr byViewport="mobile" />
      Innenausbau GmbH
    </>
  ),
  description: (
    <>
      Warum die DAC Innenausbau
      <CustomBr byViewport="mobile" /> GmbH seit über zwei <CustomBr byViewport="mobile" />
      Jahrzehnten für
      <br /> Spitzenleistungen im <CustomBr byViewport="mobile" />
      Bauwesen steht.
    </>
  ),
  button: {
    text: "Mehr dazu",
    link: "/",
  },
  years: (
    <>
      <b>22</b>
      <span>Jahre</span>
    </>
  ),
  moreAbour: [
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
