import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "../card/Card";
import { cardsList } from "../card/CardList";
import * as style from "./cardsSwiper.module.scss";

import "swiper/css";
import "swiper/css/free-mode";

export const CardsSwiper = ({
  setActiveHandler,
  setSwiperRef,
  activeIndex,
}) => {
  return (
    <div className={style.cardsSwiper}>
      <Swiper
        onSwiper={setSwiperRef}
        spaceBetween={8}
        slidesPerView={1}
        className="swiper"
        breakpoints={{
          375: {
            slidesPerView: 1,
            spaceBetween: 8
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 0,
          }
        }}
        grabCursor={true}
        speed={400}
        loop={true}
        onSlideChange={setActiveHandler}
      >
        {cardsList.map((el, index) => (
          <SwiperSlide key={el.id}>
            <Card content={el} activeIndex={activeIndex} indexEl={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
