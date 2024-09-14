import styled, { keyframes } from "styled-components";
import { ButtonSwipe } from "@/components/atoms/button-swipe";
import { LazyImage } from "@/components/atoms/lazy-image";
import { Mail as _Mail } from "@/components/atoms/mail";
import { Phone as _Phone } from "@/components/atoms/phone";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { mediaMaxWidth } from "@/utils/media-query";

const moveBackground = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 992% 0px;
  }
`;

export const Contact = styled.section`
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    display: block;
    position: absolute;
    background: url("/imgs/contact/bg.png") repeat-x;
    background-size: cover;
    background-position: 100% 0;
    height: 90%;
    width: 100%;
    left: 0rem;
    top: 5rem;
    z-index: 1;
    animation: ${moveBackground} 30s linear infinite;

    ${mediaMaxWidth("mobile")`
      width: 100%;
      height: 50%;
      top: 5rem;
      animation: ${moveBackground} 200s linear infinite;
    `}
  }
`;

export const Wrapper = styled(_Wrapper)`
  flex-direction: row;
  align-items: flex-end;
  gap: 13.2rem;
  z-index: 2;

  ${mediaMaxWidth("mobile")`
    align-items: flex-start;
    flex-direction: column;
    gap: 5rem;
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.8rem;

  svg path {
    fill: ${({ theme }) => theme.carnelian};
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.smokyBlack};
  font-size: 4.8rem;
  font-weight: 700;
  line-height: 113%;

  ${mediaMaxWidth("mobile")`
    font-size: 3.8rem;
  `}
`;

export const ShowImage = styled.div`
  position: relative;
`;

export const Image = styled(LazyImage)`
  width: 100%;
`;

export const Certificate = styled.div`
  position: absolute;
  right: -3rem;
  top: 50%;
  transform: translate(0%, -50%);

  ${mediaMaxWidth("mobile")`
    top: 75%;
    right: -1rem;
  `}
`;

export const CertificateImage = styled(LazyImage)`
  height: 9.2rem;
  object-fit: cover;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.smokyBlack};
  font-size: 2.2rem;
  font-weight: 500;
  line-height: 113%;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Mail = styled(_Mail)`
  color: ${({ theme }) => theme.carnelian};
`;

export const Phone = styled(_Phone)`
  color: ${({ theme }) => theme.carnelian};
`;

export const Clients = styled.div`
  display: flex;
  gap: 4.2rem;
`;

export const Client = styled(LazyImage)`
  height: 9.2rem;
  filter: grayscale(1);
  opacity: 0.7;
  transition: opacity 0.4s ease, filter 0.4s ease;

  &:hover {
    filter: grayscale(0);
    opacity: 1 !important;
  }
`;

export const Form = styled.form`
  width: 40rem;
  padding: 3.2rem 2.2rem;
  background: ${({ theme }) => theme.white};
  border-radius: 0.4rem;
  border: 1px solid ${({ theme }) => theme.black05};
  box-shadow: 0rem 0.8rem 2.4rem 0rem ${({ theme }) => theme.black07};
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: flex-start;

  ${mediaMaxWidth("mobile")`
    width: 100%;
  `}
`;

export const Label = styled.label`
  width: 93.6%;
  color: ${({ theme }) => theme.black};
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 130%;
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
`;

export const TextInput = styled.p``;

export const Input = styled.input`
  background: ${({ theme }) => theme.antiFlashWhite};
  padding: 2.1rem 2.4rem;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 140%;

  &::placeholder {
    color: ${({ theme }) => theme.oldSilver};
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 140%;
  }
`;

export const TextArea = styled.textarea`
  height: 13rem;
  resize: none;
  background: ${({ theme }) => theme.antiFlashWhite};
  padding: 2.1rem 2.4rem;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 140%;

  &::placeholder {
    color: ${({ theme }) => theme.oldSilver};
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 140%;
  }
`;

export const Button = styled(ButtonSwipe)`
  width: fit-content;
`;
