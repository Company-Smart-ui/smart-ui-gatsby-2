import {API} from "./API";
import axios from "axios";

export const sendForm =({type , data ,e })=>{
    const validatedData = JSON.parse(JSON.stringify(data))
    const u = {
        data_message:validatedData,
        type:type
    }
    const setData = () => {
        axios.post(API.CONTACT_FORM, {data: u})
        .catch(e=>{console.log(e) ; alert(e)});
    }

    setData()



    e.preventDefault();
}
