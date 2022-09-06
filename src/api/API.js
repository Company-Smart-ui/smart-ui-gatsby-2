// const  endpoint = "http://localhost:1337/api/";
import axios from "axios";

const endpoint = "https://stark-refuge-01750.herokuapp.com/api/";


export const API = {
    CONTACT_FORM: endpoint + 'contact-messages',
    LOGIN: endpoint + 'auth/local',
    ADMIN_CHECK: endpoint + "admin",
    HOME: endpoint + "home",
    REVIEW_PORTFOLIO: endpoint + 'review-portfolios',
    SINGLE_PROJECTS: endpoint + 'single-projects'
}


export const sendTelegram = ({type, dataToString}) => {

    const token = "5635328377:AAEsfxhnKH-VaO8oU-nPmXIBTb3ODcZcRO4"
    const TELEGRAM = {

        chatId: '-639134844',
        uri: "https://api.telegram.org/bot" + token + "/sendMessage"
    }
    axios.post(
        TELEGRAM.uri, {
            chat_id: TELEGRAM.chatId,
            parse_mode: 'html',
            text: `<b>${type}</b>.
                         ${dataToString}`

        }
    ).catch((e) => console.log(e)).then(() => {
        console.log('was sent to telegram ')
    })
}