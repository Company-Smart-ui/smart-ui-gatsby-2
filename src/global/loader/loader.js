import React from "react";
import * as style from "./loader.module.scss";
import Icon from "./loader.svg";

export const Loader = ({inside, className = ""}) => {
    return (
        <div className={[!inside ? style.loader : style.inside, className].join(" ")}>
            <img lazy src={Icon} alt=""/>
        </div>
    );
};
