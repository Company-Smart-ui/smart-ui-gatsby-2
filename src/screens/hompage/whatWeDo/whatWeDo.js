import React, { useState } from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import * as style from "./whatWeDo.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperButtons } from "../../../global/swiperButtons/SwiperButtons";
import { useTranslation } from "react-i18next";
import { Modal } from "../../../components/layout/modal/modal";
import { useOpen } from "../../../hooks/useOpen";

import "swiper/css";
import { Pagination } from "../../../global/pagination/Pagination";
import { StaticImage } from "gatsby-plugin-image";

export const WhatWeDo = () => {
  const { t } = useTranslation();
  const [swiper, setSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { isOpen, onClose, onOpen } = useOpen(false);

  const slidePrevHandler = () => {
    swiper.slidePrev();
    secondSwiper.slidePrev();
  };

  const slideNextHandler = () => {
    swiper.slideNext();
    secondSwiper.slideNext();
  };

  const template = t("whatwedo_slider", { returnObjects: true });

  const firstSlide = template[0];
  const secondSlide = template[1];

  return (
    <>
      <ScrollableAnchor id={"whatWeDo"}>
        <section className={`${style.whatWeDo} vertical-padding`}>
          <StaticImage 
            src="./line_background_grid.png" 
            style={{position:'absolute', top: 0, height:'100%'}} 
            />
          <div className="container">
            <div className="grid">
              <div className="description-grid">
                <div className="gCircle" />
                <div className="gCircle bottom" />
                <div className="noise" />
                <h2 className="h2 overlay">{t("whatwedo_title")}</h2>
                <Swiper
                  onSwiper={setSwiper}
                  slidesPerView={1}
                  className="mySwiper2"
                  allowTouchMove={false}
                  onSlideChange={() => setActiveIndex(swiper.realIndex)}
                >
                  <SwiperSlide>
                    <p className="description">{firstSlide.top_text}</p>
                  </SwiperSlide>
                  <SwiperSlide>
                    <p className="description">{secondSlide.top_text}</p>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="pagination">
                <button
                  className={["button", isOpen ? "disabledBtn" : ""].join(" ")}
                  onClick={onOpen}
                >
                  {t("whatwedo_btn")}
                </button>
                <Pagination
                  activeIdx={activeIndex}
                  sliderLength={2}
                  whiteTheme
                />
              </div>
              <div className="work-list">
                <div className="dividerLine" />
                <Swiper
                  onSwiper={setSecondSwiper}
                  slidesPerView={1}
                  allowTouchMove={false}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <>
                      <p className="subtitle">{firstSlide.bottom_title}</p>
                      <ul
                        dangerouslySetInnerHTML={{
                          __html: firstSlide.bottom_text,
                        }}
                        className="list-descriptions"
                      />
                    </>
                  </SwiperSlide>
                  <SwiperSlide>
                    <>
                      <p className="subtitle">{secondSlide.bottom_title}</p>
                      <ul
                        dangerouslySetInnerHTML={{
                          __html: secondSlide.bottom_text,
                        }}
                        className="list-descriptions"
                      />
                    </>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="footer overlay">
                <SwiperButtons
                  onPrev={slidePrevHandler}
                  onNext={slideNextHandler}
                  sliderLength={2}
                  activeIndex={activeIndex}
                />
              </div>
              <div className="info-link">
                <div className="horizontal-line" />
                <a href="/">{t("tr_book_a_consultation")}</a>
              </div>
            </div>
          </div>
        </section>
      </ScrollableAnchor>
      {isOpen && (
        <div className={style.whatWeDoWrap}>
          <Modal onClose={onClose} title={"Ask a question"}>
            <h3>Ask a question</h3>
          </Modal>
        </div>
      )}
    </>
  );
};
