import React from 'react';
import * as style from "./header.module.scss"
import {Burger} from "./burger/burger";
import {useOpen} from "../../../hooks/useOpen";
import Logo from './smart-ui.svg'
import Telegram from './telegram.svg'
import Whatsapp from './whatsapp.svg'
export const NAVIGATION = {
    home:'Home',
    team:'Our team',
    portfolio:'Portfolio'
}

const messangers =[
    {
        img: {Telegram},
        link:'Telegram'
    }
]

export const Header = () => {
    const {isOpen ,onToggle} =useOpen();
    return <header className={style.header}>
            <Burger {...{isOpen, onToggle}} />
            <img className={style.logo} src={Logo} alt=""/>
        <nav>

        </nav>
    </header>
};

