import * as S from "./styles";
import C from "./constants";

export default () => {
  return (
    <S.AboutUs>
      <S.Wrapper>
        <S.Container>
          <S.TitleButton>
            <S.Title>{C.title}</S.Title>
            <S.Button {...C.button} />
          </S.TitleButton>
          <S.Description>{C.description}</S.Description>
          <S.List>
            {C.moreAbour.map(({ title, text }, index) => (
              <S.item key={index} title={title} text={text} />
            ))}
          </S.List>
        </S.Container>
        <S.years>{C.years}</S.years>
      </S.Wrapper>
    </S.AboutUs>
  );
};
