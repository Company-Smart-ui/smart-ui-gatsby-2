import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "../card/Card";
import * as style from "./teamSwiper.module.scss";

import "swiper/css";
import "swiper/css/free-mode";

export const TeamSwiper = ({
  activeIndexHandler,
  setSwiperRef,
  teamList,
  button,
}) => {
  return (
    <div className={style.teamSwiper}>
      <Swiper
        onSwiper={setSwiperRef}
        spaceBetween={0}
        initialSlide={0}
        slidesPerView={0}
        freeMode={true}
        className="mySwiper"
        breakpoints={{
          375: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          576: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 0,
            allowTouchMove: true,
            grabCursor: true,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 0,
            allowTouchMove: true,
            grabCursor: true,
          },
        }}
        grabCursor={true}
        speed={800}
        loop={false}
        onSlideChange={activeIndexHandler}
      >
        {teamList.map((el, i) => (
          <SwiperSlide key={i}>
            <Card button={button} content={el} key={i} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
