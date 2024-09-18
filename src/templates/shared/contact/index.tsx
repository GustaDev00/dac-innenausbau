import { ResponsiveElement } from "@/utils/responsive-element";
import { sendMail } from "@/api/send-mail";
import * as S from "./styles";
import C from "./constants";
import useAnimation from "./animations";
import { validations } from "./validations";
import { SendMailRequest } from "@/api/send-mail/request";
import { useFormik } from "formik";
import { useState } from "react";

export default () => {
  const { sectionRef } = useAnimation();
  const [isModalOpen, setIsModalOpen] = useState({
    isActive: true,
    send: true,
    title: <>Nachricht gesendet</>,
    text: (
      <>
        Ihre Nachricht wurde erfolgreich gesendet. Unser Team <br /> wird Ihnen in Kürze per E-Mail
        antworten.
      </>
    ),
  });
  const [loading, setLoading] = useState(false);

  const closeModal = (send?: boolean) => {
    setIsModalOpen({
      ...isModalOpen,
      isActive: false,
      send: send ?? true,
    });
  };

  const openModal = (send: boolean) => {
    setIsModalOpen({
      ...isModalOpen,
      isActive: true,
      send,
      title: send ? (
        <>Nachricht gesendet</>
      ) : (
        <>
          Füllen Sie alle Felder <br />
          korrekt aus
        </>
      ),
    });
  };

  const formik = useFormik<SendMailRequest>({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: validations,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        await sendMail(values);
        openModal(true);
        setLoading(false);

        setTimeout(() => {
          closeModal(true);
        }, 4000);

        formik.resetForm();
      } catch (error) {
        openModal(false);
        setLoading(false);

        setTimeout(() => {
          closeModal(false);
        }, 4000);
      }
    },
  });

  return (
    <>
      <S.Modal $active={isModalOpen.isActive} $error={isModalOpen.send}>
        <S.ModalContent>
          <S.ProgressBarModal duration={4} isActive={isModalOpen.isActive} />
          <S.WrapperModal>
            <S.IconModal />
            <S.TitleModal>{isModalOpen.title}</S.TitleModal>
            <S.TextModal>{isModalOpen.text}</S.TextModal>
            <S.ButtonModal onClick={() => closeModal()}>OK</S.ButtonModal>
          </S.WrapperModal>
        </S.ModalContent>
        <S.Blackout onClick={() => closeModal()} />
      </S.Modal>
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
                $error={Boolean(
                  formik.touched[input.name as keyof SendMailRequest] &&
                    formik.errors[input.name as keyof SendMailRequest],
                )}
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
            <S.Button type="submit">{!loading ? C.button : "Senden"}</S.Button>
          </S.Form>
        </S.Wrapper>
      </S.Contact>
    </>
  );
};
