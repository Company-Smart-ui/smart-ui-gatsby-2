import {API} from "./API";
import axios from "axios";
import { toast } from "react-toastify";

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
                toast.success('Message sent successfully', { theme: "dark"});
            }
        })

        const dataToString = JSON.stringify(data);

        const token="5635328377:AAEsfxhnKH-VaO8oU-nPmXIBTb3ODcZcRO4" 
        const TELEGRAM = {
               
               chatId:'-639134844',
               uri: "https://api.telegram.org/bot"+token+"/sendMessage"
             } 
              axios.post(
                  TELEGRAM.uri , {
                        chat_id:TELEGRAM.chatId,
                        parse_mode:'html', 
                        text: `<b>${type}</b>.
                         ${dataToString}`
                           
                  }
              )
    }

    setData()
}
