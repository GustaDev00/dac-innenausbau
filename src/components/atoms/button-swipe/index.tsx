import * as S from "./styles";
import { ButtonSwipeProps } from "./props";

export const ButtonSwipe = ({ href, className, onClick, children, ...props }: ButtonSwipeProps) => {
  return href ? (
    <S.LinkSwipe className={className} href={href}>
      {children}
      <S.Icon />
    </S.LinkSwipe>
  ) : (
    <S.ButtonSwipe className={className} {...props}>
      {children}
      <S.Icon />
    </S.ButtonSwipe>
  );
};
