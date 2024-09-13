import * as S from "./styles";
import C from "./constants";
import Animation from "@/components/atoms/animation";

export default () => {
  const { sectionRef } = Animation();

  return (
    <S.WhyChooseUs ref={sectionRef}>
      <S.Wrapper>
        <S.Content>
          <S.Info>
            <S.Icon />
            <S.Text>{C.text}</S.Text>
          </S.Info>
          <S.Article>
            <S.Title>{C.title}</S.Title>
            <S.Description>{C.description}</S.Description>
          </S.Article>
        </S.Content>
        <S.Card items={C.cards} />
      </S.Wrapper>
    </S.WhyChooseUs>
  );
};
