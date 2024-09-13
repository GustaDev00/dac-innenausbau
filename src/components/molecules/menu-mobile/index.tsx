import * as S from "./styles";
import { MenuMobileProps } from "./props";
import { useState } from "react";
import { usePathname } from "next/navigation";
import C from "@/constants";

export const MenuMobile = ({ links }: MenuMobileProps) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <S.MenuMobile>
      <S.Button onClick={handleClick}>
        <S.Icon />
      </S.Button>

      <S.Overlay $open={open}>
        <S.Modal>
          <S.Wrapper>
            <S.Header>
              <S.TextModal>Menu</S.TextModal>
              <S.Close onClick={handleClick} />
            </S.Header>
            <S.Container>
              <S.List>
                {links.map((link, index) => (
                  <S.Item key={index} $selected={pathname === link.href}>
                    <S.Link {...link}>{link.title}</S.Link>
                  </S.Item>
                ))}
              </S.List>
            </S.Container>
            <S.Line />
            <S.Footer>
              <S.TitleFooter>{C.title}</S.TitleFooter>
              <S.Phone />
              <S.Mail />
              <S.TextFooter>{C.socialShare}</S.TextFooter>
              <S.ButtonContact {...C.kontakt}>{C.kontakt.title}</S.ButtonContact>
            </S.Footer>
          </S.Wrapper>
        </S.Modal>
        <S.Black onClick={handleClick} />
      </S.Overlay>
    </S.MenuMobile>
  );
};
