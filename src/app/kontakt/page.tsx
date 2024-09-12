import { KontaktTemplate } from "@/templates/kontakt";
import { type Metadata } from "next";
import { type ReactNode } from "react";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontakt",
};

const Kontakt = (): ReactNode => {
  return <KontaktTemplate />;
};

export default Kontakt;
