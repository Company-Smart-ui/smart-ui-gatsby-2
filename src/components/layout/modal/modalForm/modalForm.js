import React, { useRef } from "react";
import * as style from "./modalForm.module.scss";
import { Messenger } from "../../../../global/messengers/messengers.js";
import { FormField } from "../../../../global/formField/formField";
import { useEffect } from "react";
import {useOpen} from "../../../../hooks/useOpen";
import {useOnClickOutside} from "../../../../hooks/useOnClickOutside";
import {sendForm} from "../../../../api/contactForm";
import { useForm } from "react-hook-form";

export const ModalForm = ({ onClose, dataText, isShow = true }) => {
  const {isOpen: isFade, onOpen: fadeIn, onClose: fadeOut}= useOpen(false);
  const { register, handleSubmit } = useForm({
    mode: "onBlur",
  });

  function onSubmit(data, e) {
    console.log(data)
    e.preventDefault()

    sendForm({e,type:'return message', data: {...data}})

  }

  const modalRef = useRef();

  const fadeOutHandle = () => {
    fadeOut();
    setTimeout(() => {
      onClose();
    }, 650)
  }

  useOnClickOutside(modalRef, fadeOutHandle);

  useEffect(() => {
    setTimeout(() => {
      fadeIn();

    }, 1)
  }, [fadeIn])
  return (
    <div ref={modalRef} className={[style.modal, isFade ? style.open : ''].join(' ') }>
      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <h3>{dataText.title}</h3>
        <Messenger />
        <p>{dataText.subtitle}</p>
        <FormField placeholder={dataText.input} >
          <input  {...register("contact", { required: true, maxLength: 20 })} placeholder={dataText.input} type={'text'} />
        </FormField>

        <FormField placeholder={dataText.textarea}>
          <textarea {...register("message", { required: true, maxLength: 300 })} placeholder={dataText.textarea}></textarea>
          </FormField>

        {
          isShow && <p className="md-only"> {dataText.eeo}</p>
        }

        <div className={style.btns + " btns"}>
          <button
            className="reset"
            type="reset"
            onClick={fadeOutHandle}
          >
            {dataText.resetBtn}
          </button>
          <button type="submit"   className="button">
            {dataText.submit}
          </button>
        </div>
      </form>
    </div>
  );
};
