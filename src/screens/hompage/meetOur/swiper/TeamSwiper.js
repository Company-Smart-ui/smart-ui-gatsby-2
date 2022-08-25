import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "../card/Card";
import { teamList } from "../card/TeamList";
import * as style from "./teamSwiper.module.scss";

import "swiper/css";
import "swiper/css/free-mode";

export const TeamSwiper = ({
  activeIndexHandler,
  setSwiperRef,
  loop
}) => {
  return (
    <div className={style.teamSwiper}>
      <Swiper
        onSwiper={setSwiperRef}
        spaceBetween={32}
        initialSlide={1}
        slidesPerView={0}
        freeMode={true}
        className="mySwiper"
        breakpoints={{
          375: {
            slidesPerView: 1,
            spaceBetween: 16
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 0
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 0,
            allowTouchMove: false,
            grabCursor: false,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 32,
          }
        }}
        grabCursor={true}
        speed={800}
        loop={loop}
        onSlideChange={activeIndexHandler}
      >
        {teamList.map((el, index) => (
          <SwiperSlide key={el.name}>
            <Card content={el}  indexEl={index} loop={loop} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
