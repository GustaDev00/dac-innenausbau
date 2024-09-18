import styled, { css, keyframes } from "styled-components";
import { ButtonSwipe } from "@/components/atoms/button-swipe";
import { LazyImage } from "@/components/atoms/lazy-image";
import { Mail as _Mail } from "@/components/atoms/mail";
import { Phone as _Phone } from "@/components/atoms/phone";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { mediaMaxWidth } from "@/utils/media-query";
import { ProgressBar } from "@/components/atoms/progress-bar";

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

  ${mediaMaxWidth("mobile")`
    width: 100%;
  `}
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
  width: 41.1rem;
  height: 24.5rem;
  object-fit: cover;

  ${mediaMaxWidth("mobile")`
    width: 100%;
    height: 100%;
  `}
`;

export const Certificate = styled.div`
  position: absolute;
  right: 0rem;
  top: 50%;
  transform: translate(0%, -50%);

  ${mediaMaxWidth("mobile")`
    top: 72%;
    right: -1.4rem;
  `}
`;

export const CertificateImage = styled(LazyImage)`
  height: 9.2rem;
  object-fit: cover;
  background: white;
  border-radius: 50%;
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
  color: ${({ theme }) => theme.smokyBlack};
`;

export const Phone = styled(_Phone)`
  color: ${({ theme }) => theme.smokyBlack};
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
  width: 52rem;
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

export const Label = styled.label<{ $error: boolean }>`
  width: 93.6%;
  color: ${({ theme }) => theme.black};
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 130%;
  display: flex;
  flex-direction: column;
  gap: 1.3rem;

  ${({ $error, theme }) =>
    $error &&
    `
    color: ${theme.carnelian};

    input, textarea {
      border-color: ${theme.carnelian};
      color: ${theme.carnelian};

      &::placeholder {
        color: ${theme.carnelian};
      }
    }
  `}
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

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 0.8rem;
  border: 0.1rem solid ${({ theme }) => theme.platinum};
  background: ${({ theme }) => theme.white};
  width: 44.5rem;
  box-shadow: 0rem 0rem 0.2rem 0rem ${({ theme }) => theme.black12},
    0rem 2rem 2rem 0rem ${({ theme }) => theme.black07};

  ${mediaMaxWidth("mobile")`
    width: 95%;

    h2 {
      line-height: 120%;
    }

    p {
      margin-top: 1rem;

      br {
        display: none;
      }
    }
  `}
`;

export const ProgressBarModal = styled(ProgressBar)`
  position: relative;
  top: -0.03rem;
  height: 0.14rem;
  width: 96%;
  margin: auto;
  border-radius: 50rem;

  > div {
    background-color: ${({ theme }) => theme.green};
  }

  ${mediaMaxWidth("mobile")`
    height: 0.18rem;
    top: -0.04rem;
  `}
`;

export const WrapperModal = styled.div`
  padding: 3.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: var(--inter);
`;

export const IconModal = styled.div`
  width: 3.8rem;
  height: 3.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.2rem;

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='49' height='48' viewBox='0 0 49 48' fill='none'%3E%3Cpath d='M24.5 44C30.0228 44 35.0228 41.7614 38.6421 38.1421C42.2614 34.5228 44.5 29.5228 44.5 24C44.5 18.4772 42.2614 13.4772 38.6421 9.85786C35.0228 6.23858 30.0228 4 24.5 4C18.9772 4 13.9772 6.23858 10.3579 9.85786C6.73858 13.4772 4.5 18.4772 4.5 24C4.5 29.5228 6.73858 34.5228 10.3579 38.1421C13.9772 41.7614 18.9772 44 24.5 44Z' fill='white' stroke='%232ECC71' stroke-width='4' stroke-linejoin='round'/%3E%3Cpath d='M16.5 24L22.5 30L34.5 18' stroke='%232ECC71' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")
      no-repeat;
    background-size: cover;
  }
`;

export const TitleModal = styled.h2`
  color: ${({ theme }) => theme.davysGrey};
  font-family: var(--inter);
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
`;

export const TextModal = styled.p`
  display: block;
  color: rgba(84, 89, 94, 0.6);
  text-align: center;

  font-size: 1.4rem;
  font-weight: 400;
  line-height: 157.143%;
`;

export const ButtonModal = styled.button`
  margin-top: 2.2rem;
  color: ${({ theme }) => theme.cultured};
  font-size: 1.6rem;
  font-weight: 500;
  background: ${({ theme }) => theme.green};
  width: 85%;
  border-radius: 0.8rem;
  padding: 0.8rem 2rem;
`;

export const Blackout = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.black25};
`;

export const Modal = styled.div<{ $active: boolean; $error: boolean }>`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.4s ease, opacity 0.4s ease;

  ${({ $active }) =>
    $active &&
    css`
      visibility: visible;
      opacity: 1;
    `}

  ${({ $error, theme }) =>
    !$error &&
    css`
      ${IconModal} {
        &::before {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='47' height='47' viewBox='0 0 47 47' fill='none'%3E%3Cpath d='M23.5 0C10.528 0 0 10.528 0 23.5C0 36.472 10.528 47 23.5 47C36.472 47 47 36.472 47 23.5C47 10.528 36.472 0 23.5 0ZM25.85 35.25H21.15V30.55H25.85V35.25ZM25.85 25.85H21.15V11.75H25.85V25.85Z' fill='%23E74C3C'/%3E%3C/svg%3E");
        }
      }

      ${TextModal} {
        display: none;
      }

      ${ProgressBarModal} {
        > div {
          background-color: ${theme.redForm};
        }
      }

      ${ButtonModal} {
        background: ${theme.redForm};
      }
    `}

  z-index: 10;
`;
