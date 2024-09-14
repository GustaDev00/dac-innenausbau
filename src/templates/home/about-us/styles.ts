import { ButtonTransparent } from "@/components/atoms/button-transparent";
import { DetailsUs as _DetailsUs } from "@/components/atoms/details-us";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";

export const AboutUs = styled.section`
  position: relative;
  z-index: 1;
  overflow: hidden;

  &::before,
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    top: 0;
  }

  &::before {
    background: url("/imgs/home/about-us/bg.png") no-repeat center center;
    background-size: cover;
  }

  &::after {
    background: url("/imgs/home/about-us/shadow.png") repeat-x;
    background-size: auto 120%;
    animation: moveBackground 10s linear infinite;

    ${mediaMaxWidth("isMobileOrTabletVertical")`
      animation: moveBackground 60s linear infinite;
    `}

    ${mediaMaxWidth("mobile")`
      background: url("/imgs/home/about-us/shadow.png") repeat-x;
      background-size: cover;
      background-position: 0 100%;
      animation: moveBackground 660s linear infinite;
    `}
  }

  @keyframes moveBackground {
    from {
      background-position: 0% 100%;
    }
    to {
      background-position: -2394% 100%;
    }
  }
`;

export const Wrapper = styled(_Wrapper)`
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10rem;

  ${mediaMaxWidth("mobile")`
    padding: 4.2rem 1rem 8.2rem 2.4rem;
    flex-direction: column-reverse;
    gap: 0;
  `}
`;

export const Container = styled.div``;

export const BordLines1 = styled.div`
  width: 16.165rem;
  height: 16.165rem;
  position: absolute;
  border-radius: 50%;
  border: 2rem solid ${({ theme }) => theme.carnelian05};
  display: flex;
  align-items: center;
  justify-items: center;

  animation: scaleFadeFirstCircle 5s linear infinite;

  @keyframes scaleFadeFirstCircle {
    0% {
      width: 16.165rem;
      height: 16.165rem;
      border: 2rem solid ${({ theme }) => theme.carnelian05};
      opacity: 1;
    }

    25% {
      width: 19.0049rem;
      height: 19.0049rem;
      border: 0.4rem solid ${({ theme }) => theme.philippineBrown};
      opacity: 0.3;
    }

    50% {
      width: 22.5rem;
      height: 22.5rem;
      border: 0.4rem solid ${({ theme }) => theme.philippineBrown};
      opacity: 0;
    }

    75% {
      width: 10rem;
      height: 10rem;
      border: 2rem solid ${({ theme }) => theme.carnelian05};
      opacity: 0;
    }
  }
`;

export const BordLines2 = styled.div`
  width: 19.0049rem;
  height: 19.0049rem;
  position: absolute;
  border-radius: 50%;
  border: 0.4rem solid ${({ theme }) => theme.philippineBrown};
  opacity: 0.3;
  animation: scaleFadeSecondCircle 5s linear infinite;

  @keyframes scaleFadeSecondCircle {
    0% {
      width: 19.0049rem;
      height: 19.0049rem;
      border: 0.4rem solid ${({ theme }) => theme.philippineBrown};
      opacity: 0.3;
    }

    25% {
      width: 22.5rem;
      height: 22.5rem;
      border: 0.4rem solid ${({ theme }) => theme.philippineBrown};
      opacity: 0;
    }

    50% {
      width: 10rem;
      height: 10rem;
      border: 2rem solid ${({ theme }) => theme.carnelian05};
      opacity: 0;
    }

    75% {
      width: 16.165rem;
      height: 16.165rem;
      border: 2rem solid ${({ theme }) => theme.carnelian05};
      opacity: 1;
    }
  }
`;

export const BordLines3 = styled.div`
  width: 22.5rem;
  height: 22.5rem;
  position: absolute;
  border-radius: 50%;
  border: 0.4rem solid ${({ theme }) => theme.philippineBrown};
  opacity: 0.1;
  animation: scaleFadeThirdCircle 5s linear infinite;

  @keyframes scaleFadeThirdCircle {
    0% {
      width: 22.5rem;
      height: 22.5rem;
      border: 0.4rem solid ${({ theme }) => theme.philippineBrown};
      opacity: 0;
    }

    25% {
      width: 10rem;
      height: 10rem;
      border: 2rem solid ${({ theme }) => theme.carnelian05};
      opacity: 0;
    }

    50% {
      width: 16.165rem;
      height: 16.165rem;
      border: 2rem solid ${({ theme }) => theme.carnelian05};
      opacity: 1;
    }

    75% {
      width: 19.0049rem;
      height: 19.0049rem;
      border: 0.4rem solid ${({ theme }) => theme.philippineBrown};
      opacity: 0.3;
    }
  }
`;

export const years = styled.div`
  position: relative;
  top: 4rem;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.white};
  text-align: center;
  font-family: var(--inter);
  font-size: 3.8rem;
  font-weight: 700;
  background: ${({ theme }) => theme.carnelian};
  width: 12.233rem;
  height: 12.233rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  span {
    font-size: 1.4rem;
    font-weight: 300;
  }

  ${mediaMaxWidth("mobile")`
    top: 2rem;
    margin: 0rem 4.6rem;
  `}
`;

export const TitleButton = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 12rem;
  margin-bottom: 4.6rem;

  &:before {
    position: absolute;
    content: "";
    width: 4.8rem;
    height: 0.4rem;
    background: ${({ theme }) => theme.white};
    bottom: -4.6rem;
  }

  ${mediaMaxWidth("mobile")`
    margin-top: 7rem;
    flex-direction: column;
    gap: 3rem;
    align-items: flex-start;
  `}
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.white};
  font-size: 4.8rem;
  font-weight: 700;
  line-height: 116.667%;
  letter-spacing: -0.2429rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    font-size: 4rem;
  `}

  ${mediaMaxWidth("mobile")`
    font-size: 3.8rem;
    line-height: 131.579%;
    letter-spacing: -0.1923rem;
  `}
`;

export const Button = styled(ButtonTransparent)``;

export const Description = styled.p`
  color: ${({ theme }) => theme.quickSilver};
  font-size: 2.4rem;
  font-weight: 400;
  line-height: 133.333%;
  letter-spacing: -0.0002rem;
  padding: 4.2rem 0;
`;

export const List = styled.div`
  display: flex;
  gap: 5.2rem;

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
    gap: 3rem;
  `}
`;

export const item = styled(_DetailsUs)``;
