import * as S from "../styles";
import C from "../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";

export const GalleryMobile = () => (
  <S.Slider>
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={3}
      loop={true}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 1,
        slideShadows: false,
      }}
      navigation={true}
      pagination={{ clickable: true }}
      modules={[EffectCoverflow, Navigation]}
    >
      {C.slider.items.map((item, index) => (
        <SwiperSlide key={index}>
          <S.Img {...item.mobile} />
        </SwiperSlide>
      ))}
    </Swiper>
  </S.Slider>
);
