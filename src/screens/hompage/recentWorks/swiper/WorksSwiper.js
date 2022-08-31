import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Card } from "../card/Card";
import { ProjectCard } from "../../../../global/projectCard/projectCard";
import { listCardsProjects } from "../../../portfolio/hero/data";
import * as style from './worksSwiper.module.scss';

import "swiper/css";
import "swiper/css/free-mode";

export const WorksSwiper = ({
  swiperRef,
  setActiveHandler,
  setSwiperRef,
  loop
}) => {
  return (
    <div className={style.worksSwiper}>
      <Swiper
        onSwiper={setSwiperRef}
        spaceBetween={0}
        slidesPerView={1}
        className="swiper"
        breakpoints={{
          375: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 0
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        }}
        grabCursor={true}
        speed={800}
        loop={true}
        onSlideChange={() => setActiveHandler(swiperRef?.realIndex)}
      >
        {listCardsProjects.map((el, index) => (
          <SwiperSlide key={el.title}>
            <ProjectCard content={el} indexEl={index} loop={loop} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
