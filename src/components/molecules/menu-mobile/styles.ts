import styled, { css } from "styled-components";
import { Menu } from "@/components/svgs/menu";
import { mediaMaxWidth } from "@/utils/media-query";
import { ButtonSwipe } from "@/components/atoms/button-swipe";
import { Mail as _Mail } from "@/components/atoms/mail";
import { Phone as _Phone } from "@/components/atoms/phone";

export const MenuMobile = styled.div``;

export const Button = styled.button``;

export const Icon = styled(Menu)``;

export const Modal = styled.div`
  position: absolute;
  width: 80%;
  height: 100%;
  background: ${({ theme }) => theme.white};
  transition: right 0.4s ease;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("/imgs/uber-uns/vision/background.png") no-repeat bottom;
    background-size: contain;
    z-index: 1;

    ${mediaMaxWidth("mobile")`
      background-size: cover;
    `}
  }
`;

export const Wrapper = styled.div`
  position: relative;
  padding: 2.4rem 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 2;
`;

export const Header = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 0rem 3rem 1.8rem;

  &::before {
    position: absolute;
    content: "";
    left: 0;
    bottom: 0;
    height: 0.1rem;
    width: 100%;
    background: ${({ theme }) => theme.black01};
  }
`;

export const TextModal = styled.p`
  color: ${({ theme }) => theme.black};
  font-size: 2.4rem;
  font-weight: 600;
  line-height: 141.667%;
  letter-spacing: -0.1214rem;
`;

export const Container = styled.div`
  padding: 0rem 3rem;
`;

export const Footer = styled.div`
  padding: 0 3rem;
`;

export const TitleFooter = styled.h3`
  color: ${({ theme }) => theme.black};
  font-size: 2rem;
  font-weight: 700;
  line-height: 110%;
  margin-bottom: 2.4rem;
`;

export const TextFooter = styled.p`
  color: ${({ theme }) => theme.eerieBlackLight};
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 140%;
  display: flex;
  gap: 1rem;
  align-items: center;

  a {
    margin-top: 0.6rem;
  }
  svg path {
    fill: ${({ theme }) => theme.eerieBlackLight};
  }
`;

export const Mail = styled(_Mail)`
  color: ${({ theme }) => theme.eerieBlackLight};
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 140%;
  margin: 1.2rem 0;
`;

export const Phone = styled(_Phone)`
  color: ${({ theme }) => theme.eerieBlackLight};
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 140%;
`;

export const ButtonContact = styled(ButtonSwipe)`
  opacity: 1;
  width: fit-content;
  margin-top: 2.4rem;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Line = styled.div`
  height: 0.1rem;
  width: 100%;
  background: ${({ theme }) => theme.black01};
`;

export const Item = styled.li<{ $selected: boolean }>`
  position: relative;
  color: ${({ theme }) => theme.black};
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 188.889%;
  letter-spacing: -0.0911rem;
  transition: font-weight 0.2s ease;

  ${({ $selected, theme }) =>
    $selected &&
    css`
      font-weight: 700;

      a::after {
        content: "";
        display: block;
        width: 0.8rem;
        height: 0.8rem;
        background: ${theme.carnelian};
        border-radius: 50%;
      }
    `}
`;

export const Link = styled.a`
  padding: 1rem 2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Close = styled.button`
  width: 3.5rem;
  height: 3.5rem;

  &:before {
    content: "";
    display: block;
    width: 3.5rem;
    height: 3.5rem;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='35' height='35' viewBox='0 0 35 35' fill='none'%3E%3Ccircle cx='17.5' cy='17.5' r='17.5' fill='%23EFEFEF'/%3E%3Cpath d='M17.364 15.95L22.314 11L23.728 12.414L18.778 17.364L23.728 22.314L22.314 23.728L17.364 18.778L12.414 23.728L11 22.314L15.95 17.364L11 12.414L12.414 11L17.364 15.95Z' fill='%23BCBCBC'/%3E%3C/svg%3E");
    background-size: contain;
  }
`;

export const Black = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.black02};
`;

export const Overlay = styled.div<{ $open: boolean }>`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 20;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
  transition: opacity 0.4s ease, visibility 0.4s ease;

  ${Modal} {
    right: ${({ $open }) => ($open ? "0" : "-100%")};
  }
`;
