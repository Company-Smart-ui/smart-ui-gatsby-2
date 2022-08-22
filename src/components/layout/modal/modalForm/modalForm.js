import React, { useRef } from "react";
import * as style from "./modalForm.module.scss";
import { Messenger } from "../../../../global/messengers/messengers.js";
import { Input } from "../../../../global/input/input";
import { Textarea } from "../../../../global/textarea/textarea";
import { useEffect } from "react";
import {useOpen} from "../../../../hooks/useOpen";
import {useOnClickOutside} from "../../../../hooks/useOnClickOutside";

export const ModalForm = ({ onClose, dataText, isShow = true }) => {
  const {isOpen: isFade, onOpen: fadeIn, onClose: fadeOut}= useOpen(false);

  const modalRef = useRef();

  const fadeOutHandle = () => {
    fadeOut();
    setTimeout(() => {
      onClose();
    }, 800)
  }

  useOnClickOutside(modalRef, fadeOutHandle);

  useEffect(() => {
    setTimeout(() => {
      fadeIn();

    }, 1)
  }, [fadeIn])
  return (
    <div ref={modalRef} className={[style.modal, isFade ? style.open : ''].join(' ') }>
      <form className={style.form}>
        <h3>{dataText.title}</h3>
        <Messenger />
        <p>{dataText.subtitle}</p>
        <Input placeholder={dataText.input} />

        <Textarea placeholder={dataText.textarea} />

        {
          isShow && <p className="md-only"> {dataText.eeo}</p>
        }

        <div className={style.btns}>
          <button
            className="reset"
            type="reset"
            onClick={fadeOutHandle}
          >
            {dataText.resetBtn}
          </button>
          <button type="submit" className="button">
            {dataText.submit}
          </button>
        </div>
      </form>
    </div>
  );
};