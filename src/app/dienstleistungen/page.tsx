import { DienstleistungenTemplate } from "@/templates/dienstleistungen";
import { type Metadata } from "next";
import { type ReactNode } from "react";

export const metadata: Metadata = {
  title: "Dienstleistungen",
  description: "Dienstleistungen",
};

const Dienstleistungen = (): ReactNode => {
  return <DienstleistungenTemplate />;
};

export default Dienstleistungen;
