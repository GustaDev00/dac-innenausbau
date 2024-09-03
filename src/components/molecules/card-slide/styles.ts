import styled from "styled-components";
import { MediumArrowRight } from "@/components/svgs/medium-arrow-right";

export const CardSlideContainer = styled.div<{ $left: boolean }>`
  position: relative;
`;

export const Content = styled.div`
  position: relative;
`;

export const Item = styled.div`
  position: absolute;
  bottom: 0;

  &:nth-of-type(1) {
    position: relative;
  }
`;

export const CardSlideArrow = styled.div``;

export const Arrow = styled(MediumArrowRight)``;
