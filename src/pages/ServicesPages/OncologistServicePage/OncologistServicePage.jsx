import React from "react";
import { InformationContainerComponent } from "components/InformationContainerComponent/InformationContainerComponent";
import { PriceListComponent } from "components/PriceListComponent/PriceListComponent";
import { ServicesSpecialistsComponent } from "components/ServicesSpecialistsComponent/ServicesSpecialistsComponent";
import { OfertaComponent } from "components/PriceListComponent/OfertaComponent";
import { SpecialistsInfoOncologist } from "./SpecialistsInfoOncologist";
import priceInfoOncologist from "./PriceInfoOncologist";

export const OncologistServicePage = () => {
   return (
      <div className="service-page">
         <div className="container service-page__container">
            <InformationContainerComponent header="Онколог">
               <ServicesSpecialistsComponent
                  specialists={SpecialistsInfoOncologist}
               />
               <PriceListComponent priceInfo={priceInfoOncologist} />
            </InformationContainerComponent>
            <OfertaComponent />
         </div>
      </div>
   );
};
