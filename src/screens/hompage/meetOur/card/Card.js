import React from "react";
import * as style from "./card.module.scss";
import { useOpen } from "../../../../hooks/useOpen";
import { Modal } from "../../../../components/layout/modal/modal";
import { createPortal } from "react-dom";
import Linkedin from "../../../../images/linkedin.svg";
import Telegram from "../../../../images/telegram.svg";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

export const Card = ({ content, button }) => {
  const { position, name, telegram, linkedin, preview_photo, show_contact } =
    content;
  const { isOpen, onClose, onOpen } = useOpen(false);

  const image = getImage(preview_photo?.localFile);

  const data = [
    telegram && { img: Telegram, link: telegram, alt: "telegram" },
    linkedin && { img: Linkedin, link: linkedin, alt: "linkedin" },
  ];

  const createPath = (name) => name.toLowerCase().split(" ").join("_");

  return (
    <div className={style.card}>
      <div className="img-wrapper">
        <Link to={`team/${createPath(name)}`}>
          <GatsbyImage image={image} alt={name} />
        </Link>
      </div>
      <div className="content-wrapper">
        <div className="content-title">{name}</div>
        <div className="contentWrapperDescription">{position}</div>
        <button
          className={["button", isOpen ? "disabledBtn" : ""].join(" ")}
          onClick={onOpen}
        >
          {button}
        </button>

        {isOpen &&
          createPortal(
            <>
              <div className={style.cardWrap}>
                <Modal
                  onClose={onClose}
                  isMessage={show_contact}
                  data={data}
                  title={"Leave message"}
                  employee={name}
                  isDeveloper={true}
                >
                  <div className={style.modalHead}>
                    {image && <GatsbyImage image={image} alt={name} />}
                    <h3>{`Leave message to ${name}`}</h3>
                    <p>{position}</p>
                    <p>{`Please leave one of your contacts, ${name} will contact you.`}</p>
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
