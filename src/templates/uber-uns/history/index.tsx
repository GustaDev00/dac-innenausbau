import * as S from "./styles";
import C from "./constants";
import Animation from "@/components/atoms/animation";

export default () => {
  const { sectionRef } = Animation();

  return (
    <S.History ref={sectionRef}>
      <S.Wrapper>
        <S.Container>
          <S.Img {...C.img} />
        </S.Container>
        <S.Content>
          <S.Title>{C.title}</S.Title>
          <S.Description>{C.description}</S.Description>
          <S.Line />
          <S.Author>
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
