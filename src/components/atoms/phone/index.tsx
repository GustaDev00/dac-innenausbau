import * as S from "./styles";
import C from "./constants";
import { PhoneProps } from "./props";

export const Phone = ({ className, icon }: PhoneProps) => {
  return (
    <S.Phone className={className} {...C.link}>
      {icon && <S.Icon />}
      {C.phone}
    </S.Phone>
  );
};
