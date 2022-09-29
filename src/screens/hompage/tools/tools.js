import React, { useState } from "react";
import * as style from "./tools.module.scss";
import { Pagination } from "../../../global/pagination/Pagination";
import { CardsSwiper } from "./swiper/CardsSwiper";
import { SwiperButtons } from "../../../global/swiperButtons/SwiperButtons";

import { SwipeTo } from "../../../global/swipeTo/swipeTo";
import { useTranslation } from "react-i18next";
import { Modal } from "../../../components/layout/modal/modal";
import { useOpen } from "../../../hooks/useOpen";

export const Tools = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperRef, setSwiperRef] = useState(null);

  const slidePrevHandler = () => swiperRef.slidePrev();
  const slideNextHandler = () => swiperRef.slideNext();

  const setActiveHandler = () => setActiveIndex(swiperRef?.realIndex);

  const { isOpen, onClose, onOpen } = useOpen(false);

  const { t } = useTranslation();

  const sliderLength = t("tools_cards", { returnObjects: true }).length;

  return (
    <>
      <div className={`${style.tools} vertical-padding`}>
        <div className="yCircle" />
        <div className="noise" />
        <div className="overlay container">
          <div className="container-grid">
            <div className="title-container">
              <div className="title-content">
                <p className="second-title">{t("tools_small_title")}</p>
                <h2 className="h2 title"> {t("tools_big_title")}</h2>
                <p className="subtitle description">{t("tools_text")}</p>
                <button
                  className={["button", isOpen ? "disabledBtn" : ""].join(" ")}
                  onClick={onOpen}
                >
                  {" "}
                  {t("tools_btn")}
                </button>
                <div className="swiperTips">
                  <SwipeTo toLink={'#strategy'}/>
                </div>
              </div>
            </div>
            <div className="vertical-block overlay">
              <div className="pagination-wrapper">
                <Pagination
                  activeIdx={activeIndex}
                  sliderLength={sliderLength}
                />
              </div>
              <CardsSwiper
                setActiveHandler={setActiveHandler}
                setSwiperRef={setSwiperRef}
                activeIndex={activeIndex}
              />
            </div>
            <div className="buttons-block">
              <SwiperButtons
                onPrev={slidePrevHandler}
                onNext={slideNextHandler}
                sliderLength={sliderLength}
                activeIndex={activeIndex}
                fill
              />
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className={style.toolsWrap}>
          <Modal onClose={onClose} title={`${t("tools_btn")}`}>
            <h3>{t("tools_btn")}</h3>
          </Modal>
        </div>
      )}
    </>
  );
};
