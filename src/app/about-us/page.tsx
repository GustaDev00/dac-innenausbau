import { type Metadata } from "next";
import { type ReactNode } from "react";
import { AboutUsTemplate } from "@/templates/about-us";

export const metadata: Metadata = {
  title: "About Us",
  description: "Description About Us",
};

const AboutUs = (): ReactNode => {
  return <AboutUsTemplate />;
};

export default AboutUs;
