import React from "react";
import { Contact } from "../../../global/contact/contact";
import { Link } from "gatsby";
import { GetInTouch } from "./getInTouch/getInTouch";
import * as style from "./footer.module.scss";
import { Modal } from "../modal/modal";
import { useOpen } from "../../../hooks/useOpen";
import { useTranslation } from "react-i18next";
import { useAddClientFont } from "../../../hooks/useAddClientFont";
import { StaticImage } from "gatsby-plugin-image";
import scroll_img from "./scroll.svg"
import pointer_img from "./pointer.svg"

const ContactUs = ({ info }) => {
  return (
    <div className={style.column}>
      <p dangerouslySetInnerHTML={{ __html: info.title }}></p>
      <div dangerouslySetInnerHTML={{ __html: info.text }}></div>
    </div>
  );
};

const copyright = {
  text: "© 2022 Smart-UI. All Rights Reserved",
};

export const BackToTop = ({ text }) => {
  const scroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <button onClick={scroll} className={style.backTo}>
      <span className="lg-only">
        <img src={scroll_img} alt="back to top" /> {text}
      </span>
      <span className="lg-end">
        <img src={pointer_img} alt="back to top" /> {text}
      </span>
    </button>
  );
};

export const Footer = ({ path, lang }) => {
  const translate = useTranslation();
  useAddClientFont(translate?.i18n?.language === "uk-UA");
  const { isOpen, onClose, onOpen } = useOpen(false);

  const { t } = translate;
  const translatedText = t("Footer", { returnObjects: true }) || [];
  const dataText = Array.isArray(translatedText)
    ? translatedText.filter((d) => d?.__component === "footer.blocks")[0].block
    : [];
  return (
    <>
      <button
        className={["openBtn", isOpen ? "disabledBtn" : ""].join(" ")}
        onClick={onOpen}
      >
        <span>{t("tr_return_message")}</span>
      </button>
      {isOpen && (
        <Modal onClose={onClose}>
          <h3>Leave your message</h3>
        </Modal>
      )}
      {/*{path !== "team" || (path.startsWith("team") && <GetInTouch />)}*/}
      {path !== "team" ? (
        <GetInTouch
          title={t("tr_get_in_touch_title")}
          name={t("tr_first_name")}
          email={t("tr_email_address")}
          message={t("tr_message")}
          submit={t("tr_submit")}
        />
      ) : (
        ""
      )}
      <footer className={style.footer}>
        <div className="container">
          <div className={style.row}>
            <div className={style.nav}>
              <div className={style.logo}>
                <Link to={"/"}>
                  <StaticImage
                    width={302}
                    className={style.staticImg}
                    src={"../../../images/smart-ui.svg"}
                    alt="Logo"
                  />
                </Link>
              </div>
              <Contact />
            </div>
            <div className={style.contactUs}>
              {dataText.map((el, i) => (
                <ContactUs info={el} key={i} />
              ))}
            </div>
          </div>
          <div className={style.bottom}>
            <p>{copyright.text}</p>
            <BackToTop text={t("tr_back_to_top")} />
          </div>
        </div>
      </footer>
    </>
  );
};
