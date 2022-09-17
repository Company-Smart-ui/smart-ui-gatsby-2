import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import * as style from "./swiperList.module.scss";

export const SwiperList = ({ swiper, setSwiper, setActiveIndex, content }) => {
  const middleItem = content.length / 2;
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
          {Array.isArray(content) &&
            content.map(
              ({ id, title, text }, i) =>
                i < middleItem && (
                  <div key={id} className="swiper-list-item">
                    <div
                      className={`title-block ${
                        i % 2 === 1 ? "second-column-title" : " "
                      }`}
                      style={{
                        gridArea:
                          i % 2 === 1
                            ? `${i + 1}/2 /${i + 1}/2`
                            : `${i + 1}/1/${i + 1}/2`,
                      }}
                    >
                      <span className="list-item-number">{`0${i + 1}`}</span>
                      <span className="list-item-title">{title}</span>
                    </div>
                    <div
                      className="list-item-description"
                      style={{
                        gridArea:
                          i % 2 === 1
                            ? `${i + 1}/3 / ${i + 1}/3`
                            : `${i + 1}/2/${i + 1}/3`,
                      }}
                    >
                      {text}
                    </div>
                  </div>
                )
            )}
        </SwiperSlide>
        <SwiperSlide>
          {Array.isArray(content) &&
            content.map(
              ({ id, title, text }, i) =>
                i >= middleItem && (
                  <div key={id} className="swiper-list-item">
                    <div
                      className={`title-block ${
                        i % 2 === 1 ? "second-column-title" : " "
                      }`}
                      style={{
                        gridArea:
                          i % 2 === 1
                            ? `${i + 1}/2/${i + 1}/2`
                            : `${i + 1}/1/${i + 1}/2`,
                      }}
                    >
                      <span className="list-item-number">{`0${i + 1}`}</span>
                      <span className="list-item-title">{title}</span>
                    </div>
                    <div
                      className="list-item-description"
                      style={{
                        gridArea:
                          i % 2 === 1
                            ? `${i + 1}/3/${i + 1}/3`
                            : `${i + 1}/2/${i + 1}/3`,
                      }}
                    >
                      {text}
                    </div>
                  </div>
                )
            )}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
