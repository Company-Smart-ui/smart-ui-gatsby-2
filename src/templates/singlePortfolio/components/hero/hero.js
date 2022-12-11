import React from "react";
import * as style from "./hero.module.scss";
import desctopDevice from "../../desctop.png";
import mobileDevice from "../../mobile.png";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export const HeroPortfolio = (props) => {
  console.log(props)
  return (
    <>
    {props.imgMob &&
      props.imgMob.map((i, key) => {
        return (
          i.mobile_img && (
            <div key={key} className={style.mobileWrapp}>
              <div className={style.mobileImg}>
                {i.img.map((t, key) => (
                  <GatsbyImage
                    key={key}
                    alt={t.alternativeText}
                    image={getImage(
                      t?.localFile.childImageSharp.gatsbyImageData
                    )}
                  />
                ))}
              </div>
              <div className={style.mobileDevice}>
                <img src={mobileDevice} alt={props.name && props.name} />
              </div>
            </div>
          )
        );
      })}
      <div className={style.heroImg}>
        <div className={style.heroImgDevice}>
          <img src={desctopDevice} alt={props.name && props.name} />
        </div>
        <div className={style.heroImgWrapp}>
          <GatsbyImage
            alt={props.name && props.name}
            image={getImage(props.imgDesc)}
          />
        </div>
      </div>
    </>
  );
};
