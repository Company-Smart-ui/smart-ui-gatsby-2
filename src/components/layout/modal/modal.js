import React from 'react';
import * as style from "./modal.module.scss";
import {ModalForm} from "./modalForm/modalForm";
import {useOpen} from "../../../hooks/useOpen";

const modalText = {
    title: 'Leave your message',
    subtitle: 'Please leave one of your contacts to contact you.',
    input: 'Leave any contacts: ( telegram ,whatsapp, linkedin , etc.. )',
    textarea: 'Your message*',
    eeo: 'Your data is safe and will not be passed on to third parties',
    resetBtn: 'No, cancel',
    submit: 'Yes, confirm',
}

export const Modal = ({text = 'return message', dataText = modalText, isShow}) => {
    const {isOpen, onClose, onOpen}= useOpen(false);

    return <div className={style.wrapper + " modal"}>
        <button className={style.btn + " button"} onClick={onOpen}>{text}</button>
        {
            isOpen && <ModalForm dataText={dataText} onClose={onClose} isShow={isShow} /> 

        }
        
        </div>
}
