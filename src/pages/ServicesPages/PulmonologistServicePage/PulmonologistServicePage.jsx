import React from "react";
import { InformationContainerComponent } from "components/InformationContainerComponent/InformationContainerComponent";
import { PriceListComponent } from "components/PriceListComponent/PriceListComponent";
import { OfertaComponent } from "components/PriceListComponent/OfertaComponent";
import priceInfoPulmonologist from "./PriceInfoPulmonologist";

export const PulmonologistServicePage = () => {
   return (
      <div className="service-page">
         <div className="container service-page__container">
            <InformationContainerComponent header="Пульмонолог">
               <PriceListComponent priceInfo={priceInfoPulmonologist} />
            </InformationContainerComponent>
            <OfertaComponent />
         </div>
      </div>
   );
};
