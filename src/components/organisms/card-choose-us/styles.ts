import styled, { css } from "styled-components";
import { mediaMaxWidth } from "@/utils/media-query";
import { ProgressBar as _ProgressBar } from "@/components/atoms/progress-bar";
import { CardSlide } from "@/components/molecules/card-slide";
import { LazyImage } from "@/components/atoms/lazy-image";

export const CardServices = styled.div`
  width: 77rem;

  ${mediaMaxWidth("mobile")`
    width: 100%;
  `}

  .swiper-button-prev {
    display: none;
  }

  .swiper-button-next {
    width: 5.3rem;
    height: 5.3rem;
    right: -10rem;

    &::after {
      display: none;
    }

    &::before {
      display: block;
      content: "";
      width: 5.3rem;
      height: 5.3rem;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='77' height='77' viewBox='0 0 77 77' fill='none'%3E%3Cg filter='url(%23filter0_d_133_2337)'%3E%3Ccircle cx='38.5' cy='28.5' r='26.5' transform='rotate(90 38.5 28.5)' fill='white'/%3E%3Cpath d='M48.7767 29.2071C49.1672 28.8166 49.1672 28.1834 48.7767 27.7929L42.4127 21.4289C42.0222 21.0384 41.389 21.0384 40.9985 21.4289C40.608 21.8195 40.608 22.4526 40.9985 22.8431L46.6553 28.5L40.9985 34.1569C40.608 34.5474 40.608 35.1805 40.9985 35.5711C41.389 35.9616 42.0222 35.9616 42.4127 35.5711L48.7767 29.2071ZM28.9307 29.5L48.0696 29.5L48.0696 27.5L28.9307 27.5L28.9307 29.5Z' fill='%23797979'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='filter0_d_133_2337' x='0' y='0' width='77' height='77' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3E%3CfeOffset dy='10'/%3E%3CfeGaussianBlur stdDeviation='6'/%3E%3CfeComposite in2='hardAlpha' operator='out'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0'/%3E%3CfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_133_2337'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_133_2337' result='shape'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E");
      background-size: cover;
    }
  }

  .swiper-slide,
  .swiper-slide-prev {
    opacity: 0;
  }

  .swiper-slide-visible,
  .swiper-slide-active {
    box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.1);
    opacity: 1;
  }

  .swiper-slide-next,
  .swiper-slide-prev {
    position: relative;
    top: 3rem;
    opacity: 1;
  }
`;

export const Article = styled.div`
  width: 77rem;
  background: ${({ theme }) => theme.white};
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.1);

  ${mediaMaxWidth("mobile")`
    width: 100%;
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
