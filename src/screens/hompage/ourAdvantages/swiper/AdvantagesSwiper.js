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
        spaceBetween={0}
        initialSlide={0}
        slidesPerView={1}
        freeMode={true}
        className="mySwiper"
        breakpoints={{
          375: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 0,
            allowTouchMove: false,
          },
        }}
        grabCursor={true}
        speed={400}
        loop={false}
        onSlideChange={() => setActiveIndex(swiperRef?.realIndex)}
      >
        {Array.isArray(cardsList) &&
          cardsList.map((el) => (
            <SwiperSlide key={el.title}>
              <Card content={el} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};
