import * as S from "./styles";
import C from "./constants";
import SimpleVideoBackground from "@/components/atoms/simple-video-background";

export default () => {
  return (
    <S.Header>
      <SimpleVideoBackground
        src="/videos/background.mp4"
        type="video/mp4"
        fallbackImage="/videos/thumb.png"
      />
      <S.Wrapper>
        <S.Article>
          <S.Title>{C.title}</S.Title>
          <S.Description>{C.description}</S.Description>
          <S.Button {...C.button} />
        </S.Article>
        <S.ServicesInfo items={C.items} />
      </S.Wrapper>
    </S.Header>
  );
};
