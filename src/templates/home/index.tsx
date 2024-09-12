"use client";

import Nav from "../shared/nav";
import Header from "./header";
import Contact from "../shared/contact";
import AboutUs from "./about-us";
import Service from "./service";
import WhyChooseUs from "../shared/why-choose-us";

export const HomeTemplate = () => {
  return (
    <Nav>
      <Header />
      <Contact />
      <Service />
      <AboutUs />
      <WhyChooseUs />
    </Nav>
  );
};
