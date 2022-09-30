import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProjectCard } from "../../../../global/projectCard/projectCard";
import * as style from "./worksSwiper.module.scss";

import "swiper/css";
import "swiper/css/free-mode";

export const WorksSwiper = ({
  swiperRef,
  setActiveHandler,
  setSwiperRef,
  listOfProjects,
  button,
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
            spaceBetween: 0,
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
        loop={false}
        onSlideChange={() => setActiveHandler(swiperRef?.realIndex)}
      >
        {Array.isArray(listOfProjects) &&
          listOfProjects.map((el) => (
            <SwiperSlide key={el.id}>
              <ProjectCard button={button} {...el} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};
