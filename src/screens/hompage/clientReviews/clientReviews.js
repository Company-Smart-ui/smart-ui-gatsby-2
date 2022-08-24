import React, { useState } from "react";
import * as style from "./clientReviews.module.scss";
import { Pagination } from "../../../global/pagination/Pagination";
import { SwiperButtons } from "../../../global/swiperButtons/SwiperButtons";
import { ReviewSwiper } from "./swiper/ReviewSwiper";

export const ClientReviews = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slidePrevHandler = () => swiperRef.slidePrev();
  const slideNextHandler = () => swiperRef.slideNext();

  return (
    <div className={`${style.clientReviews} vertical-padding`}>
      <div className="bg-upwork-title">
        <div className="noise" />
        <div className="container">
          <div className="overlay grid-container">
            <div className="title">
              <h2>
                Clients Reviews<span className="green">.</span>
              </h2>
              <div className="subtitle">
                We help to develop business, using complex modern effective it
                solutions, tools of web development and Internet marketing.
              </div>
            </div>
            <div className="review">
              <div className="review-title">
                What others are saying on <span className="green">Up Work</span>
              </div>
              <button className="button">View all comments</button>
            </div>
            <div className="content">
              <Pagination sliderLength={2} activeIdx={activeIndex} />
              <ReviewSwiper
                swiperRef={swiperRef}
                setSwiperRef={setSwiperRef}
                setActiveIndex={setActiveIndex}
              />
            </div>
            <div className="buttons">
              <SwiperButtons
                onPrev={slidePrevHandler}
                onNext={slideNextHandler}
                sliderLength={2}
                activeIndex={activeIndex}
                fill={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
