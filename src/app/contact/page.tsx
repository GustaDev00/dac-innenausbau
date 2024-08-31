import { ContactTemplate } from "@/templates/contact";
import { type Metadata } from "next";
import { type ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Description Contact",
};

const Contact = (): ReactNode => {
  return <ContactTemplate />;
};

export default Contact;
