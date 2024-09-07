import * as S from "./styles";
import C from "./constants";

export default () => {
  return (
    <S.Contact>
      <S.Wrapper>
        <S.Content>
          <S.Title>{C.content.title}</S.Title>
          <S.Info>
            <S.Mail icon />
            <S.Phone icon />
          </S.Info>
          <S.ShowImage>
            <S.Image {...C.content.img} />
            <S.Certificate>
              <S.CertificateImage {...C.content.Certificate} />
            </S.Certificate>
          </S.ShowImage>
          <S.Text>{C.content.text}</S.Text>
          <S.Clients>
            {C.content.clients.map((client, index) => (
              <S.Client key={index} {...client} />
            ))}
          </S.Clients>
        </S.Content>
        <S.Form>
          {C.form.map((input, index) => (
            <S.Label key={index}>
              <S.TextInput>{input.label}</S.TextInput>
              {input.type === "textarea" ? (
                <S.TextArea placeholder={input.placeholder} />
              ) : (
                <S.Input type={input.type} placeholder={input.placeholder} />
              )}
            </S.Label>
          ))}
          <S.Button>{C.button}</S.Button>
        </S.Form>
      </S.Wrapper>
    </S.Contact>
  );
};
