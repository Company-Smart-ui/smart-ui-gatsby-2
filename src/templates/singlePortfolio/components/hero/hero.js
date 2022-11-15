import React, { useEffect, useState } from "react";
import * as style from "./hero.module.scss";
import desctopDevice from "../../desctop.png";
import mobileDevice from "../../mobile.png";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useWindowResize } from "../../../../hooks/useWindowResize";

export const Hero = (props) => {
  const size = useWindowResize();
  const [isMobile, setMobile] = useState();

  useEffect(() => {
    if (size >= 768) {
      setMobile(false);
    } else {
      setMobile(true);
    }
  }, [size]);
  return isMobile ? (
    props.imgMob &&
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
                <img
                  loading="lazy"
                  src={mobileDevice}
                  alt={props.name && props.name}
                />
              </div>
            </div>
          )
        );
      })
  ) : (
    <div className={style.heroImg}>
      <div className={style.heroImgDevice}>
        <img
          loading="lazy"
          src={desctopDevice}
          alt={props.name && props.name}
        />
      </div>
      <div className={style.heroImgWrapp}>
        <GatsbyImage
          alt={props.name && props.name}
          image={getImage(props.imgDesc)}
        />
      </div>
    </div>
  );
};
