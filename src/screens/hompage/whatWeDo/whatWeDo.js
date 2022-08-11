import React, { useState } from "react";
import * as style from "./whatWeDo.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import templates from "./templates";
import { SwiperButtons } from "../../../global/swiperButtons/SwiperButtons";

import "swiper/css";
import { Pagination } from "../../../global/pagination/Pagination";

export const WhatWeDo = () => {
  const [swiper, setSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slidePrevHandler = () => {
    swiper.slidePrev();
    secondSwiper.slidePrev();
  };

  const slideNextHandler = () => {
    swiper.slideNext();
    secondSwiper.slideNext();
  };

  return (
    <section className={`${style.whatWeDo}`}>
      <div className="container">
        <div className="flex">
          <div className="gCircle" />
          <div className="gCircle bottom" />
          <div className="overlay upperBlock">
            <h2 className="h2">What We Do?</h2>
            <Swiper
              onSwiper={setSwiper}
              slidesPerView={1}
              className="mySwiper2"
              allowTouchMove={false}
              onSlideChange={() => setActiveIndex(swiper.realIndex)}
            >
              <SwiperSlide>
                <p className="description">
                  {templates.firstService.description}
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <p className="description">
                  {templates.secondService.description}
                </p>
              </SwiperSlide>
            </Swiper>
            <div className="pagination-button-wrapper">
              <button className="button">Ask a question</button>
              <Pagination activeIdx={activeIndex} sliderLength={2} whiteTheme />
            </div>
          </div>
          <div className="bottomBlock">
            <div className="dividerLine" />
            <Swiper
              onSwiper={setSecondSwiper}
              slidesPerView={1}
              allowTouchMove={false}
              className="mySwiper"
            >
              <SwiperSlide>
                <>
                  <p className="subtitle">
                    We have a strong background in the areas below:
                  </p>
                  <ul className="listDescriptions">
                    {templates.firstService.listService.map((listEl, index) => (
                      <li key={`${index} - ${listEl}`}>
                        <span>-</span> <span>{listEl}</span>
                      </li>
                    ))}
                  </ul>
                </>
              </SwiperSlide>
              <SwiperSlide>
                <>
                  <p className="subtitle">
                    We have already strong skills and we are not stopping on
                    achieved in following:
                  </p>
                  <ul className="listDescriptions">
                    {templates.secondService.listService.map(
                      (listEl, index) => (
                        <li key={`${index} - ${listEl}`}>
                          <span>-</span> <span>{listEl}</span>
                        </li>
                      )
                    )}
                  </ul>
                </>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="footerButtons">
          <SwiperButtons
            onPrev={slidePrevHandler}
            onNext={slideNextHandler}
            sliderLength={2}
            activeIndex={activeIndex}
          />
          <div className="infoLink">
            <a href="/">Book a consultation</a>
          </div>
        </div>
      </div>
    </section>
  );
};
