import { API, sendTelegram } from "./API";
import axios from "axios";
import { toast } from "react-toastify";

const sendDataToStrapi = (formData) => {
  axios
    .post(API.CONTACT_FORM, { data: formData })
    .catch((e) => {
      console.log(e);
      toast.error("Something went wrong. Please, try again!", {
        theme: "colored",
      });
    })
    .then((value) => {
      if (value?.status === 200) {
        toast.success("Message sent successfully", { theme: "dark" });
      }
    });
};
export const sendForm = ({ type, data }) => {
  const validatedData = JSON.parse(JSON.stringify(data));

  const formData = {
    data_message: validatedData,
    type: type,
  };

  const dataToString = JSON.stringify(data).split(',').join('\n');
  sendTelegram({ type, dataToString });
  sendDataToStrapi(formData);
};
