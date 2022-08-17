import React from 'react';
import * as style from "./modal.module.scss";
import {Messenger} from "../../../global/messengers/messengers.js";

export const Modal = () => {
    return <div className={style.wrapper}>
        <button className={style.btn + " button"}>return message</button>
        <div className={style.modal}>
            <div className={style.header}>
                <h3>Leave your message</h3>
                <div  className={'md-only'}><Messenger /></div>
                
            </div>
            <form className={style.form}>
                <p>Please leave one of your contacts to contact you.</p>
                <div className={style.field}>
                    <input value='' placeholder='Leave any contacts: ( telegram ,whatsapp, linkedin , etc.. )' type='text'/>
                    <fieldset>
                        <legend>Leave any contacts:</legend>
                    </fieldset>
                </div>

                <div className={style.field}>
                    <textarea value='' placeholder='Your message*'></textarea>
                    <fieldset>
                        <legend>'Your message*'</legend>
                    </fieldset>
                </div>

                <p className='md-only'>Your data is safe and will not be passed on to third parties</p>

                <div  className={'sm-only'}><Messenger /></div>

                <div className={style.btns}>
                    <button className='reset'>No, cancel</button>
                    <button type='submit' className='button'>Yes, confirm</button>
                </div>

            </form>
        </div>
        </div>
}