import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {ProjectCard} from "../../../../global/projectCard/projectCard";
import * as style from './worksSwiper.module.scss';

import "swiper/css";
import "swiper/css/free-mode";
import {graphql, useStaticQuery} from "gatsby";

export const WorksSwiper = ({
                                swiperRef,
                                setActiveHandler,
                                setSwiperRef,
                                listOfProjects
                            }) => {

    const dataImg = useStaticQuery(graphql`
      query {
        allStrapiTechnology {
          nodes {
            icon {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            name
          }
        }
      }
    `)

    const cardImages = dataImg?.allStrapiTechnology?.nodes || [];

    const getImage = (imgName) => {
        return cardImages.filter((el) => el.name === imgName);
    }

    let cardsData = [];

    if (Array.isArray(listOfProjects)) {
        cardsData = listOfProjects.map((el) => {
            return {...el, technologyImg: getImage(el.technology.name)}
        })
    }

    console.log('!!!!', cardsData);


    return (
        <div className={style.worksSwiper}>
            <Swiper
                onSwiper={setSwiperRef}
                spaceBetween={0}
                slidesPerView={1}
                className="swiper"
                breakpoints={{
                    375: {
                        slidesPerView: 1,
                        spaceBetween: 0
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 8,
                    },
                    1440: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                    },
                }}
                grabCursor={true}
                speed={800}
                loop={true}
                onSlideChange={() => setActiveHandler(swiperRef?.realIndex)}
            >
                {listOfProjects.map((el) => (
                    <SwiperSlide key={el.id}>
                        <ProjectCard content={el}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
