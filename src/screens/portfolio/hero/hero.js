import React from 'react';
import * as style from "./hero.module.scss";

export const Hero = () => {
    return (
        <section className={style.hero}>
            <div className="bCircle   "/>
            <div className="noise"/>
            <div className='container'>
            <div className={style.overlay}>
                <h1>Our portfolio</h1>
                <p className="subtitle">
                    We help to develop business, using complex modern effective it solutions, tools of web development and Internet marketing.
                </p>
            </div>
            </div>
        </section>
    )
}