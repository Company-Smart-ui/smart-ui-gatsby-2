import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "../card/Card";
import * as style from "./cardsSwiper.module.scss";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/free-mode";
import { graphql, useStaticQuery } from "gatsby";

export const CardsSwiper = ({
  setActiveHandler,
  setSwiperRef,
  activeIndex,
}) => {
  const { t } = useTranslation();

  const dataImg = useStaticQuery(graphql`
    query {
      img: allStrapiComponentCardsCardTools {
        edges {
          node {
            Img {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `);

  const cardImages = dataImg?.img?.edges || [];

  const translatedText = t("tools_cards", { returnObjects: true }) || [];
  let cardData = [];
  if (Array.isArray(translatedText)) {
    cardData = translatedText.map((text, i) => {
      return { ...text, img: cardImages[i]?.node?.Img };
    });
  }

  return (
    <div className={style.cardsSwiper}>
      <Swiper
        onSwiper={setSwiperRef}
        spaceBetween={8}
        slidesPerView={1}
        className="swiper"
        breakpoints={{
          375: {
            slidesPerView: 1,
            spaceBetween: 8,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        }}
        grabCursor={true}
        speed={400}
        loop={false}
        onSlideChange={setActiveHandler}
      >
        {cardData.map((el, index) => (
          <SwiperSlide key={el.id}>
            <Card content={el} activeIndex={activeIndex} indexEl={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
