import React, { useRef } from "react";
import { useEffect } from "react";
import { useOpen } from "../../../hooks/useOpen";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";
import { useNoScroll } from "../../../hooks/useNoScroll";
import { Form } from "./form/form";

export const Modal = ({ children, title = 'request consultation', isMessage = false, data = '', isReview = false }) => {
  const { isOpen, onOpen, onClose } = useOpen(false);
  
  useNoScroll(isOpen);

  const modalRef = useRef();

  const fadeOutHandle = () => {
    onClose();
    setTimeout(() => {
      onClose();
    }, 650);
  };

  useOnClickOutside(modalRef, fadeOutHandle);

  useEffect(() => {
    setTimeout(() => {
      onOpen();
    }, 1);
  }, [onOpen]);

  return (
    <>
    <div className={[ 'mask', (isOpen ? 'open' : '')].join(" ")}></div>
      <div
        ref={modalRef}
        className={[ 'modal', (isOpen ? 'open' : '')].join(" ")}
      >
        {children}
        <Form isReview={isReview} title={title} isMessage={isMessage} data={data} hanlde={fadeOutHandle} />
      </div>
    </>
  );
};
