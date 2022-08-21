import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "../card/Card";
import { teamList } from "../card/TeamList";
import * as style from "./teamSwiper.module.scss";

import "swiper/css";
import "swiper/css/free-mode";

export const TeamSwiper = ({
  setSwiperRef,
  loop
}) => {
  return (
    <div className={style.cardsSwiper}>
      <Swiper
        onSwiper={setSwiperRef}
        spaceBetween={16}
        initialSlide={1}
        centeredSlides={true}
        slidesPerView={1.3}
        freeMode={true}
        className="mySwiper"
        grabCursor={true}
        speed={800}
        loop={loop}
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
