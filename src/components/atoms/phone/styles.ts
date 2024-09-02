import styled from "styled-components";
import { Phone as _Phone } from "@/components/svgs/phone";
import { MailPhone } from "@/styles/components/mail-phone";

export const Phone = styled(MailPhone)`
  transition: opacity 0.4s ease;

  &:hover {
    opacity: 0.6;
  }
`;

export const Icon = styled(_Phone)``;
