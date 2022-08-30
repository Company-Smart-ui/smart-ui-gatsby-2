import React from "react";
import { Hero } from "./hero/hero";
import * as style from "./portfolio.module.scss";
import { ClientsReview } from "./clientsReview/clientsReview";
import {ProjectsList} from "./projectsList/projectsList";

export const Portfolio = () => {
    return (
        <div className={style.portfolio}>
            <Hero />
            {/* <ProjectsList/> */}
            <ClientsReview />
        </div>
    )
}