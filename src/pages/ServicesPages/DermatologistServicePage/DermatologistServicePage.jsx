import React from "react";
import { InformationContainerComponent } from "components/InformationContainerComponent/InformationContainerComponent";
import { PriceListComponent } from "components/PriceListComponent/PriceListComponent";
import { ServicesSpecialistsComponent } from "components/ServicesSpecialistsComponent/ServicesSpecialistsComponent";
import { OfertaComponent } from "components/PriceListComponent/OfertaComponent";
import { SpecialistsInfoDermatologist } from "./SpecialistsInfoDermatologist";
import priceInfoDermatologist from "./PriceInfoDermatologist";

export const DermatologistServicePage = () => {
   return (
      <div className="service-page">
         <div className="container service-page__container">
            <InformationContainerComponent header="Дерматолог">
               <ServicesSpecialistsComponent
                  specialists={SpecialistsInfoDermatologist}
               />
               <PriceListComponent priceInfo={priceInfoDermatologist} />
            </InformationContainerComponent>
            <OfertaComponent />
         </div>
      </div>
   );
};
