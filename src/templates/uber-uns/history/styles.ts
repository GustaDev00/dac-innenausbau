import { LazyImage } from "@/components/atoms/lazy-image";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";

export const History = styled.section``;

export const Wrapper = styled(_Wrapper)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 7.6rem;
  overflow: hidden;

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
    align-items: flex-start;
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3.6rem;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.black};
  font-size: 4.2rem;
  font-weight: 700;
  line-height: 114.286%;
  letter-spacing: -0.2125rem;

  span {
    color: ${({ theme }) => theme.carnelian};
  }

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    font-size: 3.6rem;
  `}

  ${mediaMaxWidth("mobile")`
    font-size: 3.8rem;
  `}
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.davysGrey};
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 172.222%;
  letter-spacing: -0.0002rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    font-size: 1.6rem;
  `}

  ${mediaMaxWidth("mobile")`
    font-size: 1.8rem;
  `}
`;

export const Line = styled.div`
  background-color: ${({ theme }) => theme.black15};
  height: 0.1rem;
  width: 80%;

  ${mediaMaxWidth("mobile")`
    position: relative;
    width: 100vw;
  `}
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2.6rem;
`;

export const Article = styled.article``;

export const Name = styled.h3`
  color: ${({ theme }) => theme.black};
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 143.75%;
  letter-spacing: -0.0002rem;
`;

export const Position = styled.p`
  color: ${({ theme }) => theme.davysGrey};
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 143.75%;
  letter-spacing: -0.0002rem;
`;

export const SignatureImg = styled(LazyImage)`
  width: fit-content;
  height: 3.8rem;
`;

export const Container = styled.div`
  position: relative;

  &::before {
    position: absolute;
    content: "";
    display: block;
    background: ${({ theme }) => theme.crimsonRed};
    width: 100%;
    height: 61.4rem;
    transform: translateY(2rem) translateX(2rem);
    box-shadow: 0rem 0.4rem 1.2rem 0rem ${({ theme }) => theme.black15};

    ${mediaMaxWidth("isMobileOrTabletVertical")`
      height: 51.4rem;
    `}

    ${mediaMaxWidth("mobile")`
      height: 40.9rem;
      transform: translateY(1rem) translateX(1rem);
    `}
  }
`;

export const Img = styled(LazyImage)`
  position: relative;
  width: fit-content;
  height: 61.4rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    height: 51.4rem;
  `}

  ${mediaMaxWidth("mobile")`
    height: 40.9rem;
  `}
`;
