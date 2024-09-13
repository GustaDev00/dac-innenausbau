import * as S from "./styles";
import { CardChooseUsProps } from "./props";
import useAnimation from "@/components/atoms/use-in-view/animation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Autoplay, EffectCards, Navigation } from "swiper/modules";
import { useEffect, useRef, useState } from "react";

export const CardChooseUs = ({ items }: CardChooseUsProps) => {
  const { ref, isInView } = useAnimation();
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };

  useEffect(() => {
    if (swiperRef.current) {
      if (isInView) {
        swiperRef.current.autoplay.start();
      } else {
        swiperRef.current.autoplay.stop();
      }
    }
  }, [isInView]);

  return (
    <S.CardServices ref={ref}>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        effect={"cards"}
        modules={[EffectCards, Autoplay, Navigation]}
        grabCursor={true}
        navigation={true}
        loop={true}
        autoplay={{ delay: 8000 }}
        cardsEffect={{
          perSlideRotate: 0,
          perSlideOffset: 8,
          slideShadows: false,
        }}
        onSlideChange={handleSlideChange}
      >
        {items.map(({ title, text, img }, index) => (
          <SwiperSlide key={index}>
            <S.Article>
              <S.ProgressBar
                duration={8}
                isActive={isInView && index === activeIndex}
                color="red"
              />
              <S.Wrapper>
                <S.Img {...img} />
                <S.Content>
                  <S.Title>{title}</S.Title>
                  <S.Description>{text}</S.Description>
                </S.Content>
              </S.Wrapper>
            </S.Article>
          </SwiperSlide>
        ))}
      </Swiper>
    </S.CardServices>
  );
};
