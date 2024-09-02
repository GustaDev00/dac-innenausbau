import * as S from "./styles";
import C from "./constants";

export const Logo = ({ className }: { className?: string }) => (
  <S.Logo {...C.logo} className={className} />
);
