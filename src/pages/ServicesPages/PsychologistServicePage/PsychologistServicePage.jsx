import React from "react";
import { InformationContainerComponent } from "components/InformationContainerComponent/InformationContainerComponent";
import { PriceListComponent } from "components/PriceListComponent/PriceListComponent";
import { OfertaComponent } from "components/PriceListComponent/OfertaComponent";
import priceInfoPsychologist from "./PriceInfoPsychologist";

export const PsychologistServicePage = () => {
   return (
      <div className="service-page">
         <div className="container service-page__container">
            <InformationContainerComponent header="Психолог">
               <PriceListComponent priceInfo={priceInfoPsychologist} />
            </InformationContainerComponent>
            <OfertaComponent />
         </div>
      </div>
   );
};
