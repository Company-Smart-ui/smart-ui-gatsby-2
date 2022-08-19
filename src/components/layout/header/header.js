import React, {useEffect} from 'react';
import * as style from "./header.module.scss"
import {Burger} from "./burger/burger";
import {useOpen} from "../../../hooks/useOpen";
import Logo from '../../../images/smart-ui.svg';
import {NavItem} from "./navItem/navItem";
import {StaticImage} from "gatsby-plugin-image";
import {Link} from "gatsby";
import {Messenger} from "../../../global/messengers/messengers.js";

export const NAVIGATION = {
    home: {text:'Home' , link:'/'},
    team: {text:'Our team', link:'/team'},
    portfolio:{text:'Portfolio', link:'/portfolio'}
}

export const Header = ({path}) => {
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
                <Messenger />
            </nav>

            <StaticImage className={'menuImg sm-only'} objectFit={'contain'} width={500} placeholder={'tracedSVG'} src={"./menuImg.jpg"} alt={""}/>
        </div>

    </header>
};

