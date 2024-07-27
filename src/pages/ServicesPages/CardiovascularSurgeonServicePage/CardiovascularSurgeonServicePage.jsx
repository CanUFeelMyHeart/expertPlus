import React from "react";
import { InformationContainerComponent } from "components/InformationContainerComponent/InformationContainerComponent";
import { ServicesSpecialistsComponent } from "components/ServicesSpecialistsComponent/ServicesSpecialistsComponent";
import { PriceListComponent } from "components/PriceListComponent/PriceListComponent";
import { OfertaComponent } from "components/PriceListComponent/OfertaComponent";
import { SpecialistsInfoCardiovascularSurgeon } from "./SpecialistsInfoCardiovascularSurgeon";
import priceInfoCardiovascularSurgeon from "./PriceInfoCardiovascularSurgeon";

export const CardiovascularSurgeonServicePage = () => {
   return (
      <div className="service-page">
         <div className="container">
            <InformationContainerComponent header="Сердечно-сосудистый хирург">
               <ServicesSpecialistsComponent
                  specialists={SpecialistsInfoCardiovascularSurgeon}
               />
               <PriceListComponent priceInfo={priceInfoCardiovascularSurgeon} />
            </InformationContainerComponent>
            <OfertaComponent />
         </div>
      </div>
   );
};
