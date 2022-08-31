import React, { useState, useEffect } from "react";
import * as style from "./strategy.module.scss";
import { Pagination } from "../../../global/pagination/Pagination";
import { SwiperButtons } from "../../../global/swiperButtons/SwiperButtons";
import { SwiperList } from "./swiper/SwiperList";
import {useTranslation} from "react-i18next";

export const Strategy = () => {
  const {t} = useTranslation();
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slidePrevHandler = () => swiper.slidePrev();
  const slideNextHandler = () => swiper.slideNext();

  useEffect(() => {
    setActiveIndex(0);
  }, []);

  const items = t('strategy_items', { returnObjects: true });

  return (
    <section className={`${style.strategy} vertical-padding`}>
        <div className="noise" />
      <div className="container">
        <div className="gCircle" />
        <div className="overlay">
          <h2 className="h2">{t('strategy_title')}</h2>
          <div className="pagination-button-wrapper">
            <Pagination activeIdx={activeIndex} sliderLength={2} whiteTheme />
          </div>
          <SwiperList
            swiper={swiper}
            setSwiper={setSwiper}
            setActiveIndex={setActiveIndex}
            content={items}
          />
        </div>
        <div className="footerButtons overlay">
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
