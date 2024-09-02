import * as S from "./styles";
import C from "./constants";
import { MailProps } from "./props";

export const Mail = ({ className, icon }: MailProps) => {
  return (
    <S.Mail className={className} {...C.link}>
      {icon && <S.Icon />}
      {C.mail}
    </S.Mail>
  );
};
