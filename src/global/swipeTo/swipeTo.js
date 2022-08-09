import React from 'react';
import * as style from './swipeTo.module.scss'
import Img from './pointer.svg'

export const SwipeTo = () => {
    const scroll =()=>{
        window.scrollBy({
            top: 500,
            left: 0,
            behavior: 'smooth'
        });
    }
    return <button onClick={scroll} className={style.swipeTo}>
        <img   src={Img} alt=""/>    Swipe to explore
    </button>
};
 