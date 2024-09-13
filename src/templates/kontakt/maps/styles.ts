import { LazyImage } from "@/components/atoms/lazy-image";
import { Ping } from "@/components/svgs/ping";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";

export const Maps = styled.section`
  background: url("/imgs/kontakt/maps/bg.png") no-repeat center center;
  background-size: cover;

  ${mediaMaxWidth("mobile")`
    background: url("/imgs/kontakt/maps/mobile/bg.png") no-repeat center center;
    background-size: cover;
  `}
`;

export const Wrapper = styled(_Wrapper)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 6.3rem;

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
    padding-top: 6.4rem;
    padding-bottom: 6.4rem;
  `}
`;

export const Content = styled.div``;

export const Article = styled.article`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2.2rem;
  width: fit-content;

  &::before {
    position: absolute;
    bottom: -2.2rem;
    content: "";
    width: 100%;
    height: 0.1rem;
    background: ${({ theme }) => theme.white15};
  }
`;

export const Icon = styled(Ping)``;

export const Title = styled.h2`
  color: ${({ theme }) => theme.red};
  text-align: center;
  font-size: 4.8rem;
  font-weight: 700;
  line-height: 116.667%;
  letter-spacing: -0.2429rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    font-size: 4.2rem;
  `}

  ${mediaMaxWidth("mobile")`
    font-size: 3.8rem;
    line-height: 147.368%;
    letter-spacing: -0.1923rem;
  `}
`;

export const Address = styled.address`
  text-align: end;
  margin-top: 4.5rem;
  color: ${({ theme }) => theme.white};
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 172.222%;
  letter-spacing: -0.0002rem;

  b {
    font-size: 2.2rem;
    font-weight: 700;
  }

  ${mediaMaxWidth("mobile")`
    text-align: center;
  `}
`;

export const Text = styled.p``;

export const Container = styled.div``;

export const Img = styled(LazyImage)`
  height: 35.6rem;

  ${mediaMaxWidth("mobile")`
    width: 100%;
    height: 100%;
  `}
`;
