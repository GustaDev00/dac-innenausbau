import * as S from "../styles";
import C from "../constants";
import useAnimation from "../animation";
import { usePathname } from "next/navigation";

export const NavDesktop = () => {
  const { headerRef, navRef } = useAnimation();
  const pathname = usePathname();

  return (
    <>
      <S.Container ref={headerRef}>
        <S.Logo />
        <S.Contact>{C.contact}</S.Contact>
      </S.Container>

      <S.Nav ref={navRef}>
        <S.List>
          {C.links.map((link) => (
            <S.Item key={link.title} $selected={pathname === link.href}>
              <S.Link {...link}>{link.title}</S.Link>
            </S.Item>
          ))}
        </S.List>

        <S.InfoContact>
          <S.Mail icon />
          <S.Phone icon />
        </S.InfoContact>
      </S.Nav>
    </>
  );
};
