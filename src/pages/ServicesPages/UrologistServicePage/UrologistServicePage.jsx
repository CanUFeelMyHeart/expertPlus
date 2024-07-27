import React from "react";
import { InformationContainerComponent } from "components/InformationContainerComponent/InformationContainerComponent";
import { PriceListComponent } from "components/PriceListComponent/PriceListComponent";
import { ServicesSpecialistsComponent } from "components/ServicesSpecialistsComponent/ServicesSpecialistsComponent";
import { OfertaComponent } from "components/PriceListComponent/OfertaComponent";
import { SpecialistsInfoUrologist } from "./SpecialistsInfoUrologist";
import priceInfoUrologist from "./PriceInfoUrologist";

export const UrologistServicePage = () => {
   return (
      <div className="service-page">
         <div className="container service-page__container">
            <InformationContainerComponent header="Уролог">
               <ServicesSpecialistsComponent
                  specialists={SpecialistsInfoUrologist}
               />
               <PriceListComponent priceInfo={priceInfoUrologist} />
            </InformationContainerComponent>
            <OfertaComponent />
         </div>
      </div>
   );
};
