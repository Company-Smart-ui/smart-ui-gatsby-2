import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import  { strategyOptions }  from "../strategyOptions";
import * as style from "./swiperList.module.scss";

export const SwiperList = ({ swiper, setSwiper, setActiveIndex }) => {

  const firstSliderBlock = [];
  const secondSliderBlock = [];

  strategyOptions.forEach((el, index) =>
    index < strategyOptions.length / 2
      ? firstSliderBlock.push(el)
      : secondSliderBlock.push(el)
  );

  return (
    <div className={style.swiper_list}>
      <Swiper
        onSwiper={setSwiper}
        className="mySwiper2"
        allowTouchMove={true}
        speed={400}
        onSlideChange={() => setActiveIndex(swiper.realIndex)}
      >
        <SwiperSlide>
          {firstSliderBlock.map((option) => (
            <div key={option.id} className="swiper-list-item">
              <span className="list-item-number">{`0${option.id}`}</span>
              <span className="list-item-title">{option.title}</span>
              <div className="list-item-description">{option.description}</div>
            </div>
          ))}
        </SwiperSlide>
        <SwiperSlide>
          {secondSliderBlock.map((option) => (
            <div key={option.id} className="swiper-list-item">
              <span className="list-item-number">{`0${option.id}`}</span>
              <span className="list-item-title">{option.title}</span>
              <div className="list-item-description">{option.description}</div>
            </div>
          ))}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
