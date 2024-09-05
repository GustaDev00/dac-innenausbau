import C from "./constants";
import * as S from "./styles";

export const Footer = () => {
  return (
    <S.Footer>
      <S.Wrapper>
        <S.Content>
          <S.WrapperLogo>
            <S.Logo />
          </S.WrapperLogo>

          <S.Categories>
            <S.Title>{C.categories.title}</S.Title>

            <S.List>
              {C.categories.list.map((category, index) => (
                <S.Item key={index}>
                  <S.Link {...category}>{category.title}</S.Link>
                </S.Item>
              ))}
            </S.List>
          </S.Categories>

          <S.Contact>
            <S.Title>{C.contact.title}</S.Title>

            <S.List>
              {C.contact.list.map((item, index) => (
                <S.Item key={index}>{item}</S.Item>
              ))}
            </S.List>
          </S.Contact>
        </S.Content>
        <S.Info>
          <S.Copy>{C.info.text}</S.Copy>
          <S.Agency>{C.info.agency}</S.Agency>
        </S.Info>
      </S.Wrapper>
    </S.Footer>
  );
};
