import React, {useEffect} from 'react';
import * as style from "./header.module.scss"
import {Burger} from "./burger/burger";
import {useOpen} from "../../../hooks/useOpen";
import Logo from '../../../images/smart-ui.svg'
import Telegram from './telegram.svg'
import Whatsapp from './whatsapp.svg'
import {NavItem} from "./navItem/navItem";
import {StaticImage} from "gatsby-plugin-image";
import {Link} from "gatsby";
import {useI18next} from "gatsby-plugin-react-i18next";

export const NAVIGATION = {
    home: {text:'Home' , link:'/'},
    team: {text:'Our team', link:'/team'},
    portfolio:{text:'Portfolio', link:'/portfolio'}
}

const messengers =[
        {
        img: Whatsapp,
        link:'https://wa.me/+34634839752',
        alt:'Whatsapp'
    },
    {
        img: Telegram,
        link:'https://t.me/alexgashkov1',
        alt:'Telegram'
    }
]

const Messenger = ({info})=>{
    return <li style={{transitionDelay:(Object.entries(NAVIGATION).length+1)/5+"s"}} >   <a rel="noreferrer"  title={info.alt} target={"_blank"} href={info.link}> <img src={info.img} alt={info.alt}/>   </a>  </li>
}

export const Header = ({path}) => {

    // console.log({languages, changeLanguage})
    const {isOpen:scrolled ,onOpen:onScrolled , onClose:offScrolled} =useOpen();
    useEffect(()=>{
        const scrollHandler = ()=>{
            if(window.scrollY>100){
                onScrolled()
            } else{
                offScrolled()
            }
        }
        window.addEventListener('scroll', scrollHandler );
        return ()=>window.removeEventListener('scroll',scrollHandler)
    },[onScrolled, offScrolled])
    const {isOpen ,onToggle} =useOpen();
    return <header className={[scrolled?style.scrolled:" ",  style.header ,   isOpen? style.open: " "].join(' ')}>
            <Burger {...{isOpen, onToggle}} />
        <div className={style.logo }>
            <Link to={'/'}    >
                <img  src={Logo} alt=""/>
            </Link>

        </div>

        <div className={style.menu}>
            <nav className={'nav'}>
                <ul   className={'navList'}>
                    {Object.entries(NAVIGATION).map((item ,i)=>{
                        const data = item[1];
                        return <NavItem  {...data } active={path===data.link} key={i} id={i}/>
                    })}
                </ul>
                <ul className={style.messengers}>
                    {messengers.map((m , i )=>   <Messenger info={m} key={i}/>)}
                </ul>
            </nav>

            <StaticImage className={'menuImg  '} objectFit={'contain'} width={500} placeholder={'tracedSVG'} src={"./menuImg.jpg"} alt={""}/>
        </div>

    </header>
};

