import { ReactNode } from "react";
import * as S from "./styles";
import { ResponsiveElement } from "@/utils/responsive-element";
import { NavDesktop } from "./desktop";
import { NavMobile } from "./mobile";

export const Nav = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <S.Header>
        <ResponsiveElement
          content={<NavDesktop />}
          breakpoints={{
            mobile: <NavMobile />,
          }}
        />
      </S.Header>

      {children}
    </>
  );
};
