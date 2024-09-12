import * as S from "./styles";
import C from "./constants";
import { ResponsiveElement } from "@/utils/responsive-element";
import { GalleryDesktop } from "./desktop";
import { GalleryMobile } from "./mobile";

export default () => {
  return (
    <S.Gallery>
      <S.Hook {...C.img} />
      <S.Wrapper>
        <S.Article>
          <S.Title>{C.title}</S.Title>
          <S.Description>{C.description}</S.Description>
        </S.Article>
        <ResponsiveElement
          breakpoints={{ mobile: <GalleryMobile /> }}
          content={<GalleryDesktop />}
        />
      </S.Wrapper>
    </S.Gallery>
  );
};
