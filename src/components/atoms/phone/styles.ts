import styled from "styled-components";
import { Phone as _Phone } from "@/components/svgs/phone";
import { MailPhone } from "@/styles/components/mail-phone";
import { mediaMaxWidth } from "@/utils/media-query";

export const Phone = styled(MailPhone)`
  transition: opacity 0.4s ease;

  &:hover {
    opacity: 0.6;
  }
`;

export const Icon = styled(_Phone)`
  width: 1.8rem;
  height: 1.8rem;

  ${mediaMaxWidth("mobile")`
    width: 2rem;
    height: 2rem;
  `}
`;
