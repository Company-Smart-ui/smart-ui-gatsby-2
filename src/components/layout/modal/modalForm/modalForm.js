import React, { useRef } from "react";
import * as style from "./modalForm.module.scss";
import { Messenger } from "../../../../global/messengers/messengers.js";
import { Input } from "../../../../global/input/input";
import { Textarea } from "../../../../global/textarea/textarea";
import { useEffect } from "react";
import {useOpen} from "../../../../hooks/useOpen";
import {useOnClickOutside} from "../../../../hooks/useOnClickOutside";

export const ModalForm = ({ onClose }) => {
  const {isOpen: isFade, onOpen: fadeIn, onClose: fadeOut}= useOpen(false);

  const modalRef = useRef();

  const fadeOutHandle = () => {
    fadeOut();
    setTimeout(() => {
      onClose();
    }, 1000)
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
        <h3>Leave your message</h3>
        <Messenger className={"md-only"} />
        <p>Please leave one of your contacts to contact you.</p>
        <Input placeholder={"Leave any contacts: ( telegram ,whatsapp, linkedin , etc.. )"} />

        <Textarea placeholder={"Your message*"} />

        <p className="md-only">
          Your data is safe and will not be passed on to third parties
        </p>

        <div className={style.btns}>
          <button
            className="reset"
            type="reset"
            onClick={fadeOutHandle}
          >
            No, cancel
          </button>
          <button type="submit" className="button">
            Yes, confirm
          </button>
        </div>
      </form>
    </div>
  );
};
