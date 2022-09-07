import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "../card/Card";
import * as style from "./teamSwiper.module.scss";
import { graphql, useStaticQuery } from "gatsby";

import "swiper/css";
import "swiper/css/free-mode";

export const TeamSwiper = ({ activeIndexHandler, setSwiperRef }) => {

  const data = useStaticQuery(graphql`
  query {
    allStrapiTeam {
      nodes {
        linkedin
        name
        position
        telegram
        show_contact
        preview_photo {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
  `)

  const employees = Array.isArray(data.allStrapiTeam.nodes) ? data.allStrapiTeam.nodes : [];

  return (
    <div className={style.teamSwiper}>
      <Swiper
        onSwiper={setSwiperRef}
        spaceBetween={0}
        initialSlide={1}
        slidesPerView={0}
        freeMode={true}
        className="mySwiper"
        breakpoints={{
          375: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          576: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 0,
            allowTouchMove: false,
            grabCursor: false,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 0,
            allowTouchMove: false,
            grabCursor: false,
          },
        }}
        grabCursor={true}
        speed={800}
        loop={false}
        onSlideChange={activeIndexHandler}
      >
        {employees.map((el, i) => (
            <SwiperSlide key={i}>
              <Card content={el} key={i}/>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};
