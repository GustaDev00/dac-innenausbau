import * as S from "./styles";
import C from "./constants";

export default () => (
  <S.Header>
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
