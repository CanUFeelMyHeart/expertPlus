import React from "react";
import { InformationContainerComponent } from "../../../components/InformationContainerComponent/InformationContainerComponent";
import { PriceListComponent } from "../../../components/PriceListComponent/PriceListComponent";
import { OfertaComponent } from "../../../components/PriceListComponent/OfertaComponent";
import { priceInfoPsychologist } from "./PriceInfoPsychologist";

export const PsychologistServicePage = () => {
    return (
        <div className="PsychologistServicePage">
            <InformationContainerComponent header="Психолог">
                <PriceListComponent priceInfo={priceInfoPsychologist} />
            </InformationContainerComponent>
            <OfertaComponent />
        </div>
    );
};
