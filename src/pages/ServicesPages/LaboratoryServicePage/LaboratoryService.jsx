import React from "react";
import { InformationContainerComponent } from "components/InformationContainerComponent/InformationContainerComponent";
import { PriceListComponent } from "components/PriceListComponent/PriceListComponent";
import { OfertaComponent } from "components/PriceListComponent/OfertaComponent";
import laboratoryPrices from "./laboratoryPrices";

export const LaboratorytServicePage = () => {
    return (
        <div className="service-page">
            <div className="container service-page__container">
                <InformationContainerComponent header="Логопед">
                    <PriceListComponent priceInfo={laboratoryPrices} />
                </InformationContainerComponent>
                <OfertaComponent />
            </div>
        </div>
    );
};
