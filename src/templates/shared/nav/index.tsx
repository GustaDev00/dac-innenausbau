import { ReactNode } from "react";
import * as S from "./styles";
import { ResponsiveElement } from "@/utils/responsive-element";
import { NavDesktop } from "./desktop";
import { NavMobile } from "./mobile";
import { Footer } from "../footer";
import useAnimation from "./animation";

export default ({ children }: { children: ReactNode }) => {
  const { loadingRef } = useAnimation();

  return (
    <>
      <S.Loading ref={loadingRef} />
      <S.Header>
        <ResponsiveElement
          content={<NavDesktop />}
          breakpoints={{
            mobile: <NavMobile />,
          }}
        />
      </S.Header>

      {children}

      <Footer />
    </>
  );
};
