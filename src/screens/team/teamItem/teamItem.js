import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as style from "./teamItem.module.scss";

export const TeamItem = (props) => {
  const makeUrl =
    typeof props.name === "string"
      ? props.name.replace(/[ ,./!@#$%^&*(?)=:;'"]/g, "_").toLowerCase()
      : "";
  return (
    <div className={style.item}>
      <div className={style.img}>
        {
          <GatsbyImage
            alt={props.name}
            image={getImage(props.img)}
            placeholderStyle={{
              backgroundColor: "rgba(0, 0, 0, 0)",
            }}
          />
        }
      </div>
      <div className={style.centerRow}>
        <div>
          <span className={`${style.subTitle} lg-end`}>{props.nameTitle}</span>
          {props.name}
        </div>
        <div>
          {props.direction ? (
            <span className={`${style.subTitle} lg-end`}>
              {props.directionTitle}
            </span>
          ) : (
            ""
          )}
          {props.direction}
        </div>
        <div>
          {props.level || props.price ? (
            <span className={`${style.subTitle} lg-end`}>
              {props.levelTitle}
            </span>
          ) : (
            ""
          )}
          <div className={style.levelRate}>
            <span>{props.level}</span>
            <span className={style.price}>
              {props.price && `$${props.price}`}
            </span>
          </div>
        </div>
        <div>
          {props.english ? (
            <span className={`${style.subTitle} lg-end`}>
              {props.englishTitle}
            </span>
          ) : (
            ""
          )}
          {props.english}
        </div>
      </div>
      <div className={style.link}>
        <Link to={`/team/${makeUrl}`} className="button">
          More
        </Link>
      </div>
    </div>
  );
};
