import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  padding: 6.4rem 9.4rem;
  display: flex;
  flex-direction: column;
  z-index: 2;

  ${mediaMaxWidth("mobile")`
    padding: 4.2rem 2.4rem 4.4rem;
  `}
`;
