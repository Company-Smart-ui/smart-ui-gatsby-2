import React, {useEffect, useState} from 'react';
import * as style from "./hero.module.scss"
import {Contact} from "../../../global/contact/contact";
import {StaticImage} from "gatsby-plugin-image";
import {SwipeTo} from "../../../global/swipeTo/swipeTo";


export const Hero = () => {
    const [transformScroll, setTransformScroll] = useState(1);
    const [buttonMove, setButtonMove] = useState("0px, 0px");
    const moveHandler = (e) => {
        const x = Math.round((e.pageX - (window.innerWidth / 2)) / 100) + "px";
        const y = Math.round((e.pageY - (window.innerHeight / 2)) / 100) + "px";
        setButtonMove(x + " , " + y)
    }

    useEffect(() => {
        const layout = window
        const scrollHandler = () => {
            if(layout.scrollY<100){

                setTransformScroll(Math.round(-layout.scrollY / 5))
            }

        }
        layout.addEventListener('scroll', scrollHandler);
        return () => layout.removeEventListener('scroll', scrollHandler)
    }, [])
    const parallaxStyle = {transform: 'translateY(' + transformScroll + "px)"}
    const parallaxStyleH1 = {transform: 'translateY(' + -transformScroll + "px)"}

    return <section onMouseMove={moveHandler} className={style.hero}>
        <div className="container  hero-3d">
            <div className="yCircle left md-only"/>
            <div  className="bCircle   "/>
            <figure className="deskImg md-only  ">
                <div className="yCircle right "/>
                <StaticImage style={parallaxStyle} placeholder={'none'} height={400} alt={''} src={'./desktop.png'}/>
            </figure>
            <div className="noise"/>

            <div className={style.overlay}>
                <h1 style={parallaxStyleH1} >  <span  className="yCircle  md-only "/>  We are <br/> Smart-UI</h1>
                <p  className="subtitle">
                    You deserve easy IT, to make it easy make <span className="nowrap"> it SMART 👋 </span>
                </p>
                <div  className={style.ctaContainer}>
                    <button className="button"><span
                        style={{transform: "translate(" + buttonMove + " )", transition: '0.2s'}}> Get Started </span>
                    </button>
                    <Contact/>
                </div>
                  <SwipeTo/>
            </div>

        </div>
    </section>
};

 