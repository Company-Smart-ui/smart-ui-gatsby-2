import React, { useState, useEffect } from "react";
import { SwiperButtons } from "../../../global/swiperButtons/SwiperButtons";
import * as style from "./recentWorks.module.scss";
import { WorksSwiper } from "./swiper/WorksSwiper";
import { Pagination } from "../../../global/pagination/Pagination";

export const RecentWorks = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slidePrevHandler = () => swiperRef.slidePrev();
  const slideNextHandler = () => swiperRef.slideNext();

  const setActiveHandler = (idx) => setActiveIndex(idx);

  useEffect(() => {
    setActiveIndex(0);
  }, []);

  return (
    <div className={`${style.recentWorks} vertical-padding`}>
      <div className="overalay lgContainer">
        <div className="tabletContainer">
          <div className="container">
            <div className="title-container">
              <div className="second-title">Showcase</div>
              <h2 className="h2 title">Recent Works</h2>
              <div className="subtitle">
                We will help to develop your best project based on your idea.
              </div>
              <button className="button">View More Projects</button>
            </div>
          </div>
          <div className="vertical-block overlay">
            <div className="pagination-wrapper container">
              <Pagination activeIdx={activeIndex} sliderLength={2} />
            </div>
            <WorksSwiper
              setActiveHandler={setActiveHandler}
              swiperRef={swiperRef}
              setSwiperRef={setSwiperRef}
              activeIndex={activeIndex}
            />
            <div className="buttonsBlock">
              <SwiperButtons
                onPrev={slidePrevHandler}
                onNext={slideNextHandler}
                loop
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
