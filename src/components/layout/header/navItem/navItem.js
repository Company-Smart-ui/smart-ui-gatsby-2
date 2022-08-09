import React from 'react';
import * as style from './navItem.module.scss'
import {Link} from "gatsby";

export const NavItem = ({active , text,link , id}) => {

    return <li style={{transitionDelay:(id+1)/5+"s"}}  className={" navItemAnimation " + style.navItem}>
                <Link className={ active?"active":""} to={link}> <span>{text} </span> </Link>
    </li>
};
 