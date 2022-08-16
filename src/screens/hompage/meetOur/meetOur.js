import React, { useState } from "react";
import * as style from "./meetOur.module.scss";
import { StaticImage } from "gatsby-plugin-image";
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
      <div className="img-block">
        <figure className="img-tools">
          <StaticImage
            placeholder={"none"}
            height={118}
            alt={""}
            src={"./tools.png"}
          />
        </figure>
        <figure className="img-phone">
          <StaticImage
            placeholder={"none"}
            height={280}
            alt={""}
            src={"./phone.png"}
          />
        </figure>
      </div>
      <div className="container overlay">
        <h2 className="h2">Meet Our Team</h2>
        <p className="subtitle">Expert Team Member</p>
      </div>
      <div className="swiper-container">
        <TeamSwiper setSwiperRef={setSwiperRef} loop={false} />
      </div>
      <div className="team-list-container container">
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
