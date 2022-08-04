import React from 'react';
import * as style from "./header.module.scss"
import {Burger} from "./burger/burger";
import {useOpen} from "../../../hooks/useOpen";
import Logo from './smart-ui.svg'
import Telegram from './telegram.svg'
import Whatsapp from './whatsapp.svg'
import {NavItem} from "./navItem/navItem";
import {StaticImage} from "gatsby-plugin-image";

export const NAVIGATION = {
    home: {text:'Home' , link:'/'},
    team: {text:'Our team', link:'/team'},
    portfolio:{text:'Portfolio', link:'/portfolio'}
}

const messengers =[
    {
        img: Telegram,
        link:'https://t.me/alexgashkov1',
        alt:'Telegram'
    } ,   {
        img: Whatsapp,
        link:'https://wa.me/+34634839752',
        alt:'Whatsapp'
    }
]

const Messenger = ({info})=>{
    return <li style={{transitionDelay:(Object.entries(NAVIGATION).length+1)/5+"s"}} >   <a rel="noreferrer"  title={info.alt} target={"_blank"} href={info.link}> <img src={info.img} alt={info.alt}/>   </a>  </li>
}

export const Header = ({path}) => {
    const {isOpen ,onToggle} =useOpen();
    return <header className={[style.header ,   isOpen? style.open: " "].join(' ')}>
            <Burger {...{isOpen, onToggle}} />
        <div className={style.logo }>
            <img  src={Logo} alt=""/>
        </div>

        <div className={style.menu}>
            <nav className={'nav'}>
                <ul style={{maxHeight:Object.entries(NAVIGATION).length*150}} className={'navList'}>
                    {Object.entries(NAVIGATION).map((item ,i)=>{
                        const data = item[1];
                        return <NavItem  {...data } active={path===data.link} key={i} id={i}/>
                    })}
                </ul>
                <ul className={style.messengers}>
                    {messengers.map((m , i )=>   <Messenger info={m} key={i}/>)}
                </ul>
            </nav>

            <StaticImage className={'menuImg sm-only'} objectFit={'contain'} width={300} placeholder={'tracedSVG'} src={"./menuImg.jpg"} alt={""}/>
        </div>

    </header>
};

