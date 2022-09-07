import React, { useRef } from "react";
import { useEffect } from "react";
import { useOpen } from "../../../hooks/useOpen";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";
import { sendForm } from "../../../api/contactForm";
import { useForm } from "react-hook-form";
import { Messenger } from "../../../global/messengers/messengers";
import { useNoScroll } from "../../../hooks/useNoScroll";

export const Modal = ({ onClose, children, title = 'request consultation', nameClass = '', isMessage = false, data = '' }) => {
  const { isOpen: isFade, onOpen: fadeIn, onClose: fadeOut } = useOpen(false);
  useNoScroll(isFade);
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

    sendForm({ type: title, data: { ...data } });
    reset();
    fadeOut();
  }

  const modalRef = useRef();

  const fadeOutHandle = () => {
    fadeOut();
    setTimeout(() => {
      onClose();
    }, 650);
  };

  useOnClickOutside(modalRef, fadeOutHandle);

  useEffect(() => {
    setTimeout(() => {
      fadeIn();
    }, 1);
  }, [fadeIn]);
  return (
    <>
    <div className={[ nameClass, 'mask', (isFade ? 'open' : '')].join(" ")}></div>
      <div
        ref={modalRef}
        className={[ nameClass, 'modal', (isFade ? 'open' : '')].join(" ")}
      >
        {children}
        <form onSubmit={handleSubmit(onSubmit)} className='form'>
            <label className="formField">
              <input
                {...register("contact", {
                  required: true,
                  maxLength: { value: 150, message: "Not more than 150 symbols" },
                })}
                placeholder={
                  "Leave any contacts: ( telegram ,whatsapp, linkedin , etc.. )"
                }
                type={"text"}
              />
              {errors.contact && (
                <span className="error">{errors.contact.message}</span>
              )}
            </label>
  
            <label className="formField">
              <textarea
                {...register("message", {
                  required: true,
                  maxLength: { value: 300, message: "Not more than 300 symbols" },
                })}
                placeholder={"Your message*"}
              ></textarea>
              {errors.message && (
                <span className="error">{errors.message.message}</span>
              )}
            </label>
          <p className="md-only">
            Your data is safe and will not be passed on to third parties
          </p>
  
          {
            isMessage && <Messenger data={data} />
          }
  
          <div className={"btns"}>
            <button
              className="reset"
              type="reset"
              onClick={fadeOutHandle}
              disabled={isSubmitting}
            >
              No, cancel
            </button>
            <button type="submit" className="button">
              Yes, confirm
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
