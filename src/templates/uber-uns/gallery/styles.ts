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
      background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='72' height='72' viewBox='0 0 72 72' fill='none'%3E%3Cg filter='url(%23filter0_d_197_1702)'%3E%3Ccircle cx='36' cy='26' r='24' transform='rotate(-90 36 26)' fill='white'/%3E%3Cpath d='M26.6275 25.2924C26.237 25.6829 26.237 26.3161 26.6275 26.7066L32.9915 33.0706C33.382 33.4611 34.0152 33.4611 34.4057 33.0706C34.7962 32.6801 34.7962 32.0469 34.4057 31.6564L28.7488 25.9995L34.4057 20.3427C34.7962 19.9521 34.7962 19.319 34.4057 18.9284C34.0152 18.5379 33.382 18.5379 32.9915 18.9284L26.6275 25.2924ZM44.668 24.9995L27.3346 24.9995L27.3346 26.9995L44.668 26.9995L44.668 24.9995Z' fill='%23797979'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='filter0_d_197_1702' x='0' y='0' width='72' height='72' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3E%3CfeOffset dy='10'/%3E%3CfeGaussianBlur stdDeviation='6'/%3E%3CfeComposite in2='hardAlpha' operator='out'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0'/%3E%3CfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_197_1702'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_197_1702' result='shape'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E")
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
