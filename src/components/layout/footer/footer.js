import React from 'react';
import * as style from "./footer.module.scss"
import {Contact} from "../../../global/contact/contact";


export const Footer = () => {

     return <footer className={style.footer}>
         <div className="container">

             <Contact/>
         </div>

     </footer>
 };
 
