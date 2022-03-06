import React from "react";
import { InformationContainerComponent } from "../../../components/InformationContainerComponent/InformationContainerComponent";
import { PriceListComponent } from "../../../components/PriceListComponent/PriceListComponent";
import { priceInfoGynecologist } from "./PriceInfoGynecologist";

export const GynecologistServicePage = () => {
    return (
        <div className="GynecologistServicePage">
            <InformationContainerComponent header="Акушер-гинеколог">
                <PriceListComponent priceInfo={priceInfoGynecologist} />
            </InformationContainerComponent>
        </div>
    );
};
