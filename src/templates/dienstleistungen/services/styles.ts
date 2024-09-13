import styled, { css } from "styled-components";
import { LazyImage } from "@/components/atoms/lazy-image";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { Phone } from "@/components/svgs/phone";
import { Mail } from "@/components/svgs/mail";
import { ShortArrowRight } from "@/components/svgs/short-arrow-right";
import { Arrow } from "@/components/svgs/arrow";
import { mediaMaxWidth } from "@/utils/media-query";
import { DetailsUs } from "@/components/atoms/details-us";
import { Title, Text, ShowImg, Article } from "@/components/atoms/details-us/styles";
import { Mail as _Mail } from "@/components/atoms/mail";
import { Phone as _Phone } from "@/components/atoms/phone";

export const Services = styled.section``;

export const Wrapper = styled(_Wrapper)`
  flex-direction: row;
  gap: 5.4rem;
`;

export const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  width: 45%;

  ${mediaMaxWidth("desktop1024")`
    width: 60%;
  `}

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    width: 80%;
  `}

${mediaMaxWidth("mobile")`
    width: 100%;
  `}
`;

export const Menu = styled.nav`
  display: flex;
  padding: 2.8rem 2rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.8rem;
  border: 1px solid ${({ theme }) => theme.lightGray};
  background: url("/imgs/uber-uns/vision/background.png") no-repeat bottom;
  background-size: cover;
`;

export const TitleMenu = styled.h2`
  color: ${({ theme }) => theme.davysGrey};
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 100%;
`;

export const ItemsMenu = styled.ul`
  width: 100%;
`;

export const ItemMenu = styled.li`
  width: 100%;

  color: ${({ theme }) => theme.black};
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 127.25%;
`;

export const ArrowMenu = styled(Arrow)``;

export const ButtonMenu = styled.button<{ $active: boolean }>`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.8rem 2rem 1.8rem 4rem;
  transition: background 0.4s ease;

  &::before {
    position: absolute;
    left: 2rem;
    display: block;
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    background: ${({ theme }) => theme.carnelian};
  }

  &:hover {
    background: ${({ theme }) => theme.brightGray};
  }

  ${({ $active }) =>
    $active &&
    css`
      background: ${({ theme }) => theme.brightGray};
    `}
`;

export const Contact = styled.div`
  background: ${({ theme }) => theme.eerieBlackHalf};
  display: flex;
  padding: 3.5rem 3.7rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.8rem;
`;

export const TitleContact = styled.h2`
  color: ${({ theme }) => theme.white};
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 100%;
`;

export const DescriptionContact = styled.p`
  color: ${({ theme }) => theme.quickSilver};
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 162.5%;
`;

export const ListContact = styled.ul`
  width: 100%;
`;

export const ItemContact = styled.li`
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.white25};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.8rem;
  padding: 2.6rem 0.4rem;

  svg {
    width: 2.9rem;
    height: 2.9rem;

    path {
      fill: ${({ theme }) => theme.carnelian};
    }
  }
`;

export const IconPhone = styled(Phone)``;

export const Call = styled.div``;

export const TitleCall = styled.h3`
  color: ${({ theme }) => theme.quickSilver};
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 162.5%;
`;

export const TextCall = styled.p``;

export const MailContainer = styled.div``;

export const IconMail = styled(Mail)``;

export const MailLink = styled(_Mail)`
  color: ${({ theme }) => theme.white};
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 162.5%;
`;

export const PhoneLink = styled(_Phone)`
  color: ${({ theme }) => theme.white};
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 162.5%;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.white};
  font-size: 1.9rem;
  font-weight: 600;
  line-height: 189.474%;
  letter-spacing: -0.0961rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.2rem;
  transition: opacity 0.4s ease;

  svg {
    width: 1.1rem;
    height: 1.1rem;

    path {
      fill: ${({ theme }) => theme.white};
    }
  }

  &:hover {
    opacity: 0.6;
  }
`;

export const ShowIcon = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  border: 0.1rem solid ${({ theme }) => theme.white05}; /* rgba(255, 255, 255, 0.50) */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconLink = styled(ShortArrowRight)``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 3.8rem;

  picture {
    width: 100%;
  }
`;

export const ServiceImg = styled(LazyImage)`
  width: 100%;
  height: 30rem;
  object-fit: cover;
  margin-bottom: 3.8rem;
`;

export const ServicesList = styled.div`
  position: relative;
`;

export const Service = styled.div<{ $active?: boolean }>`
  position: absolute;
  top: 0;
  transform: ${({ $active }) => ($active ? "translateX(0)" : "translateX(100%)")};
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  visibility: ${({ $active }) => ($active ? "visible" : "hidden")};
  transition: opacity 0.4s ease, visibility 0.4s ease, transform 0.4s ease;
  text-align: left;

  &:nth-child(1) {
    position: relative;
  }
`;

export const TitleService = styled.h2`
  color: ${({ theme }) => theme.black};
  text-align: left;
  font-size: 4.8rem;
  font-weight: 700;
  line-height: 116.667%;
  letter-spacing: -0.2429rem;
  margin-bottom: 3.4rem;
`;

export const ListService = styled.ul`
  color: ${({ theme }) => theme.black};
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 172.222%;
  letter-spacing: -0.0002rem;
`;

export const ItemService = styled.li`
  list-style: square;
  margin: 2rem 0;
  margin-left: 2.4rem;
`;

export const Line = styled.div`
  width: 100%;
  height: 0.1rem;
  background: ${({ theme }) => theme.black15};
`;

export const DescriptionService = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5.2rem;
`;

export const Details = styled(DetailsUs)`
  display: flex;
  align-items: flex-start;
  gap: 2rem;

  ${Title} {
    color: ${({ theme }) => theme.black};
    font-size: 2.2rem;
    font-weight: 700;
    line-height: 130%;
    margin: 0;
  }

  ${Text} {
    color: ${({ theme }) => theme.raisinBlack};
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 140%;
  }

  ${Article} {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  ${ShowImg} {
    border-color: ${({ theme }) => theme.carnelian};

    svg path {
      fill: ${({ theme }) => theme.carnelian};
    }
  }
`;
