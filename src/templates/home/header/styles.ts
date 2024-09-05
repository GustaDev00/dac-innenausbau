import styled from "styled-components";
import { ButtonTransparent } from "@/components/atoms/button-transparent";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { CardServices } from "@/components/organisms/card-services";
import { mediaMaxWidth } from "@/utils/media-query";

export const Header = styled.section`
  background: url("./imgs/home/header/header.png") no-repeat center center;
  background-size: cover;
`;

export const Wrapper = styled(_Wrapper)`
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
  padding: 15rem 9.4rem 11.8rem;

  ${mediaMaxWidth("mobile")`
    padding: 4.2rem 2.4rem 4.4rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 4.2rem;
  `}
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  gap: 2.6rem;
`;

export const Title = styled.h1`
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
    line-height: 121.053%;
    letter-spacing: -.1923rem;
  `}
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.white};
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 172.222%;
  letter-spacing: -0.0002rem;
`;

export const Button = styled(ButtonTransparent)``;

export const ServicesInfo = styled(CardServices)``;
