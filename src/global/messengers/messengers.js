import React from 'react';
import * as style from "./messengers.module.scss";
import {MESSANGERS} from "../data";
import {NAVIGATION} from "../../components/layout/header/header.js";


 const Single = ({info})=>{
    return <li style={{transitionDelay:(Object.entries(NAVIGATION).length+1)/5+"s"}} >   <a rel="noreferrer"  title={info.alt} target={"_blank"} href={info.link}> <img src={info.img} alt={info.alt}/>   </a>  </li>
}

export const Messenger = () => {
    return <ul className={style.messengers + " messengers"}>
    {MESSANGERS.map((m , i )=>   <Single info={m} key={i}/>)}
    </ul>
}
