import React from 'react';
import * as style from "./homePage.module.scss"
import {Hero} from "./hero/hero";
import {Strategy} from "./strategy/strategy";

export const HomePage = () => {

    return <div className={style.home}>
            <Hero/>
        <Strategy/>
    </div>
};

