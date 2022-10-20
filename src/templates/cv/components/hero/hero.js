import * as React from "react";
import * as style from "./hero.module.scss";
import { GatsbyImage } from "gatsby-plugin-image";
import { createPortal } from "react-dom";
import { Modal } from "../../../../components/layout/modal/modal";
import { useOpen } from "../../../../hooks/useOpen";

export const Hero = (props) => {
  const { isOpen, onClose, onOpen } = useOpen();
  const name = props.name;
  const image = props.img;
  return (
    <div className={style.hero}>
      <div className={style.photo}>
        {props?.img && (
          <GatsbyImage
            alt={props?.name}
            image={props?.img}
            placeholderStyle={{
              backgroundColor: false,
            }}
          />
        )}

        <button onClick={onOpen} className={`button ${style.buttonChat}`}>
          {props?.chat}
        </button>
      </div>
      <div className={style.description}>
        <div className={style.wrapName}>
          <h1>
            <span>{props.name?.split(" ")[0]} </span>
            {props.name?.split(" ")[1]}
          </h1>
          <p className={style.job}>{props?.direction}</p>
        </div>
        {props?.description && (
          <div
            className={style.content}
            dangerouslySetInnerHTML={{ __html: props?.description }}
          />
        )}
      </div>
      {isOpen &&
        createPortal(
          <>
            <div className={style.modalTeam}>
              <Modal
                onClose={onClose}
                isMessage={"show_contact"}
                data={[]}
                title={`Leave message to ${name}`}
              >
                <div className={style.modalHead}>
                  {image && <GatsbyImage image={image} alt={name} />}
                  <div className={style.modalHeadText}>
                    <h3>{`Leave message to ${name}`}</h3>
                    <p>{props?.direction}</p>
                    <p>{`Please leave one of your contacts, ${name} will contact you.`}</p>
                  </div>
                </div>
              </Modal>
            </div>
          </>,
          document.body
        )}
    </div>
  );
};
