import * as S from "./styles";
import { CardChooseUsProps } from "./props";
import useAnimation from "@/components/atoms/use-in-view/animation";

export const CardChooseUs = ({ items }: CardChooseUsProps) => {
  const { ref, isInView } = useAnimation();

  return (
    <S.CardServices ref={ref}>
      <S.Slide
        start={isInView}
        duration={8}
        arrow={false}
        items={items}
        renderContent={({ title, text, img }, index, isActive, duration) => (
          <S.Article key={index} $active={isActive}>
            <S.ProgressBar duration={duration} isActive={isInView && isActive} color="red" />
            <S.Wrapper>
              <S.Img {...img} />
              <S.Content>
                <S.Title>{title}</S.Title>
                <S.Description>{text}</S.Description>
              </S.Content>
            </S.Wrapper>
          </S.Article>
        )}
      />
    </S.CardServices>
  );
};
