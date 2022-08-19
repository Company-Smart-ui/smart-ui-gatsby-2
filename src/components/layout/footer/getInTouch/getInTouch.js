import React from 'react';
import * as style from "./getInTouch.module.scss";
import {StaticImage} from "gatsby-plugin-image";
import { Input } from '../../../../global/input/input';
import { Textarea } from '../../../../global/textarea/textarea';

const formTitle = {
    text: 'Lets Get In Touch',
}

const defaultData = {
    firstName: 'First name:',
    email: 'E-mail adsress:',
    text: 'Message:',
    button: 'Submit'
}

export const GetInTouch = () => {
    
    return <div className={style.wrapper}>
        <div className='noise'></div>
        <div className='container'>
           <h2 className='h2'>{formTitle.text}</h2>
            <form className={style.form} >
                <Input placeholder={defaultData.firstName} />

                <Input placeholder={defaultData.email} type={'email'}/>

                <Textarea placeholder={defaultData.text} />

                <button className='button' type="submit">{defaultData.button}</button>
            </form>
            <div className={style.img}>
            <StaticImage className={'sm-only'} objectFit={'contain'} placeholder={'none'} src={"./mobile.png"} alt={""}/>
            <StaticImage className={'md-only'} objectFit={'contain'} width={1200} placeholder={'none'} src={"./desktop.png"} alt={""}/>
            </div>
        </div>
        
    </div>
}

