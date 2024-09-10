import * as S from "./styles";
import { SimpleVideoBackgroundProps } from "./props";

const SimpleVideoBackground = ({ src, type }: SimpleVideoBackgroundProps) => {
  return (
    <S.LocalVideo>
      <S.Shadow />
      <S.Video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          objectFit: "cover",
        }}
      >
        <source src={src} type={type} />
        Seu navegador não suporta vídeos.
      </S.Video>
    </S.LocalVideo>
  );
};

export default SimpleVideoBackground;
