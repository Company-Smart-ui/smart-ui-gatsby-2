import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperList } from "../list/SwiperList";

export const ReviewSwiper = ({
  swiperRef,
  setSwiperRef,
  setActiveIndex,
  reviewList,
}) => {
  const divideArr = (initialArr, offset) => {
    const arr = [];
    let firstItem = 0;
    let secondItem = offset;
    const iterator = Math.ceil(initialArr.length / offset);
    let myIterator = 0;

    if (initialArr.length !== 0) {
      while (iterator !== myIterator) {
        arr.push(initialArr.slice(firstItem, secondItem));
        firstItem = firstItem + offset;
        secondItem = secondItem + offset;
        myIterator += 1;
      }
    }
    return arr;
  };

  const listForSwiperSlide = divideArr(reviewList, 2);

  return (
    <Swiper
      onSwiper={setSwiperRef}
      slidesPerView={1}
      className="mySwiper2"
      allowTouchMove={true}
      onSlideChange={() => setActiveIndex(swiperRef.realIndex)}
    >
      {listForSwiperSlide?.map((slide, idx) => (
        <SwiperSlide key={idx}>
          {slide.map(({ id, review, stars, name }) => (
            <SwiperList key={id} review={review} stars={stars} name={name} />
          ))}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
