import { ProgressBar as _ProgressBar } from "@/components/atoms/progress-bar";
import { CardSlide } from "@/components/molecules/card-slide";
import { ShortArrowRight } from "@/components/svgs/short-arrow-right";
import styled, { css } from "styled-components";

export const CardServices = styled.div`
  background: ${({ theme }) => theme.red};
`;

export const Slide = styled(CardSlide)``;

export const Article = styled.div<{ $active: boolean }>`
  position: relative;
  opacity: 0;
  visibility: hidden;
  z-index: 0;
  transition: opacity 0.8s ease, visibility 0.8s ease, z-index 0.8s ease;

  ${({ $active }) =>
    $active &&
    css`
      opacity: 1;
      visibility: visible;
      z-index: 1;
    `}
`;

export const Wrapper = styled.article`
  padding: 2.6rem 3.9rem;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.white};
  font-size: 3.4rem;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: -0.172rem;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.white};
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 193.75%;
  letter-spacing: -0.0002rem;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.white};
  font-size: 1.9rem;
  font-weight: 600;
  line-height: 189.474%;
  letter-spacing: -0.0961rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  transition: opacity 0.4s ease;

  &:hover {
    opacity: 0.6;
    transition: opacity 0.4s ease;
  }
`;

export const Icon = styled.div`
  border: 0.1rem solid ${({ theme }) => theme.white05};
  border-radius: 50%;
  width: 3.2rem;
  height: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Arrow = styled(ShortArrowRight)``;

export const ProgressBar = styled(_ProgressBar)`
  border-radius: 0;
`;
