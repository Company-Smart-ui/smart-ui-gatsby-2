import React, {useEffect, useState} from "react";
import * as style from "./ourAdvantages.module.scss";
import {SwiperButtons} from "../../../global/swiperButtons/SwiperButtons";
import {AdvantagesSwiper} from "./swiper/AdvantagesSwiper";
import {Pagination} from "../../../global/pagination/Pagination";
import {useTranslation} from "react-i18next";

export const OurAdvantages = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slidePrevHandler = () => swiperRef.slidePrev();
  const slideNextHandler = () => swiperRef.slideNext();

  useEffect(() => {
    setActiveIndex(0);
  }, []);

  const {t} = useTranslation();

  const cardsList = t("advantages_cards", {returnObjects: true});

  return (
      <section className={`${style.ourAdvantages} vertical-padding`}>
        <div className="noise"/>
        <div className="container">
          <div className="clock-mobile"/>
          <div className="illustration-tablet"/>
          <div className="upperBlock">
            <div className="title-block">
              <div className="bCircle md-only"/>
              <div className="gCircle"/>
              <h2 className="h2 overlay">{t("advantages_title")}</h2>
              <div className="subtitle">{t("advantages_text")}</div>
            </div>
            <div className="pagination-wrapper">
              <Pagination
                  activeIdx={activeIndex}
                  sliderLength={cardsList.length}
                  whiteTheme
              />
            </div>
            <AdvantagesSwiper
                swiperRef={swiperRef}
                setSwiperRef={setSwiperRef}
                setActiveIndex={setActiveIndex}
                cardsList={cardsList}
            />
          </div>
          <div className="footer-buttons overlay">
            <SwiperButtons
                onPrev={slidePrevHandler}
                onNext={slideNextHandler}
                sliderLength={cardsList.length}
                activeIndex={activeIndex}
            />
          </div>
        </div>
      </section>
  );
};
