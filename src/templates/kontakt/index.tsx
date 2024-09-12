"use client";

import { type FC } from "react";
import C from "./constants";
import Nav from "../shared/nav";
import Contact from "../shared/contact";
import WhyChooseUs from "../shared/why-choose-us";
import { Header } from "@/components/organisms/header";
import Maps from "./maps";

export const KontaktTemplate: FC = () => {
  return (
    <Nav>
      <Header {...C.header} />
      <Contact />
      <Maps />
      <WhyChooseUs />
    </Nav>
  );
};
