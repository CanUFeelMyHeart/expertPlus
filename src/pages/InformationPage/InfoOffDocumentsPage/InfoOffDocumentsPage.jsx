import React from "react";
import { InformationContainerComponent } from "../../../components/InformationContainerComponent/InformationContainerComponent";
import officialDocumentsData from "data/officialDocuments.json";

export const InfoOffDocumentsPage = () => {
   return (
      <div className="InfoOffDocumentsPage">
         <InformationContainerComponent header="Официальные документы">
            <div className="documentsContainer">
               {officialDocumentsData.map((document, index) => (
                  <div key={index}>
                     <img className="logo" src={document.image} alt="" />
                     <a href={document.link} target="_blank" rel="noreferrer">
                        {document.title}
                     </a>
                     <br></br>
                     <br></br>
                  </div>
               ))}
            </div>
         </InformationContainerComponent>
      </div>
   );
};
