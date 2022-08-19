import React, { useState } from "react";
import * as style from "./meetOur.module.scss";
import { TeamSwiper } from "./swiper/TeamSwiper";
import { SwiperButtons } from "../../../global/swiperButtons/SwiperButtons";
import { teamList } from "./card/TeamList";
import { Card } from "./card/Card";

export const MeetOur = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  const slidePrevHandler = () => swiperRef.slidePrev();
  const slideNextHandler = () => swiperRef.slideNext();

  return (
    <div className={`${style.meetOur} vertical-padding`}>
      <div className="noise" />
      <div className="container overlay">
      <div className="img-block" />
        <h2 className="h2">Meet Our Team</h2>
        <p className="subtitle">Expert Team Member</p>
      </div>
      <div className="swiper-container overlay">
        <TeamSwiper setSwiperRef={setSwiperRef} loop={false} />
      </div>
      <div className="team-list-container container overlay">
        {teamList.map((card) => (
          <Card content={card} key={card.name} loop />
        ))}
      </div>
      <div className="footer-buttons overlay">
        <SwiperButtons
          onPrev={slidePrevHandler}
          onNext={slideNextHandler}
          loop
        />
      </div>
      <button className="container button whole-team-button">
        The whole team
      </button>
    </div>
  );
};
