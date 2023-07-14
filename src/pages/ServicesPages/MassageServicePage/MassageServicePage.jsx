import React from "react";
import { InformationContainerComponent } from "../../../components/InformationContainerComponent/InformationContainerComponent";
import { PriceListComponent } from "../../../components/PriceListComponent/PriceListComponent";
import { ServicesSpecialistsComponent } from "../../../components/ServicesSpecialistsComponent/ServicesSpecialistsComponent";
import { OfertaComponent } from "../../../components/PriceListComponent/OfertaComponent";
import { SpecialistsInfoMassage } from "./SpecialistsInfoMassage";
import priceInfoMassage from "./PriceInfoMassage";

export const MassageServicePage = () => {
    return (
        <div className="MassageServicePage">
            <InformationContainerComponent header="Массаж">
                <ServicesSpecialistsComponent
                    specialists={SpecialistsInfoMassage}
                />
                <PriceListComponent priceInfo={priceInfoMassage} />
            </InformationContainerComponent>
            <OfertaComponent />
        </div>
    );
};
