import {API} from "./API";
import axios from "axios";
import { toast } from "react-toastify";
import { Sent } from "./done.svg";

export const sendForm =({type , data })=>{
    const validatedData = JSON.parse(JSON.stringify(data))
    const formData = {
        data_message:validatedData,
        type:type
    }

    const setData = () => {
        axios.post(API.CONTACT_FORM, {data: formData})
        .catch((e) =>{toast.error("Something went wrong. Please, try again!", { theme: "colored" });})
        .then((value) => {
            if (value?.status === 200) {
                toast.success('Message sent successfully', {
                    theme: "dark",
                    icon: Sent,
                    toastId: "customId"
                })
            }
        })
    }

    setData()
}
