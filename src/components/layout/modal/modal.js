import React from 'react';
import * as style from "./modal.module.scss";
import {ModalForm} from "./modalForm/modalForm";
import {useOpen} from "../../../hooks/useOpen";



export const Modal = ({text = 'return message'}) => {
    const {isOpen, onClose, onOpen}= useOpen(false);

    return <div className={style.wrapper + " modal"}>
        <button className={style.btn + " button"} onClick={onOpen}>{text}</button>
        {
            isOpen && <ModalForm  onClose={onClose} /> 

        }
        
        </div>
}
