import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "../card/Card";
import { cardsList } from "../card/CardList";
import * as style from "./cardsSwiper.module.scss";

import "swiper/css";
import "swiper/css/free-mode";


export const CardsSwiper = ({
  setActiveHandler,
  swiperRef,
  setSwiperRef,
  activeIndex,
}) => {

  return (
    <div className={style.cardsSwiper}>
      <Swiper
        onSwiper={setSwiperRef}
        spaceBetween={16}
        centeredSlides={false}
        slidesPerView={1}
        freeMode={true}
        className="swiper"
        grabCursor={true}
        speed={400}
        loop={true}
        onSlideChange={() => setActiveHandler(swiperRef?.realIndex)}
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
