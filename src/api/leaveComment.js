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
                toast.success('review will publish after checking', {theme: "dark"});
            }
        })


}
export const leaveComment = ({name, stars, review}) => {
    const type = 'review'
    const formData = {
        name, stars, review, published: false
    }
    const dataToString = JSON.stringify(formData);
    sendTelegram({type, dataToString})
    sendDataToStrapi(formData)
 
}
