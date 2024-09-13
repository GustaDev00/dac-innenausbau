import * as S from "./styles";
import C from "./constants";
import { ResponsiveElement } from "@/utils/responsive-element";
import Animation from "@/components/atoms/animation";

export default () => {
  const { sectionRef } = Animation();

  return (
    <S.Vision ref={sectionRef}>
      <S.Wrapper>
        <ResponsiveElement
          breakpoints={{ mobile: <S.FloatingImage {...C.img.mobile} /> }}
          content={<S.FloatingImage {...C.img.desktop} />}
        />
        <S.Title>{C.title}</S.Title>
        <S.Description>{C.description}</S.Description>
        <S.List>
          {C.list.map(({ icon, title, description }) => (
            <S.ListItem key={title}>
              <S.Icon {...icon} />
              <S.Article>
                <S.ListTitle>{title}</S.ListTitle>
                <S.ListDescription>{description}</S.ListDescription>
              </S.Article>
            </S.ListItem>
          ))}
        </S.List>
      </S.Wrapper>
    </S.Vision>
  );
};
