import { LazyImage } from "@/components/atoms/lazy-image";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";

export const Vision = styled.section`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("/imgs/uber-uns/vision/background.png") no-repeat bottom;
    background-size: contain;

    ${mediaMaxWidth("mobile")`
      background-size: cover;
    `}
  }
`;

export const Wrapper = styled(_Wrapper)``;

export const FloatingImage = styled(LazyImage)`
  position: absolute;
  right: 0;
  width: fit-content;
  height: 60.8rem;

  ${mediaMaxWidth("mobile")`
    position: relative;
    height: 22rem;
    margin-bottom: 4rem;
  `}
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
    font-size: 3.8rem;
  `}

  ${mediaMaxWidth("mobile")`
    font-size: 3.8rem;
    line-height: 126.316%;
    letter-spacing: -0.1923rem;
  `}
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.davysGrey};
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 172.222%;
  letter-spacing: -0.0002rem;
  margin: 2.6rem 0;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    font-size: 1.6rem;
  `}

  ${mediaMaxWidth("mobile")`
    font-size: 1.8rem;
  `}
`;

export const List = styled.ul`
  width: fit-content;
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.li`
  display: flex;
  gap: 2.4rem;
  align-items: center;
  padding: 2.4rem 4.4rem;
  transition: background 0.4s ease, box-shadow 0.4s ease;

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
    align-items: flex-start;
    padding: 2.4rem 3.0rem 2.4rem 4.4rem;
  `}

  &:not(:last-child) {
    border-bottom: 0.1rem dashed ${({ theme }) => theme.black15};
  }

  &:hover {
    background: ${({ theme }) => theme.white};
    box-shadow: 0rem 0.4rem 1.6rem 0rem rgba(0, 0, 0, 0.1);
  }
`;

export const Icon = styled(LazyImage)`
  width: fit-content;
  height: 5.6rem;
`;

export const Article = styled.article``;

export const ListTitle = styled.h3`
  color: ${({ theme }) => theme.smokyBlack};
  font-size: 2rem;
  font-weight: 700;
  line-height: 113%;
`;

export const ListDescription = styled.p`
  color: ${({ theme }) => theme.davysGrey};
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 164.286%;
  letter-spacing: -0.0001rem;
  margin-top: 1rem;
`;
