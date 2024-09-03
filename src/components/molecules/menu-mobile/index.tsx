import * as S from "./styles";
import { MenuMobileProps } from "./props";
import { useState } from "react";

export const MenuMobile = ({ links }: MenuMobileProps) => {
  const [open, setOpen] = useState(false);

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
          <S.Close onClick={handleClick} />
          <S.List>
            {links.map((link, index) => (
              <S.Item key={index}>
                <S.Link {...link}>{link.title}</S.Link>
              </S.Item>
            ))}
          </S.List>
        </S.Modal>
        <S.Black onClick={handleClick} />
      </S.Overlay>
    </S.MenuMobile>
  );
};
