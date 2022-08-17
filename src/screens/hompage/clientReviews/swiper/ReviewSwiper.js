import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperList } from "../list/SwiperList";
import reviewList from "../list/templates/reviewList";

export const ReviewSwiper = ({ swiperRef, setSwiperRef, setActiveIndex }) => {
  return (
    <Swiper
      onSwiper={setSwiperRef}
      slidesPerView={1}
      className="mySwiper2"
      allowTouchMove={true}
      onSlideChange={() => setActiveIndex(swiperRef.realIndex)}
    >
      <SwiperSlide>
        {reviewList.firstList.map((el) => (
          <SwiperList key={el.title} content={el} />
        ))}
      </SwiperSlide>
      <SwiperSlide>
        {reviewList?.secondList.map((el) => (
          <SwiperList key={el.title} content={el} />
        ))}
      </SwiperSlide>
    </Swiper>
  );
};
