import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "../card/Card";
import { advantagesList } from "../card/AdvantagesList";
import * as style from "./advantagesSwiper.module.scss";

import "swiper/css";
import "swiper/css/free-mode";

export const AdvantagesSwiper = ({
  swiperRef,
  setSwiperRef,
  loop,
  setActiveIndex,
}) => {
  return (
    <div className={style.cardsSwiper}>
      <Swiper
        onSwiper={setSwiperRef}
        spaceBetween={16}
        centeredSlides={true}
        slidesPerView={1}
        freeMode={true}
        className="mySwiper"
        breakpoints={{
          375: {
            slidesPerView: 1,
            spaceBetween: 16
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 24,
            allowTouchMove: false,
          }
        }}
        grabCursor={true}
        speed={400}
        loop={loop}
        onSlideChange={() => setActiveIndex(swiperRef?.realIndex)}
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
