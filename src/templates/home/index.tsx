"use client";

import { Nav } from "../shared/nav";
import Header from "./header";

export const HomeTemplate = () => {
  return (
    <Nav>
      <Header />
      <div style={{ height: "180vh" }}>HOME</div>
    </Nav>
  );
};
