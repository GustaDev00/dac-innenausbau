import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 6.4rem 9.4rem;
  display: flex;
  flex-direction: column;

  ${mediaMaxWidth("mobile")`
    padding: 4.2rem 2.4rem 4.4rem;
  `}
`;
