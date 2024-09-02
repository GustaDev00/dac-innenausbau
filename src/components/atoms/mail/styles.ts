import styled from "styled-components";
import { Mail as _Mail } from "@/components/svgs/mail";
import { MailPhone } from "@/styles/components/mail-phone";

export const Mail = styled(MailPhone)`
  transition: opacity 0.4s ease;

  &:hover {
    opacity: 0.6;
  }
`;

export const Icon = styled(_Mail)``;
