import { ButtonTransparent } from "@/components/atoms/button-transparent";
import { DetailsUs as _DetailsUs } from "@/components/atoms/details-us";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import styled from "styled-components";

export const AboutUs = styled.section`
  position: relative;
  z-index: 1;

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
    background: url("/imgs/home/about-us/shadow.png") no-repeat center center;
    background-size: cover;
  }
`;

export const Wrapper = styled(_Wrapper)`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Container = styled.div``;

export const years = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.white};
  text-align: center;
  font-family: var(--inter);
  font-size: 3.8rem;
  font-weight: 700;
  background: ${({ theme }) => theme.philippineBrown};
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
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.white};
  font-size: 4.8rem;
  font-weight: 700;
  line-height: 116.667%;
  letter-spacing: -0.2429rem;
`;

export const Button = styled(ButtonTransparent)``;

export const Description = styled.p`
  color: ${({ theme }) => theme.quickSilver};
  font-size: 2.4rem;
  font-weight: 400;
  line-height: 133.333%;
  letter-spacing: -0.0002rem;
  margin: 4.2rem 0;
`;

export const List = styled.div`
  display: flex;
  gap: 5.2rem;
`;

export const item = styled(_DetailsUs)``;
