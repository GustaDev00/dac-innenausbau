import styled from "styled-components";
import { LazyImage } from "../lazy-image";
import { mediaMaxWidth } from "@/utils/media-query";

export const Link = styled.a``;

export const Logo = styled(LazyImage)`
  width: fit-content;
  height: 5.8rem;

  ${mediaMaxWidth("mobile")`
    height: 6.2rem;
  `}
`;
