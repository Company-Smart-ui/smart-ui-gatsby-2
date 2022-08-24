import {API} from "./API";

export const sendForm =({type , data ,e })=>{
    const validatedData = JSON.parse(JSON.stringify(data))
    const u = {
        data_message:validatedData,
        type:type
    }
    const setData = async ()=>{
       fetch(API.CONTACT_FORM ,{  method: 'POST' , mode: 'cors',
            headers: { "Content-Type": "application/json",
                "Authorization" : "Token " }, body: JSON.stringify({data:u})})
           .catch(e=>{console.log(e) ; alert(e)});
    }
    setData();

    e.preventDefault();
}
