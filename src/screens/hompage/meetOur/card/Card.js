import React from "react";
import * as style from "./card.module.scss";
import { useOpen } from "../../../../hooks/useOpen";
import { Modal } from "../../../../components/layout/modal/modal";
import { createPortal } from "react-dom";
import { HEADS } from "../../../../global/data";

export const Card = ({ content }) => {
  const { img, title, text, btn } = content;
  const {isOpen, onClose, onOpen}= useOpen(false);
  
  return (
    <div className={style.card}>
        <div className="img-wrapper">
          <img src={img} alt={title} />
        </div>
        <div className="content-wrapper">
          <div className="content-title">{title}</div>
          <div className="contentWrapperDescription">{text}</div>
          <button className={["button", (isOpen ? 'disabledBtn' : '')].join(' ') } onClick={onOpen}>{btn}</button>

          {isOpen && createPortal(
            <>
              <div className={style.cardWrap}>
                <Modal onClose={onClose} isMessage={(title === 'Alexander Klipkov') || (title ===  'Alexander Kozlov') || (title === 'Alex Gashkov')} title={`Message to ${title}`} data={HEADS[`${title}`]}>
                  <div className={style.modalHead}>
                    <img className="md-only" src={img} alt={title}/>
                    <h3>{`Leave message to ${title}`}</h3>
                    <p>{text}</p>
                    <p>{`Please leave one of your contacts, ${title} will contact you.`}</p>
                  </div>
                </Modal>
              </div>
            </>,
            document.body
          )}
        </div>
    </div>
  );
};


