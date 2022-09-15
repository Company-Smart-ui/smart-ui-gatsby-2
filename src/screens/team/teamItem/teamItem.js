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
            <div>{props.name}</div>
            <div>{props.direction}</div>
            <div>{props.level}</div>
            <div>{props.price && `$${props.price}`}</div>
            <div>{props.english}</div>
            <Link to={props.link} className={`button ${style.link}`}>More</Link>
        </div>
    )
}