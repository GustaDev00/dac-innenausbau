import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";

export const MailPhone = styled.a`
  color: ${({ theme }) => theme.white};
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.0001rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  ${mediaMaxWidth("mobile")`
    font-size: 1.2rem;
    line-height: 116.667%;
  `}
`;
