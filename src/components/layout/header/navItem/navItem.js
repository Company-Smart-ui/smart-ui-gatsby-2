import React from 'react';
import * as style from './navItem.module.scss'
import {Link} from "gatsby-plugin-react-i18next";

export const NavItem = ({active , text,link , id , currentLng,onClose}) => {

    return <li style={{transitionDelay:(id+1)/5+"s"}}  className={" navItemAnimation " + style.navItem}>
                <Link onClick={onClose} language={currentLng} className={ active?"active":""} to={link}> <span>{text} </span> </Link>
    </li>
};
 