import React from 'react';
import * as style from "./homePage.module.scss"
import {Hero} from "./hero/hero";

export const HomePage = () => {

    return <div className={style.home}>
            <Hero/>
    </div>
};

