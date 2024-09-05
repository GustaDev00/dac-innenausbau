"use client";

import { Nav } from "../shared/nav";
import Header from "./header";
import WhyChooseUs from "./why-choose-us";

export const HomeTemplate = () => {
  return (
    <Nav>
      <Header />
      <WhyChooseUs />
    </Nav>
  );
};
