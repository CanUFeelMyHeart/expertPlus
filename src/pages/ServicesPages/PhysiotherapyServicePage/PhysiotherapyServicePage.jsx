import React from "react";
import { InformationContainerComponent } from "../../../components/InformationContainerComponent/InformationContainerComponent";
import { PriceListComponent } from "../../../components/PriceListComponent/PriceListComponent";
import { OfertaComponent } from "../../../components/PriceListComponent/OfertaComponent";
import priceInfoPhysiotherapy from "./PriceInfoPhysiotherapy";

export const PhysiotherapyServicePage = () => {
   return (
      <div className="PhysiotherapyServicePage">
         <InformationContainerComponent header="Физиотерапия">
            <PriceListComponent priceInfo={priceInfoPhysiotherapy} />
         </InformationContainerComponent>
         <OfertaComponent />
      </div>
   );
};
