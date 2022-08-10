import React, { useState } from "react";
import * as style from "./tools.module.scss";
import { CircleButton } from "../../../global/circleButton/circleButton";
import { StaticImage } from "gatsby-plugin-image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

// import "./styles.css";

const cardsList = [
  {
    img: "./javascript.png",
    title: "Java Script",
    description: "JavaScript, Vanilla JS, React.jx, Angular",
  },
  {
    img: "./pagespeed.png",
    title: "Speed Optimization",
    description: "Google pages speed insights to 100%",
  },
  {
    img: "./wordpress.png",
    title: "Content Managment",
    description: "WordPress",
  },
];

export const Tools = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperRef, setSwiperRef] = useState(null);

  const slideNextHandler = () => swiperRef.slideNext();
  const slidePrevHandler = () => swiperRef.slidePrev();

  const sliderLength = cardsList.length;

  console.log("ActiveIndex:", activeIndex, "SlideLength:", sliderLength);

  return (
    <div className={`noise ${style.tools}`}>
      <div>
        <div className="tabletContainer">
          <div className="contentDescriptionWrapper container">
            <p className="subtitle">Technology</p>
            <h2 className="h2 title">Tools We Use</h2>
            <p className="description">
              Contact that lead developer and discuss technical points in detail
            </p>
            <button className="button">Contact the lead developer</button>
            <p className="swiperTips">Swipe to explore</p>
            <div className="paginationWrapper">
              <span className="pagination">
                {activeIndex < 10 ? `0${activeIndex + 1}` : activeIndex + 1}
              </span>
              <span className="horizontalLine"></span>
              <span className="pagination active">
                {sliderLength < 10 ? `0${sliderLength}` : sliderLength}
              </span>
            </div>
          </div>
          {/* Block of cards */}
          <div className="verticalBlock">
            <div className="cardsWrapper">
              <Swiper
                onSwiper={setSwiperRef}
                slidesPerView={1.2}
                spaceBetween={16}
                centeredSlides={true}
                className="mySwiper"
                onSlideChange={() => setActiveIndex(swiperRef.realIndex)}
              >
                {cardsList.map((el, index) => {
                  return (
                    <div key={index}>
                      <SwiperSlide>
                        <div
                          className={
                            index === activeIndex
                              ? "cardsContainer active"
                              : "cardsContainer"
                          }
                        >
                          <div className="imgWrapper">
                            <StaticImage
                              placeholder={"none"}
                              height={120}
                              alt={""}
                              src="./javascript.png"
                            />
                          </div>
                          <div className="contentWrapper">
                            <div className="contentWrapperTitle">
                              {el.title}
                            </div>
                            <div className="contentWrapperDescription">
                              {el.description}
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </div>
                  );
                })}
              </Swiper>
            </div>
            <div className="controllWrapper">
              <CircleButton
                onClick={slidePrevHandler}
                classes={activeIndex !== 0 ? "fillButton" : "backgroundButton"}
              />
              <CircleButton
                onClick={slideNextHandler}
                toLeft
                classes={
                  activeIndex !== sliderLength - 1
                    ? "fillButton"
                    : "backgroundButton"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
