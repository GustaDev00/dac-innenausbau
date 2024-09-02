import { ReactNode } from "react";
import * as S from "./styles";
import C from "./constants";

export const Nav = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <S.Header>
        <S.Container>
          <S.Logo />
          <S.Contact>{C.contact}</S.Contact>
        </S.Container>
        <S.Nav>
          <S.List>
            {C.links.map((link) => (
              <S.Item key={link.title}>
                <S.Link {...link}>{link.title}</S.Link>
              </S.Item>
            ))}
          </S.List>

          <S.InfoContact>
            <S.Mail icon />
            <S.Phone icon />
          </S.InfoContact>
        </S.Nav>
      </S.Header>

      {children}
    </>
  );
};
