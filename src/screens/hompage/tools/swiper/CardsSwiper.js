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
        onSlideChange={() => setActiveHandler(swiperRef?.realIndex)}
      >
        {cardsList.map((el, index) => {
          return (
            <div key={el.id}>
              <SwiperSlide>
                <Card content={el} activeIndex={activeIndex} indexEl={index} />
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </div>
  );
};
