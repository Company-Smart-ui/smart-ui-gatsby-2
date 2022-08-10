import React, { useState } from "react";
import * as style from "./whatWeDo.module.scss";
import { CircleButton } from "../../../global/circleButton/circleButton";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const WHATWEDO = [
  "Website design and development",
  "Website integration and maintenance",
  "Customized e-commerce development",
  "CMS development/integration",
];

const WHATWEDOSHARE = [
  "Programming Languages: HTML5, CSS3, PHP, JavaScript (AngularJS, ReactJS NodeJS, jQuery)",
  "Content Management Systems (CMS): Wordpress, Opencart, Drupal",
  "Version Control System (VCS): SVN GIT GitLab GitHub Bitbucket",
  "Software as a Service (SAAS): Amazon Web Services, Rackspace Cloud",
  "Integration of different Application Programming Interface (API)",
];

export const WhatWeDo = () => {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slideNextHandler = () => {
    firstSwiper.slideNext();
    secondSwiper.slideNext();
  };
  const slidePrevHandler = () => {
    firstSwiper.slidePrev();
    secondSwiper.slidePrev();
  };

  return (
    <section className={`${style.whatWeDo}`}>
      <div className="container">
        <div className="flex">
          <div className="gCircle" />
          <div className="gCircle bottom" />
          <div className="overlay upperBlock">
            <h2 className="h2">What We Do?</h2>
            <Swiper
              onSwiper={setFirstSwiper}
              slidesPerView={1}
              className="mySwiper2"
              onSlideChange={() => setActiveIndex(firstSwiper.realIndex)}
            >
              <SwiperSlide>
                <p className="description">
                  By implementing modern Internet technologies, we help our
                  Clients to achieve their goals and solve problems effectively,
                  striving to do it better than competitors do, and offering
                  optimal effective solutions taking into account the interests
                  of each Client, with sincere care and maximum possible
                  attention.
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <p className="description">
                  We are always ready to help our customers with short-term
                  projects or become a reliable long-term partners.
                </p>
              </SwiperSlide>
            </Swiper>
            <button className="button">Ask aquestion</button>
          </div>
          <div className="bottomBlock">
            <div className="divider">
              <div className="dividerLine" />
              <div className="paginationWrapper">
                <span className={`pagination ${activeIndex !== 0 && "active"}`}>
                  01
                </span>
                <span className="horizontalLine"></span>
                <span className={`pagination ${activeIndex !== 1 && "active"}`}>
                  02
                </span>
              </div>
              <Swiper
                onSwiper={setSecondSwiper}
                slidesPerView={1}
                onSlideChange={() => setActiveIndex(firstSwiper.realIndex)}
                className="mySwiper"
              >
                <SwiperSlide>
                  <>
                    <p className="subtitle">
                      We have a strong background in the areas below:
                    </p>
                    <ul className="listDescriptions">
                      {WHATWEDO.map((listEl) => (
                        <li key={listEl}>
                          <span>-</span> <span>{listEl}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                </SwiperSlide>
                <SwiperSlide>
                  <>
                    <p className="subtitle">
                      We have already strong skills and we are not stopping on
                      achieved in following:
                    </p>
                    <ul className="listDescriptions">
                      {WHATWEDOSHARE.map((listEl) => (
                        <li key={listEl}>
                          <span>-</span> <span>{listEl}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        <div className="footerButtons">
          {/* Here should be controll buttons */}
          <div className="controllWrapper">
            <CircleButton
              onClick={slidePrevHandler}
              classes={activeIndex !== 0 && "fillButton"}
            />
            <CircleButton
              onClick={slideNextHandler}
              toLeft
              classes={activeIndex !== 1 && "fillButton"}
            />
          </div>
          <div className="infoLink">
            <a href="/">Book a consultation</a>
          </div>
        </div>
      </div>
    </section>
  );
};
