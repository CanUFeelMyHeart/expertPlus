import React from "react";
import { InformationContainerComponent } from "../../../components/InformationContainerComponent/InformationContainerComponent";
import { PriceListComponent } from "../../../components/PriceListComponent/PriceListComponent";
import { ServicesSpecialistsComponent } from "../../../components/ServicesSpecialistsComponent/ServicesSpecialistsComponent";
import { OfertaComponent } from "../../../components/PriceListComponent/OfertaComponent";
import { SpecialistsInfoOtherServices } from "./SpecialistsInfoOtherServices";
import priceInfoOtherServices from "./PriceInfoOtherServices";

export const OtherServicesPage = () => {
    return (
        <div className="OtherServicesPage">
            <InformationContainerComponent header="Прочие услуги">
                <ServicesSpecialistsComponent
                    specialists={SpecialistsInfoOtherServices}
                />
                <PriceListComponent priceInfo={priceInfoOtherServices} />
            </InformationContainerComponent>
            <OfertaComponent />
        </div>
    );
};
