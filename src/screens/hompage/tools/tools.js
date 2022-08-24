import React, { useState, useEffect } from "react";
import * as style from "./tools.module.scss";
import { Pagination } from "../../../global/pagination/Pagination";
import { CardsSwiper } from "./swiper/CardsSwiper";
import { SwiperButtons } from "../../../global/swiperButtons/SwiperButtons";
import { cardsList } from "./card/CardList";
import { SwipeTo } from "../../../global/swipeTo/swipeTo";
import {useTranslation} from "react-i18next";

export const Tools = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [swiperRef, setSwiperRef] = useState(null);

  const slidePrevHandler = () => swiperRef.slidePrev();
  const slideNextHandler = () => swiperRef.slideNext();

  const setActiveHandler = () => setActiveIndex(swiperRef?.realIndex);

  const sliderLength = cardsList.length;

  useEffect(() => {
    setActiveIndex(0);
  }, []);
    const {t} = useTranslation();
  return (
    <div className={`${style.tools} vertical-padding`}>
      <div className="yCircle" />
      <div className="noise" />
      <div className="overlay container">
        <div className="container-grid">
<<<<<<< HEAD
          <div className="title-container">
            <div className="title-content">
              <p className="second-title">Technology</p>
              <h2 className="h2 title">Tools We Use</h2>
              <p className="subtitle description">
                Contact that lead developer and discuss technical points in
                detail
              </p>
              <button className="button">Contact the lead developer</button>
              <div className="swiperTips">
                <SwipeTo />
=======
            <div className="title-container">
              <div className="title-content">
            <p className="second-title">{t('tools_small_title')}</p>
            <h2 className="h2 title">Tools We Use</h2>
            <p className="subtitle description">
              Contact that lead developer and discuss technical points in detail
            </p>
            <button className="button">Contact the lead developer</button>
            <div className="swiperTips">
              <SwipeTo />
            </div>
>>>>>>> master
              </div>
            </div>
          </div>
          <div className="vertical-block overlay">
            <div className="pagination-wrapper">
              <Pagination activeIdx={activeIndex} sliderLength={sliderLength} />
            </div>
            <CardsSwiper
              setActiveHandler={setActiveHandler}
              setSwiperRef={setSwiperRef}
              activeIndex={activeIndex}
            />
          </div>
          <div className="buttons-block">
            <SwiperButtons
              onPrev={slidePrevHandler}
              onNext={slideNextHandler}
              sliderLength={sliderLength}
              activeIndex={activeIndex}
              loop
            />
          </div>
        </div>
      </div>
    </div>
  );
};
