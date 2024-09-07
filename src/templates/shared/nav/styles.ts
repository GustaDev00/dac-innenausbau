import styled, { css } from "styled-components";
import { Logo as _Logo } from "@/components/atoms/logo";
import { Mail as _Mail } from "@/components/atoms/mail";
import { Phone as _Phone } from "@/components/atoms/phone";
import { ButtonSwipe } from "@/components/atoms/button-swipe";
import { mediaMaxWidth } from "@/utils/media-query";
import { MenuMobile as _MenuMobile } from "@/components/molecules/menu-mobile";

const Wrapper = css`
  padding: 1.5rem 9.4rem;

  ${mediaMaxWidth("mobile")`
    padding: 1.8rem 2.4rem;
  `}
`;

const FlexCenter = css`
  display: flex;
  align-items: center;
`;

const FlexCenterSpaceBetween = css`
  ${FlexCenter}

  justify-content: space-between;
`;

export const Header = styled.header`
  background: ${({ theme }) => theme.white};
  position: relative;
  margin-bottom: 6.2rem;
  z-index: 10;

  ${mediaMaxWidth("mobile")`
      margin-bottom: 4.4rem;
      height: 9rem;
  `}
`;

export const Container = styled.div`
  ${Wrapper}

  ${FlexCenterSpaceBetween}

  ${({ theme }) => mediaMaxWidth("mobile")`
    width: 100%;
    position: fixed;
    background: ${theme.white};
    z-index: 20;
  `}
`;

export const Logo = styled(_Logo)``;

export const MenuMobile = styled(_MenuMobile)`
  display: none;

  ${mediaMaxWidth("mobile")`
    display: block;
  `}
`;

export const Nav = styled.nav`
  width: 100%;
  position: absolute;
  top: 100%;
  ${FlexCenterSpaceBetween}

  ${Wrapper}

  background: ${({ theme }) => theme.carnelian};

  &.fixed {
    position: fixed;
    top: 0;
  }
`;

export const List = styled.ul`
  ${FlexCenter}

  gap: 2.6rem;

  ${mediaMaxWidth("mobile")`
    display: none;
  `}
`;

const selectedStyles = css`
  font-weight: 600;

  &::before {
    width: calc(100% + 2.6rem);
  }
`;

export const Item = styled.li<{ $selected: boolean }>`
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

  &:hover {
    ${selectedStyles}
  }

  ${({ $selected }) => $selected && selectedStyles}
`;

export const Link = styled.a``;

export const InfoContact = styled.div`
  ${FlexCenter}

  gap: 2.6rem;

  ${mediaMaxWidth("mobile")`
    gap: 1.4rem;
  `}
`;

export const Mail = styled(_Mail)`
  text-decoration: underline;
`;

export const Phone = styled(_Phone)``;

export const Contact = styled(ButtonSwipe)`
  ${mediaMaxWidth("mobile")`
    display: none;
  `}
`;
