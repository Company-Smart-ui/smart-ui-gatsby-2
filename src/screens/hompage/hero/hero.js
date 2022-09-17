import React, {useEffect, useState} from 'react';
import * as style from "./hero.module.scss"
import {Contact} from "../../../global/contact/contact";
import {StaticImage} from "gatsby-plugin-image";
import {SwipeTo} from "../../../global/swipeTo/swipeTo";
import {useTranslation} from "react-i18next";
import {Modal} from "../../../components/layout/modal/modal";
import {useOpen} from "../../../hooks/useOpen";

export const Hero = () => {
    const {t} = useTranslation();
    const {isOpen, onClose, onOpen}= useOpen(false);
    const [transformScroll, setTransformScroll] = useState(1);
    useEffect(() => {
        const layout = window
        const scrollHandler = () => {
            if(layout.scrollY<400){
                setTransformScroll(Math.round(-layout.scrollY / 2))
            }else {
                setTransformScroll(Math.round(-400 / 2))
            }
        }
        layout.addEventListener('scroll', scrollHandler);
        return () => layout.removeEventListener('scroll', scrollHandler)
    }, [])
    const parallaxStyle = {transform: 'translateY(' + transformScroll + "px)"}


    return <>
        <section  className={style.hero}>
        <div className="container  hero-3d">
            <div className="yCircle left md-only"/>
            <div style={{top:transformScroll/5 ,bottom:transformScroll/5}}  className="bCircle   "/>
            <figure className="deskImg md-only  ">
                <div style={{top:transformScroll/3}} className="yCircle right "/>
                <StaticImage style={parallaxStyle} placeholder={'none'} height={480} alt={''} src={'./desktop.png'}/>
            </figure>
            <div className="noise"/>

            <div className={style.overlay}>
                <h1  >  <span  className="yCircle  md-only "/> <span dangerouslySetInnerHTML={{__html:t('h1')}}/></h1>
                <p dangerouslySetInnerHTML={{__html:t('hero_subtitle')}}  className="subtitle" />
                <div  className={style.ctaContainer}>
                    <button className={["button", (isOpen ? 'disabledBtn' : '')].join(' ') } onClick={onOpen} > Get Started </button>
                    <Contact/>
                </div>
                  <SwipeTo/>
            </div>

        </div>
    </section>
    {
        isOpen && 
        <div className={style.heroWrap}>
            <Modal onClose={onClose} title={'Get started'}>
                <h3>Get started</h3>
            </Modal>
        </div>
    }
    </>
};

 