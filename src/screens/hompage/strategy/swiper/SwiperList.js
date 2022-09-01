import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import * as style from "./swiperList.module.scss";

export const SwiperList = ({ swiper, setSwiper, setActiveIndex, content }) => {
  const middleItem = content.length / 2;

  const firstSlideArr = [];
  const secondSlideArr = [];

  Array.isArray(content) &&
    content.forEach((element, i) => {
      if (i < middleItem) {
        firstSlideArr.push(element);
      }
      if (i >= middleItem) {
        secondSlideArr.push(element);
      }
    });

  console.log(firstSlideArr);
  console.log(secondSlideArr);

  return (
    <div className={style.swiper_list}>
      <Swiper
        onSwiper={setSwiper}
        className="mySwiper2"
        allowTouchMove={true}
        speed={400}
        breakpoints={{
          1024: {
            slidesPerView: 2,
            spaceBetween: 64,
            allowTouchMove: false,
          },
        }}
        onSlideChange={() => setActiveIndex(swiper.realIndex)}
      >
        <SwiperSlide>
          {firstSlideArr.map(({ id, title, text }, i) => (
            <div
              key={id}
              className="swiper-list-item"
              style={{ gridArea: `${i * 2 + 1}/1 / ${i * 2 + 1} /3` }}
            >
              <div className="title-block">
                <span className="list-item-number">{`0${i + 1}`}</span>
                <span className="list-item-title">{title}</span>
              </div>
              <div className="list-item-description">{text}</div>
            </div>
          ))}
        </SwiperSlide>
        <SwiperSlide>
          {secondSlideArr.map(({ id, title, text }, i) => (
            <div
              style={{ gridArea: `${i * 2 + 2}/2/${i * 2 + 2}/4` }}
              key={id}
              className="swiper-list-item"
            >
              <div className="title-block second">
                <span className="list-item-number">{`0${
                  firstSlideArr.length + i + 1
                }`}</span>
                <span className="list-item-title">{title}</span>
              </div>
              <div className="list-item-description">{text}</div>
            </div>
          ))}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
