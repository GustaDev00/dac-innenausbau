import styled from "styled-components";
import { Logo as _Logo } from "@/components/atoms/logo";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { mediaMaxWidth } from "@/utils/media-query";

export const Footer = styled.footer`
  position: relative;
  background: ${({ theme }) => theme.eerieBlack};

  &::before {
    content: "";
    display: block;
    position: absolute;
    background: url("/imgs/footer.png") no-repeat center center;
    background-size: contain;
    height: 100%;
    width: 100%;
    z-index: 1;

    ${mediaMaxWidth("mobile")`
      background-size: 400%;
      background-position: -2% -5%;
    `}
  }
`;

export const Wrapper = styled(_Wrapper)`
  position: relative;
  z-index: 2;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 3.9rem;

  &::before {
    position: absolute;
    display: block;
    content: "";
    width: 100%;
    height: 0.1rem;
    background: ${({ theme }) => theme.white20};
    bottom: -3.9rem;
  }

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
    align-items: flex-start;
    gap: 3rem;
    margin-bottom: 3rem;

    &::before{
      width: 100vw;
      bottom: -3rem;
    }
  `}
`;

export const WrapperLogo = styled.div`
  background: ${({ theme }) => theme.white};
  height: fit-content;
  padding: 1.1rem 3rem;
  border-radius: 1rem;
`;

export const Logo = styled(_Logo)``;

export const Categories = styled.div`
  margin: 0 6rem 0 12.2rem;

  ${mediaMaxWidth("mobile")`
    margin: 0;
  `}
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.white};
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 130%;
  margin-bottom: 2.4rem;
`;

export const List = styled.ul`
  color: ${({ theme }) => theme.gainsboro};
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 140%;
`;

export const Item = styled.li`
  margin: 0.6rem 0;

  span {
    color: ${({ theme }) => theme.white};
  }

  svg {
    position: relative;
    top: 0.3rem;
    margin: 0 0.5rem;
  }

  a:hover {
    opacity: 0.6;
    transition: opacity 0.4s ease;
  }
`;

export const Link = styled.a``;

export const Contact = styled.div``;

export const Info = styled.div`
  margin-top: 3.9rem;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.white};
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 140%;

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
    align-items: flex-start;
    margin-top: 3rem;
    font-size: 1.6rem;
    gap: 1.7rem;
  `}
`;

export const Copy = styled.p``;

export const Agency = styled.p`
  span {
    font-weight: 700;
  }
`;
