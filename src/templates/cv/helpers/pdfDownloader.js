import {BlobProvider} from "@react-pdf/renderer";
import React from "react";
import {CVPdfItem} from "../cvPdf/cvPdfItem"

export const PdfDownloader = ({linkRef, userInfo}) => {
    return (
        <BlobProvider document={<CVPdfItem infoPdf={userInfo}/>}>
            {({url, loading}) => {
                if (url && !loading) {
                    const downloadBtnElement = document.getElementById("download");
                    downloadBtnElement.setAttribute("download", "download");
                    downloadBtnElement.setAttribute("href", url);
                    linkRef?.current.click();
                }
            }}
        </BlobProvider>
    );
};

