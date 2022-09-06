import React from "react";
import {Hero} from "./hero/hero";
import * as style from "./portfolio.module.scss";
import {ClientsReview} from "./clientsReview/clientsReview";

export const Portfolio = ({serverData}) => {

    return (
        <div className={style.portfolio}>
            <Hero serverData={serverData}/>
            <ClientsReview/>
        </div>
    )
}