import React, { useState } from "react";
import * as style from "./whatWeDo.module.scss";
import { CircleButton } from "../../../global/circleButton/circleButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper";

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
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const firstSwiperParams = {
    spaceBetween: 10,
    navigation: false,
    thumbs: { swiper: thumbsSwiper },
    modules: [FreeMode, Navigation, Pagination, Thumbs],
    pagination: { clickable: true },
  };

  const secondarySwiperParams = {
    onSwiper: setThumbsSwiper,
    spaceBetween: 10,
    slidesPerView: 1,
    freeMode: true,
    watchSlidesProgress: true,
    modules: [FreeMode, Navigation, Thumbs],
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
              className="mySwiper2"
              {...firstSwiperParams}
              onSlideChange={() => setActiveIndex(thumbsSwiper.realIndex)}
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
              <div className="controllWrapper">
                <CircleButton
                  prev
                  classes={activeIndex !== 0 && "fillButton"}
                />
                <CircleButton
                  toLeft
                  classes={activeIndex !== 1 && "fillButton"}
                />
              </div>
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
              <Swiper {...secondarySwiperParams} className="mySwiper">
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
            <div className="findOut">
              <a href="/">Book a consultation</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
