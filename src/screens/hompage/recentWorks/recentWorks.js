import React, { useState } from "react";
import { SwiperButtons } from "../../../global/swiperButtons/SwiperButtons";
import * as style from "./recentWorks.module.scss";
import { WorksSwiper } from "./swiper/WorksSwiper";
import { worksList } from "./card/WorksList";
import { Card } from "./card/Card";
import { Pagination } from "../../../global/pagination/Pagination";

export const RecentWorks = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slidePrevHandler = () => swiperRef.slidePrev();
  const slideNextHandler = () => swiperRef.slideNext();

  return (
    <div className={`${style.recentWorks} vertical-padding`}>
      <div className="container">
        <div className="title-container">
          <div className="second-title">Showcase</div>
          <h2 className="h2">Recent Works</h2>
          <div className="subtitle">
            We will help to develop your best project based on your idea.
          </div>
          <button className="button">View More Projects</button>
          <div className="pagination-wrapper">
            <Pagination activeIdx={activeIndex} sliderLength={2} />
          </div>
        </div>
      </div>
      <div>
        <div className="works-swiper">
          <WorksSwiper setSwiperRef={setSwiperRef} loop />
        </div>
        <div className="works-list container">
          {worksList.map((el) => (
            <Card content={el} key={el.title} />
          ))}
        </div>
        <div className="footer-buttons">
          <SwiperButtons
            onPrev={slidePrevHandler}
            onNext={slideNextHandler}
            loop
          />
        </div>
      </div>
    </div>
  );
};
