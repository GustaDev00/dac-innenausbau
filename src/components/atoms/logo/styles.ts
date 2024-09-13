import styled from "styled-components";
import { LazyImage } from "../lazy-image";
import { mediaMaxWidth } from "@/utils/media-query";

export const Link = styled.a``;

export const Logo = styled(LazyImage)`
  height: 6.2rem;
  object-fit: contain;
`;
