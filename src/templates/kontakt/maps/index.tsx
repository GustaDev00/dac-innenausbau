import * as S from "./styles";
import C from "./constants";
import Animation from "@/components/atoms/animation";

export default () => {
  const { sectionRef } = Animation();

  return (
    <S.Maps ref={sectionRef}>
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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2696.6931119908563!2d9.481147878103217!3d47.47640947117786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479b1b963f50f08b%3A0x98b00d4184704c53!2sSpeerstrasse%208%2C%209400%20Rorschach%2C%20Switzerland!5e0!3m2!1sen!2sbr!4v1726255620873!5m2!1sen!2sbr"
            width="600"
            height="450"
            style={{ borderRadius: "4px", border: "none" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </S.Container>
      </S.Wrapper>
    </S.Maps>
  );
};
