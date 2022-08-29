import React from "react";
import * as style from "./getInTouch.module.scss";
import { StaticImage } from "gatsby-plugin-image";
import { FormField } from "../../../../global/formField/formField";
import { useForm } from "react-hook-form";
import { sendForm } from "../../../../api/contactForm";

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
    formState: { errors, isSubmitting, isValid, isSubmitted },
  } = useForm({
    mode: "onChange",
  });

  function onSubmit(data, e) {
    e.preventDefault();

    sendForm({ e, type: "get in touch", data: { ...data } });

    setTimeout(() => {
        reset()
    }, 100)
  }


  return (
    <div className={style.wrapper}>
      <div className="noise"></div>
      <div className="container">
        <h2 className="h2">{formTitle.text}</h2>
        <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
          <FormField placeholder={defaultData.firstName}>
            <input
              {...register("firstName", {
                required: true,
                minLength: { value: 2, message: "Not less than 5 symbols" },
                maxLength: { value: 30, message: "Not more than 30 symbols" },
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "Please, use only letters",
                },
              })}
              placeholder={defaultData.firstName}
              type={"text"}
            />
            {errors.firstName && (
              <span className="error">{errors.firstName.message}</span>
            )}
          </FormField>

          <FormField placeholder={defaultData.email}>
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
          </FormField>

          <FormField placeholder={defaultData.text}>
            <textarea
              {...register("message", {
                required: true,
                maxLength: { value: 300, message: "Not more than 300 symbols" },
              })}
              placeholder={defaultData.text}
            ></textarea>
          </FormField>
          <button
            className="button"
            type="submit"
            disabled={isSubmitting}
          >
            {defaultData.button}
          </button>
        </form>
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
