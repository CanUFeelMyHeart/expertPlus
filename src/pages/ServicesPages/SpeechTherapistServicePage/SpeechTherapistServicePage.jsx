import React from "react";
import { InformationContainerComponent } from "components/InformationContainerComponent/InformationContainerComponent";
import { PriceListComponent } from "components/PriceListComponent/PriceListComponent";
import { OfertaComponent } from "components/PriceListComponent/OfertaComponent";
import PriceInfoSpeechTherapist from "./PriceInfoSpeechTherapist";

export const SpeechTherapistServicePage = () => {
   return (
      <div className="service-page">
         <div className="container">
            <InformationContainerComponent header="Логопед">
               <PriceListComponent priceInfo={PriceInfoSpeechTherapist} />
            </InformationContainerComponent>
            <OfertaComponent />
         </div>
      </div>
   );
};
