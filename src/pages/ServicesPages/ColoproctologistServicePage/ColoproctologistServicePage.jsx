import React from "react";
import { InformationContainerComponent } from "components/InformationContainerComponent/InformationContainerComponent";
import { PriceListComponent } from "components/PriceListComponent/PriceListComponent";
import { ServicesSpecialistsComponent } from "components/ServicesSpecialistsComponent/ServicesSpecialistsComponent";
import { OfertaComponent } from "components/PriceListComponent/OfertaComponent";
import { SpecialistsInfoColoproctologist } from "./SpecialistsInfoColoproctologist";
import priceInfoColoproctologist from "./PriceInfoColoproctologist";

export const ColoproctologistServicePage = () => {
   return (
      <div className="service-page">
         <div className="container service-page__container">
            <InformationContainerComponent header="Колопроктолог">
               <ServicesSpecialistsComponent
                  specialists={SpecialistsInfoColoproctologist}
               />
               <PriceListComponent priceInfo={priceInfoColoproctologist} />
            </InformationContainerComponent>
            <OfertaComponent />
         </div>
      </div>
   );
};
