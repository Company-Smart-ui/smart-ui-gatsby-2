import * as React from "react";
import * as style from "./hero.module.scss";
import { GatsbyImage } from "gatsby-plugin-image";

export const Hero = (props) => {
  return (
    <div className={style.hero}>
      <div className={style.photo}>
        {props?.img && <GatsbyImage alt={props?.name} image={props?.img} />}

        <button className={`button ${style.buttonChat}`}>{props?.chat}</button>
      </div>
      <div className={style.description}>
        <div className={style.wrapName}>
          <h1>
            <span>{props.name?.split(" ")[0]} </span>
            {props.name?.split(" ")[1]}
          </h1>
          <p className={style.job}>{props?.direction}</p>
        </div>
        {props?.description && (
          <div
            className={style.content}
            dangerouslySetInnerHTML={{ __html: props?.description }}
          />
        )}
      </div>
    </div>
  );
};
