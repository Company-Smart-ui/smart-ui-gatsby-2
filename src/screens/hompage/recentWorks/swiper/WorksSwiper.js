import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProjectCard } from "../../../../global/projectCard/projectCard";
import { listCardsProjects } from "../../../portfolio/hero/data";
import * as style from './worksSwiper.module.scss';

import "swiper/css";
import "swiper/css/free-mode";

export const WorksSwiper = ({
  swiperRef,
  setActiveHandler,
  setSwiperRef
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
          768: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 8,
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
        {listCardsProjects.map((el) => (
          <SwiperSlide key={el.id}>
            <ProjectCard content={el} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
