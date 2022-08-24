import React from 'react';
import { Modal } from '../../../components/layout/modal/modal';
import * as style from "./hero.module.scss";
import Speed from './speed.svg';
import {Link} from "gatsby";

const modalText = {
    title: 'Contact the lead developer',
    subtitle: 'Please leave one of your contacts, lead developer will contact you.',
    input: 'Contact the lead developer',
    textarea: 'Your message*',
    resetBtn: 'No, cancel',
    submit: 'Yes, confirm',
}

export const Hero = () => {
    return (
        <section className={style.hero}>
            <div className="bCircle"/>
            <div className="noise"/>
            <div className='container'>
            <div className="yCircle left md-only"/>
            <div className={style.overlay}>
                <h1>Our portfolio</h1>
                <p className="subtitle">
                    We help to develop business, using complex modern effective it solutions, tools of web development and Internet marketing.
                </p>
                <div className={style.speed}>
                    <div className={style.top}>
                        <img src={Speed} alt="speed logo"/>
                        <div className={style.text}>
                            <p>PageSpeed Insights</p>
                            <p>Learn more about website performance</p>
                        </div> 
                        <Link to={'#'}>
                            i
                        </Link>
                    </div>
                    <div className={style.main}>
                        <div className={style.index}>98</div>
                        <p>
                            <strong>Efficiency</strong>
                            Website optimization check
                        </p>
                    </div>
                </div>
                <Modal text={'Contact the lead developer'} dataText={modalText} isShow={false} />
            </div>
            </div>
        </section>
    )
}