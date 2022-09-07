import axios from "axios";
import {API, sendTelegram} from "./API";
import {toast} from "react-toastify";

const sendDataToStrapi = (formData) => {
    axios.post(API.REVIEW_PORTFOLIO, {data: formData})
        .catch((e) => {
            console.log(e)
            toast.error("Something went wrong. Please, try again!", {theme: "colored"});
        })
        .then((value) => {
            if (value?.status === 200) {
                toast.success('Review will publish after checking', {theme: "dark"});
            }
        })


}
export const leaveComment = (data) => {
    const type = 'review'
    const formData = {
        ...data ,published: false
    }
    const dataToString = JSON.stringify(formData);
    sendTelegram({type, dataToString})
    sendDataToStrapi(formData)
 
}
