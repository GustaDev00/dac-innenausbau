import { useEffect, useMemo, useState } from "react";
import { CardSlideProps } from "./props";
import * as S from "./styles";

export const CardSlide = ({
  arrow,
  items,
  renderContent,
  left = false,
  start,
  duration = 10,
}: CardSlideProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!start) return;

    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, duration * 1000);

    return () => clearInterval(timer);
  }, [currentIndex, items.length, duration, start]);

  const renderedItems = useMemo(
    () =>
      items.map((item, index) => (
        <S.Item key={index}>{renderContent(item, index, index === currentIndex, duration)}</S.Item>
      )),
    [items, currentIndex, duration],
  );

  return (
    <S.CardSlideContainer $left={left}>
      <S.Content>{renderedItems}</S.Content>
      {arrow && (
        <S.CardSlideArrow>
          <S.Arrow />
        </S.CardSlideArrow>
      )}
    </S.CardSlideContainer>
  );
};
