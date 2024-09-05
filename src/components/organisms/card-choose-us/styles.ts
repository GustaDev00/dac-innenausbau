import styled, { css } from "styled-components";
import { mediaMaxWidth } from "@/utils/media-query";
import { ProgressBar as _ProgressBar } from "@/components/atoms/progress-bar";
import { CardSlide } from "@/components/molecules/card-slide";
import { LazyImage } from "@/components/atoms/lazy-image";

export const CardServices = styled.div`
  width: 77rem;
  background: ${({ theme }) => theme.white};
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.1);

  ${mediaMaxWidth("mobile")`
    width: 100%;
  `}
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
  padding: 2.4rem 4.4rem 2.4rem 3.8rem;
  display: flex;
  align-items: center;
  gap: 2.2rem;

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
    align-items: flex-start;
    padding: 2.4rem;
  `}
`;

export const Content = styled.div``;

export const Img = styled(LazyImage)`
  width: fit-content;
  height: 7rem;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.smokyBlack};
  font-weight: 700;
  line-height: 113%;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.davysGrey};
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 164.286%;
  letter-spacing: -0.0001rem;
`;

export const ProgressBar = styled(_ProgressBar)`
  position: absolute;
  top: 0;
  border-radius: 0;
`;
