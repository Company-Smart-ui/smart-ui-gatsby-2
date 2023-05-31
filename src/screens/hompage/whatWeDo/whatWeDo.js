import React, { Suspense, useState } from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import * as style from "./whatWeDo.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller } from "swiper";
import { SwiperButtons } from "../../../global/swiperButtons/SwiperButtons";
import { useTranslation } from "react-i18next";
// import { Modal } from "../../../components/layout/modal/modal";
import { useOpen } from "../../../hooks/useOpen";

import "swiper/css";
import { Pagination } from "../../../global/pagination/Pagination";
import { StaticImage } from "gatsby-plugin-image";

const Modal = React.lazy(() =>
  import("../../../components/layout/modal/modal").then((module) => ({
    default: module.Modal,
  }))
);

export const WhatWeDo = () => {
  const { t } = useTranslation();
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { isOpen, onClose, onOpen } = useOpen(false);

  const slidePrevHandler = () => {
    firstSwiper.slidePrev();
    secondSwiper.slidePrev();
  };

  const slideNextHandler = () => {
    firstSwiper.slideNext();
    secondSwiper.slideNext();
  };

  const template = t("whatwedo_slider", { returnObjects: true });

  const firstSlide = template[0];
  const secondSlide = template[1];

  return (
    <>
      <ScrollableAnchor id={"whatWeDo"}>
        <section className={`${style.whatWeDo} vertical-padding`}>
          <div className="bgWrapper">
            <StaticImage
              src="./line_background_grid.png"
              alt={""}
              style={{ position: "absolute", top: 0, height: "100%" }}
            />
          </div>
          <div className="container">
            <div className="grid">
              <div className="description-grid">
                <div className="gCircle" />
                <div className="gCircle bottom" />
                <div className="noise" />
                <h2 className="h2 overlay">{t("whatwedo_title")}</h2>
                <Swiper
                  modules={[Controller]}
                  onSwiper={setFirstSwiper}
                  controller={{ control: secondSwiper }}
                  slidesPerView={1}
                  className="mySwiper"
                  allowTouchMove={true}
                  onSlideChange={() => setActiveIndex(firstSwiper.realIndex)}
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
                  modules={[Controller]}
                  onSwiper={setSecondSwiper}
                  controller={{ control: firstSwiper }}
                  slidesPerView={1}
                  allowTouchMove={true}
                  className="mySwiper2"
                  onSlideChange={() => setActiveIndex(secondSwiper.realIndex)}
                >
                  <SwiperSlide>
                    <>
                      <p className="subtitle">{firstSlide.bottom_title}</p>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: firstSlide.bottom_text,
                        }}
                      />
                    </>
                  </SwiperSlide>
                  <SwiperSlide>
                    <>
                      <p className="subtitle">{secondSlide.bottom_title}</p>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: secondSlide.bottom_text,
                        }}
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
            </div>
          </div>
        </section>
      </ScrollableAnchor>
      {isOpen && (
        <div>
          <Suspense>
            <Modal onClose={onClose} title={"Ask a question"}>
              <h3>Ask a question</h3>
            </Modal>
          </Suspense>
        </div>
      )}
    </>
  );
};
