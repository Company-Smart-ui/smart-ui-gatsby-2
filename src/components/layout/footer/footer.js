import React from 'react';

import {Contact} from "../../../global/contact/contact";
import Logo from '../../../images/smart-ui.svg';
import {Link} from "gatsby";
import Phone from './phone.svg';
import Mail from './mail.svg';
import Img from './pointer.svg';
import Scroll from './scroll.svg';
import { GetInTouch } from './getInTouch/getInTouch';
import * as style from "./footer.module.scss"
import { Modal } from '../modal/modal';
import {useOpen} from "../../../hooks/useOpen";

const footerMenu = [
    {
        text: `<p>Our Contact</p><a href="tel:+380935046334"><img src=${Phone} /> +38 (093) 504 63 34</a><a href="mailto:info@smart-ui.pro"><img src=${Mail} /> info@smart-ui.pro</a>`,
    },
    {
        text: '<p>Our Address</p><p>Kharkov City, Ukraine</p><p>14, Lopatyns`kyi Ln</p>'
    },
    {
        text: '<p>Working hours</p><p>Monday-Friday: 09.00-23.00</p><p>Saturday-Sanday: 11.00-16.00</p>',
    }
]

const ContactUs = ({info}) => {
    return <div className={style.column} dangerouslySetInnerHTML={{__html: info.text}}></div>;
}

const copyright = {
    text: '© 2022 Smart-UI. All Rights Reserved',
}

export const BackToTop = () => {
    const scroll =()=>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    return <button onClick={scroll} className={style.backTo}>
        <span className="lg-only">
              <img   src={Scroll} alt=""/> Back to top
        </span>
      <span className="lg-end">
              <img   src={Img} alt=""/> Back to top
      </span>
    </button>
};
 


export const Footer = ( ) => {
    const {isOpen, onClose, onOpen}= useOpen(false);
            // const {t} = useTranslation();
    // const translatedText = t("Footer", { returnObjects: true })||[];
     return <>
        <button className={["openBtn", (isOpen ? 'disabled' : '')].join(' ') } onClick={onOpen} >request consultation</button>
        {
            isOpen && <Modal onClose={onClose}>
                        <h3>Leave your message</h3>
                    </Modal>
        }
        <GetInTouch />
        <footer className={style.footer}>
         <div className="container">
            <div className={style.row}>
                <div className={style.nav}>
                    <div className={style.logo }>
                        <Link to={'/'}>
                            <img  src={Logo} alt=""/>
                        </Link>
                    </div>
                     <Contact/>
                </div>
                <div className={style.contactUs}>
                    {footerMenu.map((el, i) => <ContactUs info={el} key={i}/>)}
                </div>
            </div>
            <div className={style.bottom}>
                <p>{copyright.text}</p>
                <BackToTop />
            </div>
            
         </div>

     </footer>
     </>
 };
 
