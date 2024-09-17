import { MediumArrowRight } from "@/components/svgs/medium-arrow-right";
import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";

export const Button = styled.a`
  position: relative;
  width: fit-content;
  color: ${({ theme }) => theme.white};
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 172.222%;
  letter-spacing: -0.0002rem;
  padding: 1.3rem 4.1rem;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  transition: color 0.4s ease, background 0.4s ease, border-color 0.4s ease;

  &:hover {
    color: ${({ theme }) => theme.raisinBlackHalf};
    background: ${({ theme }) => theme.white};
    border-color: ${({ theme }) => theme.white};

    svg {
      opacity: 1;
      visibility: visible;
    }

    span {
      right: 2rem;
    }
  }
`;

export const Text = styled.span`
  position: relative;
  right: 0;
  transition: right 0.4s ease;
`;

export const Icon = styled(MediumArrowRight)`
  position: absolute;
  right: 2.8rem;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.4s ease, visibility 0.4s ease;
  width: 1.8rem;
  height: 1.8rem;

  ${mediaMaxWidth("mobile")`
    width: 2rem;
    height: 2rem;
  `}

  path {
    fill: ${({ theme }) => theme.raisinBlackHalf};
  }
`;
