import React from 'react';
import { Modal } from '../../../components/layout/modal/modal';
import * as style from "./hero.module.scss";

export const Hero = () => {
    return (
        <section className={style.hero}>
            <div className="bCircle   "/>
            <div className="noise"/>
            <div className='container'>
            <div className={style.overlay}>
                <h1><span className="yCircle md-only">Our portfolio</span></h1>
                <p className="subtitle">
                    We help to develop business, using complex modern effective it solutions, tools of web development and Internet marketing.
                </p>
                <Modal />
            </div>
            </div>
        </section>
    )
}