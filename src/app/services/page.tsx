import { ServicesTemplate } from "@/templates/services";
import { type Metadata } from "next";
import { type ReactNode } from "react";

export const metadata: Metadata = {
  title: "Services",
  description: "Description Services",
};

const Services = (): ReactNode => {
  return <ServicesTemplate />;
};

export default Services;
