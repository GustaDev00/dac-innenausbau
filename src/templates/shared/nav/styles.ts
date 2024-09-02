import styled, { css } from "styled-components";
import { Logo as _Logo } from "@/components/atoms/logo";
import { Mail as _Mail } from "@/components/atoms/mail";
import { Phone as _Phone } from "@/components/atoms/phone";
import { ButtonSwipe } from "@/components/atoms/button-swipe";

const Wrapper = css`
  padding: 1.5rem 9.4rem;
`;

const FlexCenter = css`
  display: flex;
  align-items: center;
`;

const FlexCenterSpaceBetween = css`
  ${FlexCenter}

  justify-content: space-between;
`;

export const Header = styled.header``;

export const Container = styled.div`
  ${Wrapper}

  ${FlexCenterSpaceBetween}
`;

export const Logo = styled(_Logo)``;

export const Nav = styled.nav`
  ${FlexCenterSpaceBetween}

  ${Wrapper}

  background: ${({ theme }) => theme.carnelian};
`;

export const List = styled.ul`
  ${FlexCenter}

  gap: 2.6rem;
`;

export const Item = styled.li`
  color: ${({ theme }) => theme.white};
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 212.5%;
  letter-spacing: -0.081rem;
`;

export const Link = styled.a``;

export const InfoContact = styled.div`
  ${FlexCenter}

  gap: 2.6rem;
`;

export const Mail = styled(_Mail)``;

export const Phone = styled(_Phone)``;

export const Contact = styled(ButtonSwipe)``;
