"use client";

import { type FC } from "react";
import C from "./constants";
import Nav from "../shared/nav";
import { Header } from "@/components/organisms/header";
import History from "./history";
import Vision from "./vision";
import Gallery from "./gallery";

export const UberUnsTemplate: FC = () => {
  return (
    <Nav>
      <Header {...C.header} />
      <History />
      <Vision />
      <Gallery />
    </Nav>
  );
};
