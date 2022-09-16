import React from "react";
import { Link } from "gatsby";
import * as style from "./teamItem.module.scss";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export const TeamItem = (props) =>{
    return (
        <div className={style.item}>
            <div className={style.img}>
            {<GatsbyImage alt={props.name} image={getImage(props.img)}/>}
            </div>
            <div className={style.name}>
                <span className={`${style.subTitle} lg-end`}>{props.nameTitle}</span>
                {props.name}
            </div>
            <div className={style.direction}>
                {props.direction ? (<span className={`${style.subTitle} lg-end`}>{props.directionTitle}</span>) : ''}
                {props.direction}
            </div>
            <div className={style.level}>
                {props.level ? (<span className={`${style.subTitle} lg-end`}>{props.levelTitle}</span>) : ''}
                <div className={style.levelRate}>
                    <span>{props.level}</span> 
                    <span className={style.price}>{props.price && `$${props.price}`}</span>
                </div>
            </div>
            <div className={style.english}>
                {props.english ? (<span className={`${style.subTitle} lg-end`}>{props.englishTitle}</span>) : ''}
                {props.english}
            </div>
            <div className={style.link}>
                <Link to={props.link} className="button">More</Link>
            </div>
        </div>
    )
}