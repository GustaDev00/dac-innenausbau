import { UberUnsTemplate } from "@/templates/uber-uns";
import { type Metadata } from "next";
import { type ReactNode } from "react";

export const metadata: Metadata = {
  title: "Über uns",
  description: "Über uns",
};

const UberUns = (): ReactNode => {
  return <UberUnsTemplate />;
};

export default UberUns;
