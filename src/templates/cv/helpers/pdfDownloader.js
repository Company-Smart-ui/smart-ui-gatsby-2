import { BlobProvider } from "@react-pdf/renderer";
import React from "react";
import { CVPdfItem } from "../cvPdf/cvPdfItem";

export const PdfDownloader = ({ linkRef, userInfo, hideLoaderPdf }) => {
  let onlyOnce = ()=>{
    if(!linkRef||linkRef.current.dataset.dataClicked){
      return
    }
      linkRef.current.click();
    linkRef.current.dataset.dataClicked="true";
  }

  return (
    <BlobProvider document={<CVPdfItem infoPdf={userInfo} />}>
      {({ url, loading }) => {
        if (url && !loading) {
          const downloadBtnElement = document.getElementById("download");
          downloadBtnElement.setAttribute(
            "download",
            userInfo?.userName + " Smart Ui"
          );
          downloadBtnElement.setAttribute("href", url);
          onlyOnce();
          onlyOnce= ()=>{}
          hideLoaderPdf();
        }
      }}
    </BlobProvider>
  );
};
