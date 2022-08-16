import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "../card/Card";
import { advantagesList } from "../card/AdvantagesList";
import * as style from "./advantagesSwiper.module.scss";

import "swiper/css";
import "swiper/css/free-mode";

export const AdvantagesSwiper = ({
  setSwiperRef,
  loop
}) => {
  return (
    <div className={style.cardsSwiper}>
      <Swiper
        onSwiper={setSwiperRef}
        spaceBetween={16}
        centeredSlides={true}
        slidesPerView={1.3}
        breakpoints={{
          375: {
            width: 375,
            slidesPerView: 1.5,
          },
          600: {
            width: 600,
            slidesPerView: 2.5,
          },
          768: {
            width: 768,
            slidesPerView: 3,
          },
        }}
        freeMode={true}
        className="mySwiper"
        grabCursor={true}
        speed={800}
        loop={loop}
      >
        {advantagesList.map((el, index) => (
          <SwiperSlide key={el.title}>
            <Card content={el}  indexEl={index} loop={loop} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
