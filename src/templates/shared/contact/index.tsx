import { ResponsiveElement } from "@/utils/responsive-element";
import { sendMail } from "@/api/send-mail";
import * as S from "./styles";
import C from "./constants";
import useAnimation from "./animations";
import { validations } from "./validations";
import { SendMailRequest } from "@/api/send-mail/request";
import { useFormik } from "formik";

export default () => {
  const { sectionRef } = useAnimation();

  const formik = useFormik<SendMailRequest>({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: validations,
    onSubmit: async (values) => {
      console.log(values);
      try {
        await sendMail(values);
        alert("Email enviado com sucesso");
      } catch (error) {
        alert("Erro ao enviar email");
      }
    },
  });

  return (
    <S.Contact ref={sectionRef}>
      <S.Wrapper>
        <S.Content>
          <S.Title>{C.content.title}</S.Title>
          <S.Info>
            <S.Mail icon />
            <S.Phone icon />
          </S.Info>
          <S.ShowImage>
            <ResponsiveElement
              breakpoints={{ mobile: <S.Image {...C.content.img.mobile} /> }}
              content={<S.Image {...C.content.img.desktop} />}
            />
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
        <S.Form onSubmit={formik.handleSubmit}>
          {C.form.map((input, index) => (
            <S.Label
              key={index}
              $error={Boolean(formik.errors[input.name as keyof SendMailRequest])}
            >
              <S.TextInput>{input.label}</S.TextInput>
              {input.type === "textarea" ? (
                <S.TextArea
                  {...formik.getFieldProps(input.name)}
                  placeholder={input.placeholder}
                  name={input.name}
                />
              ) : (
                <S.Input
                  {...formik.getFieldProps(input.name)}
                  type={input.type}
                  name={input.name}
                  placeholder={input.placeholder}
                />
              )}
            </S.Label>
          ))}
          <S.Button type="submit">{C.button}</S.Button>
        </S.Form>
      </S.Wrapper>
    </S.Contact>
  );
};
