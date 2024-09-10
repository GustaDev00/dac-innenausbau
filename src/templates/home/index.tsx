"use client";

import Nav from "../shared/nav";
import Header from "./header";
import Contact from "../shared/contact";
import WhyChooseUs from "./why-choose-us";
import AboutUs from "./about-us";

export const HomeTemplate = () => {
  return (
    <Nav>
      <Header />
      <Contact />
      <AboutUs />
      <WhyChooseUs />
    </Nav>
  );
};
