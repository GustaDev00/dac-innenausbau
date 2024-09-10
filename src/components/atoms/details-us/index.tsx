import { DetailsUsProps } from "./props";
import * as S from "./styles";

export const DetailsUs = ({ text, title }: DetailsUsProps) => {
  return (
    <S.DetailsUs>
      <S.ShowImg>
        <S.Star />
      </S.ShowImg>
      <S.Title>{title}</S.Title>
      <S.Text>{text}</S.Text>
    </S.DetailsUs>
  );
};
