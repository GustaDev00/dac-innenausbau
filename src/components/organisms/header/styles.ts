import styled from "styled-components";
import { LazyImage } from "@/components/atoms/lazy-image";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { mediaMaxWidth } from "@/utils/media-query";

export const Header = styled.div<{ $modal?: boolean }>`
  position: relative;
  margin-bottom: ${({ $modal }) => ($modal ? "6.8rem" : "0")};

  ${({ $modal }) => mediaMaxWidth("mobile")`
    margin-bottom: ${$modal ? "32rem" : "0"};
    padding-bottom: 4rem;
  `}
`;

export const Wrapper = styled(_Wrapper)`
  padding-top: 5rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.4rem;
`;

export const Breadcrumb = styled.ul`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.2rem;

  &::before {
    content: "";
    display: block;
    border-left: 0.6rem solid transparent;
    border-right: 0.6rem solid transparent;
    border-bottom: 0.9rem solid ${({ theme }) => theme.carnelian};
    transform: rotate(90deg);
  }
`;

export const Item = styled.li`
  color: ${({ theme }) => theme.gainsboro};
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 140%;

  &:first-child {
    order: -1;
  }
`;

export const Link = styled.a`
  cursor: pointer;
  text-decoration: underline;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.white};
  font-size: 6.2rem;
  font-weight: 700;
  line-height: 90.323%;
  letter-spacing: -0.3137rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    font-size: 4.6rem;
    line-height: 121.739%;
    letter-spacing: -0.2328rem;
  `}
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.white};
  font-size: 2.4rem;
  font-weight: 400;
  line-height: 129.167%;
  letter-spacing: -0.0002rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    font-size: 2rem;
    font-weight: 400;
    line-height: 155%;
    letter-spacing: -0.0002rem;
  `}
`;

export const Background = styled(LazyImage)`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 30%;
`;

export const Line = styled.div`
  background: ${({ theme }) => theme.white20};
  width: 58.9rem;
  height: 0.1rem;

  ${mediaMaxWidth("mobile")`
    width: 100%;
  `}
`;

export const Container = styled.div`
  position: absolute;
  padding: 2.6rem 3.9rem;
  top: 12.2rem;
  right: 9.4rem;
  background: ${({ theme }) => theme.white};
  box-shadow: 0px 1rem 1.4rem 0px ${({ theme }) => theme.black12};
  border-top: 0.5rem solid ${({ theme }) => theme.carnelian};

  ${mediaMaxWidth("mobile")`
    padding: 2.6rem 3.6rem;
    right: 2.4rem;
    left: 2.4rem;
    top: 96%;
  `}
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.quickSilver};
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 156.25%;
  letter-spacing: -0.0002rem;
`;
