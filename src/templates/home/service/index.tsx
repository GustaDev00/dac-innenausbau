import * as S from "./styles";
import C from "./constants";

export default () => {
  return (
    <S.Service>
      <S.Wrapper>
        <S.Content>
          <S.Tag>
            <S.Tools />
            <S.TagText>{C.tag.text}</S.TagText>
          </S.Tag>
          <S.Title>{C.title}</S.Title>
          <S.Line />
          <S.Description>{C.description}</S.Description>
          <S.button href={C.button.link}>{C.button.text}</S.button>
        </S.Content>
        <S.Container>
          <S.Group>
            <S.TagImg>
              <S.Check />
              <S.TagImgText>{C.content.tag}</S.TagImgText>
            </S.TagImg>
            <S.Shadow>
              <S.Img1 {...C.content.imgFirst} />
            </S.Shadow>
          </S.Group>
          <S.Img2 {...C.content.imgSecond} />
        </S.Container>
      </S.Wrapper>
    </S.Service>
  );
};
