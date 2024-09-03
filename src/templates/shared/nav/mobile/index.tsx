import * as S from "../styles";
import C from "../constants";

export const NavMobile = () => {
  return (
    <>
      <S.Container>
        <S.Logo />
        <S.MenuMobile links={C.links} />
      </S.Container>

      <S.Nav>
        <S.InfoContact>
          <S.Mail icon />
          <S.Phone icon />
        </S.InfoContact>
      </S.Nav>
    </>
  );
};
