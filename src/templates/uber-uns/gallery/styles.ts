import { LazyImage } from "@/components/atoms/lazy-image";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";

export const Gallery = styled.section`
  position: relative;
  border-bottom: 1px solid ${({ theme }) => theme.white25};
  background: ${({ theme }) => theme.eerieBlack};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("/imgs/uber-uns/gallery/bg.png") no-repeat center center;
    opacity: 0.8;
  }
`;

export const Wrapper = styled(_Wrapper)``;

export const Hook = styled(LazyImage)`
  position: absolute;
  right: 3.7rem;

  ${mediaMaxWidth("mobile")`
    display: none;
  `}
`;

export const Article = styled.article`
  display: flex;
  gap: 5.2rem;
  margin-bottom: 8.4rem;

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
    align-items: flex-start;
    gap: 2.4rem;
    margin-bottom: 5rem;
  `}
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.white};
  text-align: center;
  font-size: 4.8rem;
  font-weight: 700;
  line-height: 116.667%;
  letter-spacing: -0.2429rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    font-size: 3.8rem;
  `}

  ${mediaMaxWidth("mobile")`
    font-size: 3.8rem;
    line-height: 147.368%;
    letter-spacing: -0.1923rem;
  `}
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.white};
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 172.222%;
  letter-spacing: -0.0002rem;
`;

export const Slider = styled.div`
  width: 70rem;
  margin: auto;

  .swiper-wrapper {
    width: 20rem;
    left: -20rem;
  }

  .swiper-slide {
    transition: transform 0.3s ease, opacity 0.3s ease;
    transform: scale(0.8) !important;
  }

  .swiper-slide-active {
    opacity: 1;
    transform: scale(1) !important;
    right: 1rem;
  }

  .swiper-slide-next,
  .swiper-slide-prev {
    filter: grayscale(100%);
  }

  .swiper-button-prev,
  .swiper-button-next {
    width: 4.8rem;
    height: 4.8rem;

    &::after {
      display: none;
    }

    &::before {
      display: block;
      content: "";
      width: 4.8rem;
      height: 4.8rem;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='77' height='77' viewBox='0 0 77 77' fill='none'%3E%3Cg filter='url(%23filter0_d_133_2337)'%3E%3Ccircle cx='38.5' cy='28.5' r='26.5' transform='rotate(90 38.5 28.5)' fill='white'/%3E%3Cpath d='M48.7767 29.2071C49.1672 28.8166 49.1672 28.1834 48.7767 27.7929L42.4127 21.4289C42.0222 21.0384 41.389 21.0384 40.9985 21.4289C40.608 21.8195 40.608 22.4526 40.9985 22.8431L46.6553 28.5L40.9985 34.1569C40.608 34.5474 40.608 35.1805 40.9985 35.5711C41.389 35.9616 42.0222 35.9616 42.4127 35.5711L48.7767 29.2071ZM28.9307 29.5L48.0696 29.5L48.0696 27.5L28.9307 27.5L28.9307 29.5Z' fill='%23797979'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='filter0_d_133_2337' x='0' y='0' width='77' height='77' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3E%3CfeOffset dy='10'/%3E%3CfeGaussianBlur stdDeviation='6'/%3E%3CfeComposite in2='hardAlpha' operator='out'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0'/%3E%3CfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_133_2337'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_133_2337' result='shape'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E");
        no-repeat center center;
      background-size: cover;
    }
  }

  .swiper-button-next::before {
    transform: rotate(180deg) translateY(20%);
  }

  ${mediaMaxWidth("mobile")`
    width: 100%;

    .swiper-wrapper {
      width: 100%;
      left: 0rem;
    }

    .swiper-slide-active{
      right: 6rem;
      z-index: 2 !important;
    }

    .swiper-slide-next{
      z-index: 0;
    }

    .swiper-slide-prev{
      left: -3rem;
      z-index: 0;
    }
  `}
`;

export const Img = styled(LazyImage)`
  width: fit-content;
  height: 37.1rem;
`;
