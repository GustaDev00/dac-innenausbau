import * as S from "./styles";
import C from "./constants";
import useAnimation from "@/components/atoms/use-in-view/animation";
import { CalculatorNumber } from "@/components/atoms/calculator-number";

export default () => {
  const { ref, isInView } = useAnimation();

  return (
    <S.AboutUs ref={ref}>
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
        <S.years>
          <CalculatorNumber targetNumber={C.years.number} start={isInView} />
          {C.years.text}
          <S.BordLines1 />
          <S.BordLines2 />
          <S.BordLines3 />
        </S.years>
      </S.Wrapper>
    </S.AboutUs>
  );
};
