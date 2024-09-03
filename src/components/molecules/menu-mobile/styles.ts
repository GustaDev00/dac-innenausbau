import styled from "styled-components";
import { Menu } from "@/components/svgs/menu";

export const MenuMobile = styled.div``;

export const Button = styled.button``;

export const Icon = styled(Menu)``;

export const Modal = styled.div`
  position: absolute;
  width: 70%;
  height: 100%;
  background: ${({ theme }) => theme.carnelian};
  transition: right 0.4s ease;
`;

export const List = styled.ul``;

export const Item = styled.li`
  position: relative;
  color: ${({ theme }) => theme.white};
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 212.5%;
  letter-spacing: -0.081rem;
  transition: font-weight 0.2s ease;

  &::before {
    content: "";
    position: absolute;
    width: 0;
    left: -1.3rem;
    height: 0.2rem;
    background: ${({ theme }) => theme.white};
    bottom: -1.5rem;
    transition: width 0.4s ease;
  }
`;

export const Link = styled.a``;

export const Close = styled.button``;

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
