import * as S from "./styles";
import C from "./constants";
import SimpleVideoBackground from "@/components/atoms/simple-video-background";
import useAnimation from "./animation";

export default () => {
  const { sectionRef } = useAnimation();

  return (
    <S.Header ref={sectionRef}>
      <SimpleVideoBackground
        src="/videos/background.mp4"
        type="video/mp4"
        fallbackImage="/videos/thumb.png"
      />
      <S.Wrapper>
        <S.Article>
          <S.Title id="title">{C.title}</S.Title>
          <S.Description id="description">{C.description}</S.Description>
          <S.Button {...C.button} />
        </S.Article>
        <S.ServicesInfo items={C.items} />
      </S.Wrapper>
    </S.Header>
  );
};
