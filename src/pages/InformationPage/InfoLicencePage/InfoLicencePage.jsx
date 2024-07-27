import React from "react";
import { InformationContainerComponent } from "../../../components/InformationContainerComponent/InformationContainerComponent";

import licence_expert from "assets/documents/licence_expert.pdf";
import "./InfoLicencePage.css";

export const InfoLicencePage = () => {
   return (
      <div className="InfoLicencePage">
         <div className="container">
            <InformationContainerComponent header="Лицензии">
               <a href={licence_expert} target="_blank" rel="noreferrer">
                  Лицензия Эксперт
               </a>
            </InformationContainerComponent>
         </div>
      </div>
   );
};
