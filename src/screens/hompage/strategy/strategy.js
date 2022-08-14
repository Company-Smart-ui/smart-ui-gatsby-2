import React, { useState, useEffect } from "react";
import * as style from "./strategy.module.scss";
import { Pagination } from "../../../global/pagination/Pagination";
import { strategyOptions } from "./strategyOptions";
import { SwiperButtons } from "../../../global/swiperButtons/SwiperButtons";
import { SwiperList } from "./swiper/SwiperList";

export const Strategy = () => {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slidePrevHandler = () => swiper.slidePrev();
  const slideNextHandler = () => swiper.slideNext();

  useEffect(() => {
    setActiveIndex(0);
  }, []);

  return (
    <section className={`${style.strategy} vertical-padding`}>
      <div className="container">
        <div className="gCircle" />
        <div className="gCircle bottom" />
        <div className="overlay upperBlock">
          <h2 className="h2">Strategy</h2>
          <div className="pagination-button-wrapper">
            <Pagination activeIdx={activeIndex} sliderLength={2} whiteTheme />
          </div>
          <SwiperList
            swiper={swiper}
            setSwiper={setSwiper}
            setActiveIndex={setActiveIndex}
          />
          <div className="options-list">
            {strategyOptions.map((option) => (
              <div key={option.id} className="list-item">
                <div className="list-title">
                  <span className="list-item-number">{`0${option.id}`}</span>
                  <span className="list-item-title">{option.title}</span>
                </div>
                <div className="list-item-description">
                  {option.description}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="footerButtons">
          <SwiperButtons
            onPrev={slidePrevHandler}
            onNext={slideNextHandler}
            sliderLength={2}
            activeIndex={activeIndex}
          />
        </div>
      </div>
    </section>
  );
};
