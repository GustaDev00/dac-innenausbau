import styled from "styled-components";
import { Star as _Star } from "@/components/svgs/star";

export const DetailsUs = styled.div``;

export const Star = styled(_Star)`
  path {
    fill: ${({ theme }) => theme.white};
  }
`;

export const ShowImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5.8rem;
  height: 5.8rem;
  border: 0.1rem solid ${({ theme }) => theme.metallicSilver};
  border-radius: 50%;
`;

export const Article = styled.article``;

export const Title = styled.h3`
  color: ${({ theme }) => theme.white};
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 130%;
  margin: 2rem 0 1.6rem;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.metallicSilver};
  font-size: 2.2rem;
  font-weight: 400;
  line-height: 140%;
`;
