"use client";

import { type FC } from "react";
import C from "./constants";
import Nav from "../shared/nav";
import { Header } from "@/components/organisms/header";
import Services from "./services";

export const DienstleistungenTemplate: FC = () => {
  return (
    <Nav>
      <Header {...C.header} />
      <Services />
    </Nav>
  );
};
