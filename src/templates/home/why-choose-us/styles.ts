import { CardChooseUs } from "@/components/organisms/card-choose-us";
import { Star } from "@/components/svgs/star";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";

export const WhyChooseUs = styled.section`
  position: relative;

  &::after {
    display: block;
    content: "";
    width: 11.5rem;
    height: 11.7rem;
    background: ${() => `url(${process.env.NEXT_PUBLIC_URL}svgs/why-choose-us.svg)`} no-repeat;
    background-size: contain;
    position: absolute;
    right: 14.5rem;
    top: 12rem;

    ${mediaMaxWidth("isMobileOrTabletVertical")`
      right: 2rem;
    `}

    ${mediaMaxWidth("mobile")`
      display: none;
    `}
  }
`;

export const Wrapper = styled(_Wrapper)``;

export const Content = styled.div`
  margin-bottom: 4.8rem;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.carnelian};
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 0.133rem;
  text-transform: uppercase;
`;

export const Icon = styled(Star)``;

export const Article = styled.article``;

export const Title = styled.h2`
  color: ${({ theme }) => theme.smokyBlack};
  font-size: 4.8rem;
  font-weight: 700;
  line-height: 116.667%;
  letter-spacing: -0.2429rem;
  margin: 3rem 0;

  ${mediaMaxWidth("mobile")`
    font-size: 3.8rem;
    line-height: 147.368%;
    letter-spacing: -0.1923rem;
  `}
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.davysGrey};
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 172.222%;
  letter-spacing: -0.0002rem;
`;

export const Card = styled(CardChooseUs)``;
