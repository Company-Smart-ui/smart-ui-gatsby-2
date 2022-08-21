import React, { useState } from "react";
import * as style from "./ourAdvantages.module.scss";
import { SwiperButtons } from "../../../global/swiperButtons/SwiperButtons";
import { AdvantagesSwiper } from "./swiper/AdvantagesSwiper";
import { Pagination } from "../../../global/pagination/Pagination";
import { advantagesList } from "./card/AdvantagesList";

export const OurAdvantages = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slidePrevHandler = () => swiperRef.slidePrev();
  const slideNextHandler = () => swiperRef.slideNext();

  return (
    <section className={`${style.ourAdvantages} vertical-padding`}>
      <div className="noise" />
      <div className="container">
        <div className="gCircle" />
        <div className="bCircle md-only" />
        <div className="clock-mobile" />
        <div className="illustration-tablet" />
        <div className="overlay upperBlock">
          <div className="title-block">
            <h2 className="h2">Our Advantages</h2>
            <div className="subtitle">
              We help to develop business, using complex modern effective it
              solutions, tools of web development and Internet marketing.
            </div>
          </div>
          <div className="pagination-wrapper">
            <Pagination activeIdx={activeIndex} sliderLength={advantagesList.length} whiteTheme />
          </div>
          <AdvantagesSwiper
            swiperRef={swiperRef}
            setSwiperRef={setSwiperRef}
            setActiveIndex={setActiveIndex}
            loop
          />
        </div>
        <div className="footer-buttons overlay">
          <SwiperButtons
            onPrev={slidePrevHandler}
            onNext={slideNextHandler}
            loop
          />
        </div>
        <button className="button">Review</button>
      </div>
    </section>
  );
};
