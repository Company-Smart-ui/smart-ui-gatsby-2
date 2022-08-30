import React, { useRef } from "react";
import * as style from "./modalForm.module.scss";
import { FormField } from "../../../../global/formField/formField";
import { useEffect } from "react";
import {useOpen} from "../../../../hooks/useOpen";
import {useOnClickOutside} from "../../../../hooks/useOnClickOutside";
import {sendForm} from "../../../../api/contactForm";
import { useForm } from "react-hook-form";

export const ModalForm = ({ onClose, dataText, isShow = true }) => {
  const {isOpen: isFade, onOpen: fadeIn, onClose: fadeOut}= useOpen(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onChange",
  });

  function onSubmit(data, e) {
    e.preventDefault();

    sendForm({ e, type: "request consultation", data: { ...data } });

    setTimeout(() => {
        reset()
    }, 100)
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
        <p>{dataText.subtitle}</p>
        <FormField placeholder={dataText.input} >
          <input  {...register("contact", { required: true, maxLength: { value: 150, message: "Not more than 150 symbols" }, })} placeholder={dataText.input} type={'text'} />
          {errors.firstName && (
              <span className="error">{errors.contact.message}</span>
            )}
        </FormField>

        <FormField placeholder={dataText.textarea}>
            <textarea
              {...register("message", {
                required: true,
                maxLength: { value: 300, message: "Not more than 300 symbols" },
              })}
              placeholder={dataText.textarea}
            ></textarea>
          </FormField>

        {
          isShow && <p className="md-only"> {dataText.eeo}</p>
        }

        <div className={style.btns + " btns"}>
          <button
            className="reset"
            type="reset"
            onClick={fadeOutHandle}
            disabled={isSubmitting}
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
