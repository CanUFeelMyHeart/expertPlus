import React from "react";
import { InformationContainerComponent } from "components/InformationContainerComponent/InformationContainerComponent";
import { ServicesSpecialistsComponent } from "components/ServicesSpecialistsComponent/ServicesSpecialistsComponent";
import { PriceListComponent } from "components/PriceListComponent/PriceListComponent";
import { OfertaComponent } from "components/PriceListComponent/OfertaComponent";
import { SpecialistsInfoRheumatologist } from "./SpecialistsInfoRheumatologist";
import priceInfoRheumatologist from "./PriceInfoRheumatologist";

export const RheumatologistServicePage = () => {
   return (
      <div className="service-page">
         <div className="container service-page__container">
            <InformationContainerComponent header="Ревматолог">
               <ServicesSpecialistsComponent
                  specialists={SpecialistsInfoRheumatologist}
               />
               <PriceListComponent priceInfo={priceInfoRheumatologist} />
            </InformationContainerComponent>
            <OfertaComponent />
         </div>
      </div>
   );
};
