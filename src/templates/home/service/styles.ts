import styled from "styled-components";
import { LazyImage } from "@/components/atoms/lazy-image";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { Tools as _Tools } from "@/components/svgs/tools";
import { ButtonSwipe } from "@/components/atoms/button-swipe";
import { CheckCircle } from "@/components/svgs/check-circle";
import { mediaMaxWidth } from "@/utils/media-query";

export const Service = styled.section`
  border-top: 0.1rem solid ${({ theme }) => theme.black10};
  border-bottom: 0.1rem solid ${({ theme }) => theme.black10};

  ${mediaMaxWidth("mobile")`
    border: none;
    padding-top: 8rem;
  `}
`;

export const Wrapper = styled(_Wrapper)`
  flex-direction: row;
  gap: 9.4rem;

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
    gap: 4.9rem;
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.6rem;
  align-items: flex-start;
`;

export const Tag = styled.div`
  padding: 0.2rem 2.1rem;
  border-radius: 1.8rem;
  border: 0.1rem solid ${({ theme }) => theme.black15};
  background: ${({ theme }) => theme.black01};
  box-shadow: 0px 10px 12px 0px ${({ theme }) => theme.black07};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.4rem;
`;

export const Tools = styled(_Tools)``;

export const TagText = styled.p`
  color: ${({ theme }) => theme.raisinBlackHalf};
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 221.429%;
  letter-spacing: -0.0001rem;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.smokyBlack};
  font-size: 4.8rem;
  font-weight: 700;
  line-height: 116.667%;
  letter-spacing: -0.2429rem;

  ${mediaMaxWidth("mobile")`
    font-size: 3.8rem;
    line-height: 131.579%;
    letter-spacing: -0.1923rem;
  `}
`;

export const Line = styled.div`
  display: block;
  width: 4.8rem;
  height: 0.4rem;
  border-radius: 0.4rem;
  background: ${({ theme }) => theme.carnelian};
`;

export const button = styled(ButtonSwipe)``;

export const Description = styled.p`
  color: ${({ theme }) => theme.davysGrey};
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 172.222%;
  letter-spacing: -0.0002rem;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  gap: 3rem;
  margin-bottom: 2rem;

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
    align-items: center;
    gap: 0;
  `}
`;

export const Group = styled.div`
  position: relative;
  margin-bottom: 2rem;

  ${mediaMaxWidth("mobile")`
    left: -2rem;
    z-index: 2;
  `}
`;

export const Img1 = styled(LazyImage)`
  position: relative;
  top: -2rem;
  left: 0.5rem;

  ${mediaMaxWidth("mobile")`
    height: 27rem;
    width: 20.8rem;
    object-fit: cover;
    left: -3rem;
  `}
`;

export const Shadow = styled.div`
  width: 30rem;
  height: 31.4rem;
  background: ${({ theme }) => theme.carnelian};
  box-shadow: 0rem 0.4rem 1.2rem 0px ${({ theme }) => theme.black15};

  ${mediaMaxWidth("mobile")`
    background: none;
    box-shadow: none;
    width: 100%;
    height: 100%;
  `}
`;

export const TagImg = styled.div`
  position: absolute;
  left: -4rem;
  top: 5.5rem;
  z-index: 1;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding: 0.6rem 2.2rem 0.6rem 1.4rem;
  border-radius: 3.8rem;
  border: 1px solid ${({ theme }) => theme.black05};
  background: ${({ theme }) => theme.white};
  box-shadow: 0rem 1.2rem 2.2rem 0rem ${({ theme }) => theme.black12};

  ${mediaMaxWidth("mobile")`
    top: unset;
    left: -4.4rem;
    bottom: 1.8rem;
  `}
`;

export const Check = styled(CheckCircle)``;

export const TagImgText = styled.p`
  color: ${({ theme }) => theme.raisinBlack};
  font-size: 1.3rem;
  font-weight: 600;
  line-height: 238.462%;
  letter-spacing: -0.0001rem;
`;

export const Img2 = styled(LazyImage)`
  ${mediaMaxWidth("mobile")`
    width: 14rem;
    height: 19.6rem;
    object-fit: cover;
    position: absolute;
    top: 1.6rem;
    right: 0;
  `}
`;
