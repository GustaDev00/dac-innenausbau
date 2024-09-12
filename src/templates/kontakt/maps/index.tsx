import * as S from "./styles";
import C from "./constants";

export default () => {
  return (
    <S.Maps>
      <S.Wrapper>
        <S.Content>
          <S.Article>
            <S.Icon />
            <S.Title>{C.title}</S.Title>
          </S.Article>
          <S.Address>
            {C.address.map((line, index) => (
              <S.Text key={index}>{line}</S.Text>
            ))}
          </S.Address>
        </S.Content>
        <S.Container>
          <S.Img {...C.maps} />
        </S.Container>
      </S.Wrapper>
    </S.Maps>
  );
};
