import React, { useState, useEffect } from "react";
import * as style from "./meetOur.module.scss";
import { TeamSwiper } from "./swiper/TeamSwiper";
import { SwiperButtons } from "../../../global/swiperButtons/SwiperButtons";
import { teamList } from "./card/TeamList";
import { Pagination } from "../../../global/pagination/Pagination";

export const MeetOur = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slidePrevHandler = () => swiperRef.slidePrev();
  const slideNextHandler = () => swiperRef.slideNext();

  useEffect(() => {
    setActiveIndex(0);
  }, []);

  return (
    <div className={`${style.meetOur} vertical-padding`}>
      <div className="noise" />
      <div className="container overlay">
        <div className="img-block" />
        <div className="container-grid">
          <div className="title-block">
            <div className="title-container">
              <h2 className="h2">Meet Our Team</h2>
              <p className="subtitle">Expert Team Member</p>
              <div className="pagination-wrapper">
                <Pagination
                  activeIdx={activeIndex}
                  sliderLength={teamList.length}
                />
              </div>
            </div>
          </div>
          <div className="container-block">
            <div className="swiper-container overlay">
              <TeamSwiper
                setActiveIndex={setActiveIndex}
                setSwiperRef={setSwiperRef}
                loop
                swiperRef={swiperRef}
              />
            </div>
          </div>
          <div className="footer-buttons overlay">
            <SwiperButtons
              onPrev={slidePrevHandler}
              onNext={slideNextHandler}
              activeIndex={activeIndex}
              loop
            />
          </div>
          <button className="container button whole-team-button">
            The whole team
          </button>
        </div>
      </div>
    </div>
  );
};
