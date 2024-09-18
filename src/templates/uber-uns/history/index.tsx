import * as S from "./styles";
import C from "./constants";
import useAnimation from "./animations";

export default () => {
  const { sectionRef } = useAnimation();

  return (
    <S.History ref={sectionRef}>
      <S.Wrapper>
        <S.Container data-timline="img-author">
          <S.Img {...C.img} notLazy={true} />
        </S.Container>
        <S.Content>
          <S.Title>{C.title}</S.Title>
          <S.Description>{C.description}</S.Description>
          <S.Line />
          <S.Author data-timeline="author">
            <S.Article>
              <S.Name>{C.author.name}</S.Name>
              <S.Position>{C.author.position}</S.Position>
            </S.Article>
            <S.SignatureImg src={C.author.signature.src} alt={C.author.signature.alt} />
          </S.Author>
        </S.Content>
      </S.Wrapper>
    </S.History>
  );
};
