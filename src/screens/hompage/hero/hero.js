import React from 'react';
import * as style from "./hero.module.scss"
import {Contact} from "../../../global/contact/contact";



export const Hero = () => {

    return <section className={style.hero}>
       <div className="container">
           <div className="yCircle md-only"/>
           <div className="bCircle "/>
           <div className="noise"/>
           <div className={style.overlay}>
               <h1> We are   <br/> Smart-UI.</h1>
               <p className="subtitle">
                   You deserve easy IT, to make it easy make it SMART 👋
               </p>
               <div className={style.ctaContainer}>

                   <button className="button">Get Started</button>
                   <Contact/>
               </div>

           </div>

       </div>
       </section>
};

 