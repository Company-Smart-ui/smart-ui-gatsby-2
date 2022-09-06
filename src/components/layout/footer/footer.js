import React from 'react';

import {Contact} from "../../../global/contact/contact";
import Logo from '../../../images/smart-ui.svg';
import {Link} from "gatsby";
import Img from './pointer.svg';
import Scroll from './scroll.svg';
import { GetInTouch } from './getInTouch/getInTouch';
import * as style from "./footer.module.scss"
import { Modal } from '../modal/modal';
import {useOpen} from "../../../hooks/useOpen";
import {useTranslation} from "react-i18next";

const ContactUs = ({info}) => {
    return <div className={style.column}>
        <p dangerouslySetInnerHTML={{__html: info.title}}></p>
        <div dangerouslySetInnerHTML={{__html: info.text}}></div>
    </div>;
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
            <img src={Scroll} alt="back to top"/> Back to top
        </span>
      <span className="lg-end">
            <img src={Img} alt="back to top"/> Back to top
      </span>
    </button>
};
 


export const Footer = ( ) => {
    const {isOpen, onClose, onOpen}= useOpen(false);
            const {t} = useTranslation();
            const translatedText = t("Footer", { returnObjects: true })||[];
            const dataText = Array.isArray(translatedText) ? translatedText.filter(d=>d?.__component==="footer.blocks")[0].block : '';
     return <>
        <button className={["openBtn", (isOpen ? 'disabledBtn' : '')].join(' ') } onClick={onOpen} >request consultation</button>
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
                            <img  src={Logo} alt="Logo"/>
                        </Link>
                    </div>
                     <Contact/>
                </div>
                <div className={style.contactUs}>
                    { (typeof dataText === 'object') && (dataText.map((el, i) => <ContactUs info={el} key={i}/>))}
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
 
