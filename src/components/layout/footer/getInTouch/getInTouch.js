import React from "react";
import * as style from "./getInTouch.module.scss";
import { StaticImage } from "gatsby-plugin-image";
import { useForm } from "react-hook-form";
import { sendForm } from "../../../../api/contactForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const formTitle = {
  text: "Lets Get In Touch",
};

const defaultData = {
  firstName: "First name:",
  email: "E-mail adsress:",
  text: "Message:",
  button: "Submit",
};

export const GetInTouch = () => {
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
    sendForm({ type: "footer", data: { ...data } });
    reset()
  }

  return (
    <div className={style.wrapper}>
      <div className="noise"></div>
      <div className="container">
        <h2 className="h2">{formTitle.text}</h2>
        <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
            <label className="formField">
              <input
                {...register("firstName", {
                  required: true,
                  minLength: { value: 2, message: "Not less than 5 symbols" },
                  maxLength: { value: 30, message: "Not more than 30 symbols" },
                  pattern: {
                    value: /^[а-яА-ЯёЁіІїЇєЄa-zA-Z_'"\s]+$/,
                    message: "Please, use only letters",
                  },
                })}
                placeholder={defaultData.firstName}
                type={"text"}
              />
              {errors.firstName && (
                <span className="error">{errors.firstName.message}</span>
              )}
            </label>

            <label className="formField">
              <input
                {...register("email", {
                  required: true,
                  pattern: {
                    value:
                      /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                    message: "Please, use correct email",
                  },
                })}
                placeholder={defaultData.email}
                type={"email"}
              />
              {errors.email && (
                <span className="error">{errors.email.message}</span>
              )}
            </label>

            <label className="formField">
              <textarea
                {...register("message", {
                  required: true,
                  maxLength: { value: 300, message: "Not more than 300 symbols" },
                })}
                placeholder={defaultData.text}
              ></textarea>
              {errors.message && (
                <span className="error">{errors.message.message}</span>
              )}
            </label>
          <button
            className="button"
            type="submit"
            disabled={isSubmitting}
          >
            {defaultData.button}
          </button>
        </form>
        <ToastContainer 
          position="top-center"
        ></ToastContainer>
        <div className={style.img}>
          <StaticImage
            className={"sm-only"}
            objectFit={"contain"}
            placeholder={"none"}
            src={"./mobile.png"}
            alt={""}
          />
          <StaticImage
            className={"md-only"}
            objectFit={"contain"}
            width={1200}
            placeholder={"none"}
            src={"./desktop.png"}
            alt={""}
          />
        </div>
      </div>
    </div>
  );
};
