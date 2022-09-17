import * as React from "react"
import * as style from "./cv.module.scss";
import {CVPdfItem} from "./cvPdf/cvPdfItem";
import {PDFViewer} from '@react-pdf/renderer';
import {moskalevInfo} from "./cvPdf/teamInfo/MoskalevInfo";


const CVPdf = () => {
    return <div className={style.cv}>
        <PDFViewer className="wrap-pdf">
            <CVPdfItem infoPdf={moskalevInfo}/>
        </PDFViewer>
    </div>
}
export default CVPdf
