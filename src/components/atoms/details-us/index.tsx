import { DetailsUsProps } from "./props";
import * as S from "./styles";

export const DetailsUs = ({ text, title, className }: DetailsUsProps) => {
  return (
    <S.DetailsUs className={className}>
      <S.ShowImg>
        <S.Star />
      </S.ShowImg>
      <S.Article>
        <S.Title>{title}</S.Title>
        <S.Text>{text}</S.Text>
      </S.Article>
    </S.DetailsUs>
  );
};
