import React, {useContext, useEffect} from 'react';
import * as style from "./header.module.scss"
import {Burger} from "./burger/burger";
import {useOpen} from "../../../hooks/useOpen";
import Logo from '../../../images/smart-ui.svg';
import {NavItem} from "./navItem/navItem";
import {StaticImage} from "gatsby-plugin-image";
import {MESSENGERS} from "../../../global/data";

import {Messenger} from "../../../global/messengers/messengers.js";

import {I18nextContext, Link} from 'gatsby-plugin-react-i18next';
import {LangSwitch} from "../langSwitch/langSwitch";
import {useNoScroll} from "../../../hooks/useNoScroll";
import {useTranslation} from "react-i18next";
export const NAVIGATION = {
    home: {text: 'Home'  , link:'/'},
    team: {text:'Our team', link:'/team/'},
    portfolio:{text:'Portfolio', link:'/portfolio/'}
}
export const Header = ({path}) => {
    const {language:currentLng} =  useContext(I18nextContext);
    const {isOpen:scrolled ,onOpen:onScrolled , onClose:offScrolled} =useOpen();
    const {t} = useTranslation();
    const dataHeader = t("Header", { returnObjects: true })||[];


    const translatedNavigation = {}
        try{
            const dataNav = dataHeader.filter(d=>d?.__component==="header.header-menu")[0]
            Object.entries(NAVIGATION).forEach(nav=>{
                const field = nav[0]
                translatedNavigation[field]= {text:dataNav[field] , link:nav[1].link};
            })
        } catch (e){
            console.log(e)
        }

    useEffect(()=>{
        const scrollHandler = ()=>{
            if(window.scrollY>1){
                onScrolled()
            } else{
                offScrolled()
            }
        }
        window.addEventListener('scroll', scrollHandler );
        return ()=>window.removeEventListener('scroll',scrollHandler)
    },[onScrolled, offScrolled])
    const {isOpen ,onToggle ,onClose} =useOpen();
    useNoScroll(isOpen)
    return <header className={[scrolled?style.scrolled:" ",  style.header ,   isOpen? style.open: " "].join(' ')}>
            <Burger {...{isOpen, onToggle}} />
        <div className={style.logo }>
            <Link to={NAVIGATION.home.link}  language={currentLng}   >
                <img  src={Logo} alt="logo"/>
            </Link>

        </div>

        <div className={style.menu}>
            <nav className={'nav'}>
                <ul   className={'navList'}>
                    {Object.entries(translatedNavigation).map((item ,i)=>{
                        const data = item[1];
                        return <NavItem   {...data } currentLng={currentLng} onClose={onClose} active={path===data.link.replace(/\//g,'')} key={i} id={i}/>
                    })}
                </ul>
                <LangSwitch delay={ (Object.entries(NAVIGATION).length+1)/5 }  />
                <Messenger data={MESSENGERS} />
            </nav>

            <StaticImage className={'menuImg  '} objectFit={'contain'} width={500} placeholder={'tracedSVG'} src={"./menuImg.jpg"} alt={""}/>
        </div>

    </header>
};

