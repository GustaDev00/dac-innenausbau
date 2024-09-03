import * as S from "./styles";
import useAnimation from "./animation";
import { ButtonTransparentProps } from "./props";

export const ButtonTransparent = ({ text, link, className }: ButtonTransparentProps) => {
  useAnimation();

  return (
    <S.Button href={link} title={link} className={className}>
      <S.Text>{text}</S.Text>
      <S.Icon />
    </S.Button>
  );
};
