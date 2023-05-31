import React from "react";
import * as style from "./getInTouch.module.scss";
import { StaticImage } from "gatsby-plugin-image";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendFormForTagManager } from "../../../../stats/google";
import { sendForm } from "../../../../api/contactForm";

export const GetInTouch = (props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onSubmit",
  });

  function onSubmit(data, e) {
    e.preventDefault();
    sendForm({ type: "footer", data: { ...data } });
    sendFormForTagManager("footer");
    reset();
  }

  return (
    <div className={`${style.wrapper} getInTouch`}>
      <div className="bgWrapper">
        <StaticImage
          src="./line_background_grid.png"
          alt={""}
          quality={1}
          style={{ position: "absolute", height: "100%", top: 0 }}
        />
      </div>
      <div className="noise"></div>
      <div className="container">
        <h2 className="h2">{props.title}</h2>
        <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
          <label className="formField">
            <input
              {...register("name", {
                minLength: { value: 2, message: "Not less than 5 symbols" },
                maxLength: { value: 30, message: "Not more than 30 symbols" },
                pattern: {
                  value: /^[а-яА-ЯёЁіІїЇєЄa-zA-Z_'"\s]+$/,
                  message: "Please, use only letters",
                },
                required: "This field is required",
              })}
              placeholder={props.name}
              type={"text"}
            />
            {errors.name && (
              <span className="error">{errors.name.message}</span>
            )}
          </label>

          <label className="formField">
            <input
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value:
                    /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                  message: "Please, use correct email",
                },
              })}
              placeholder={props.email}
              type={"email"}
            />
            {errors.email && (
              <span className="error">{errors.email.message}</span>
            )}
          </label>

          <label className="formField">
            <textarea
              {...register("review", {
                required: "This field is required",
                maxLength: { value: 300, message: "Not more than 300 symbols" },
              })}
              placeholder={props.message}
            ></textarea>
            {errors.review && (
              <span className="error">{errors.review.message}</span>
            )}
          </label>
          <button className="button" type="submit" disabled={isSubmitting}>
            {props.submit}
          </button>
        </form>
        <ToastContainer position="top-center"></ToastContainer>
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
