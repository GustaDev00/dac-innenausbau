import { CustomBr } from "@/components/atoms/custom-br";
import C from "@/constants";

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
  moreAbour: C.services,
};
