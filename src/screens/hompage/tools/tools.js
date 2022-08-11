import React, { useState } from "react";
import * as style from "./tools.module.scss";
import { Pagination } from "../../../global/pagination/Pagination";
import { CardsSwiper } from "./swiper/CardsSwiper";
import { SwiperButtons } from "../../../global/swiperButtons/SwiperButtons";
import { cardsList } from "./card/CardList";
import { SwipeTo } from "../../../global/swipeTo/swipeTo";

export const Tools = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperRef, setSwiperRef] = useState(null);

  const slidePrevHandler = () => swiperRef.slidePrev();
  const slideNextHandler = () => swiperRef.slideNext();

  const setActiveHandler = (idx) => setActiveIndex(idx);

  const sliderLength = cardsList.length;

  return (
    <div className={`${style.tools}`}>
      <div className="yCircle" />
      <div className="noise" />
      <div className="overlay lgContainer">
        <div className="tabletContainer">
          <div className="container resetPadding">
            <p className="subtitle">Technology</p>
            <h2 className="h2 title">Tools We Use</h2>
            <p className="description">
              Contact that lead developer and discuss technical points in detail
            </p>
            <button className="button">Contact the lead developer</button>
            <div className="swiperTips">
              <SwipeTo />
            </div>
          </div>
          <div className="verticalBlock overlay">
            <div className="container">
              <Pagination activeIdx={activeIndex} sliderLength={sliderLength} />
            </div>
            <CardsSwiper
              setActiveHandler={setActiveHandler}
              swiperRef={swiperRef}
              setSwiperRef={setSwiperRef}
              activeIndex={activeIndex}
            />
            <div className="buttonsBlock">
            <SwiperButtons
              onPrev={slidePrevHandler}
              onNext={slideNextHandler}
              sliderLength={sliderLength}
              activeIndex={activeIndex}
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
