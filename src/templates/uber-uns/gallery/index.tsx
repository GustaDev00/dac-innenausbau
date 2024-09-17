import * as S from "./styles";
import C from "./constants";
import { ResponsiveElement } from "@/utils/responsive-element";
import { GalleryDesktop } from "./desktop";
import { GalleryMobile } from "./mobile";
import Animation from "./animations";

export default () => {
  const { sectionRef } = Animation();

  return (
    <S.Gallery ref={sectionRef}>
      <S.Hook {...C.img} />
      <S.Wrapper>
        <S.Article>
          <S.Title>{C.title}</S.Title>
          <S.Description>{C.description}</S.Description>
        </S.Article>
        <S.SliderList data-timeline="gallery">
          <ResponsiveElement
            breakpoints={{ mobile: <GalleryMobile /> }}
            content={<GalleryDesktop />}
          />
        </S.SliderList>
      </S.Wrapper>
    </S.Gallery>
  );
};
