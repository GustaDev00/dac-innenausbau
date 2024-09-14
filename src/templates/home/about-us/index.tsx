import * as S from "./styles";
import C from "./constants";
import { CalculatorNumber } from "@/components/atoms/calculator-number";
import animation from "./animations";

export default () => {
  const { sectionRef, isInView } = animation();

  return (
    <S.AboutUs ref={sectionRef}>
      <S.Wrapper>
        <S.Container>
          <S.TitleButton>
            <S.Title className="title">{C.title}</S.Title>
            <S.Button {...C.button} />
          </S.TitleButton>
          <S.Description className="description">{C.description}</S.Description>
          <S.List className="list">
            {C.moreAbour.map(({ title, text }, index) => (
              <S.item key={index} title={title} text={text} />
            ))}
          </S.List>
        </S.Container>
        <S.years className="years">
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
