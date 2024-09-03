import * as S from "./styles";
import useAnimation from "./animation";
import { CardServicesProps } from "./props";

export const CardServices = ({ items }: { items: Array<any> }) => {
  console.log(items);

  return (
    <S.CardServices>
      <S.Slide
        duration={8}
        arrow={false}
        items={items}
        renderContent={({ title, description, href }, index, isActive, duration) => (
          <S.Article key={index} $active={isActive}>
            <S.Wrapper>
              <S.Title>{title}</S.Title>
              <S.Description>{description}</S.Description>
              <S.Link href={href}>
                Learn more
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
