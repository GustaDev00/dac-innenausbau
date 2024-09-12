import { LongArrowRight } from "@/components/svgs/long-arrow-right";
import styled, { css } from "styled-components";

const swipeStyles = css`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 2.4rem;
  padding: 1rem 2.3rem 1rem 3.3rem;
  background: linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(174, 23, 23, 1) 65%);
  background-size: 900%;
  background-position: right;
  color: ${({ theme }) => theme.white};
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 193.75%;
  letter-spacing: -0.0002rem;
  transition: background-position 0.4s ease;

  &:hover {
    background-position: left;
  }
`;

export const ButtonSwipe = styled.button`
  ${swipeStyles}
`;

export const LinkSwipe = styled.a`
  ${swipeStyles}
`;

export const Icon = styled(LongArrowRight)``;
