import React from 'react';
import * as style from "./getInTouch.module.scss";
import {StaticImage} from "gatsby-plugin-image";

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
                <div className={style.field}>
                    <input value='' placeholder={defaultData.firstName} type='text'/>
                    <fieldset>
                        <legend>{defaultData.firstName}</legend>
                    </fieldset>
                </div>

                <div className={style.field}>
                    <input value='' placeholder={defaultData.email} type='email'/>
                    <fieldset>
                        <legend>{defaultData.email}</legend>
                    </fieldset>
                </div>

                <div className={style.field}>
                    <textarea value='' placeholder={defaultData.text}></textarea>
                    <fieldset>
                        <legend>{defaultData.text}</legend>
                    </fieldset>
                </div>

                <button className='button' type="submit">{defaultData.button}</button>
            </form>
            <div className={style.img}>
            <StaticImage className={'sm-only'} objectFit={'contain'} placeholder={'tracedSVG'} src={"./mobile.png"} alt={""}/>
            <StaticImage className={'md-only'} objectFit={'contain'} placeholder={'tracedSVG'} src={"./desktop.png"} alt={""}/>
            </div>
        </div>
        
    </div>
}

