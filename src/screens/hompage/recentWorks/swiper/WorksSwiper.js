import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "../card/Card";
import { worksList } from "../card/WorksList";

import "swiper/css";
import "swiper/css/free-mode";

export const WorksSwiper = ({
  swiperRef,
  setActiveIndex,
  setSwiperRef,
  loop
}) => {
  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        spaceBetween={36}
        centeredSlides={true}
        slidesPerView={1.3}
        freeMode={true}
        className="swiper"
        grabCursor={true}
        speed={800}
        loop={loop}
      >
        {worksList.map((el, index) => (
          <SwiperSlide key={el.title}>
            <Card content={el} indexEl={index} loop={loop} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
