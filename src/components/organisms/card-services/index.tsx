import * as S from "./styles";
import { CardServicesProps } from "./props";
import useAnimation from "@/components/atoms/use-in-view/animation";

export const CardServices = ({ items }: CardServicesProps) => {
  const { ref, isInView } = useAnimation();

  return (
    <S.CardServices ref={ref} data-timeline="card-services">
      <S.Slide
        duration={8}
        arrow={false}
        items={items}
        start={isInView}
        renderContent={({ title, description, href }, index, isActive, duration) => (
          <S.Article key={index} $active={isActive}>
            <S.Wrapper>
              <S.Content>
                <S.Title>{title}</S.Title>
                <S.Description>{description}</S.Description>
              </S.Content>
              <S.Link href={href}>
                Mehr dazu
                <S.Icon>
                  <S.Arrow />
                </S.Icon>
              </S.Link>
            </S.Wrapper>
            <S.ProgressBar duration={duration} isActive={isActive} color="white" />
          </S.Article>
        )}
      />
    </S.CardServices>
  );
};
