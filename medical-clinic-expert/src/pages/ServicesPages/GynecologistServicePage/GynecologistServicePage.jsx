import React from "react";
import { InformationContainerComponent } from "../../../components/InformationContainerComponent/InformationContainerComponent";
import { PriceListComponent } from "../../../components/PriceListComponent/PriceListComponent";
import { ServicesSpecialistsComponent } from "../../../components/ServicesSpecialistsComponent/ServicesSpecialistsComponent";
import { SpecialistsInfoGynecologist } from "./SpecialistsInfoGynecologist";
import { priceInfoGynecologist } from "./PriceInfoGynecologist";

export const GynecologistServicePage = () => {
    return (
        <div className="GynecologistServicePage">
            <InformationContainerComponent header="Акушер-гинеколог">
                <ServicesSpecialistsComponent
                    specialists={SpecialistsInfoGynecologist}
                />
                <PriceListComponent priceInfo={priceInfoGynecologist} />
            </InformationContainerComponent>
        </div>
    );
};
