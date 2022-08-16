import React from 'react';
import { SwiperButtons } from "../../../global/swiperButtons/SwiperButtons";
import * as style from './recentWorks.module.scss'

export const RecentWorks = () => {

    return <div className={`${style.recentWorks} vertical-padding`}>
        <div className="container">
            <div className="second-title">Showcase</div>
            <h2 className="h2">Recent Works</h2>
            <h2 className="subtitle">We will help to develop your best project based on your idea.</h2>
        </div>
        <div>Slider</div>
        <SwiperButtons />
        <button className="button">View More Projects</button>
    </div>
};
 