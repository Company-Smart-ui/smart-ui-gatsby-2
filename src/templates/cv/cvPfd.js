import * as React from "react";
import { CVPdfItem } from "./cvPdf/cvPdfItem";
import { moskalevInfo } from "./cvPdf/teamInfo/MoskalevInfo";

import * as style from "./cv.module.scss";

const CVPdf = () => {
  return (
    <div className={style.cv}>
      <CVPdfItem infoPdf={moskalevInfo} />
    </div>
  );
};
export default CVPdf;
