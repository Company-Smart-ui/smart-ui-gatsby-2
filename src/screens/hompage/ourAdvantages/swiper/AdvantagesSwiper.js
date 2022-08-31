import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "../card/Card";
import * as style from "./advantagesSwiper.module.scss";

import "swiper/css";
import "swiper/css/free-mode";

export const AdvantagesSwiper = ({
  swiperRef,
  setSwiperRef,
  setActiveIndex,
  cardsList,
}) => {
  return (
    <div className={style.cardsSwiper}>
      <Swiper
        onSwiper={setSwiperRef}
        spaceBetween={16}
        initialSlide={0}
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
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 44,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 64,
          }
        }}
        grabCursor={true}
        speed={400}
        loop={false}
        onSlideChange={() => setActiveIndex(swiperRef?.realIndex)}
      >
        {cardsList.map((el) => (
          <SwiperSlide key={el.title}>
            <Card content={el} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
