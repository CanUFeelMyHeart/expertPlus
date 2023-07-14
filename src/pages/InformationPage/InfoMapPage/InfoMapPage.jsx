import React from "react";
import { InformationContainerComponent } from "../../../components/InformationContainerComponent/InformationContainerComponent";
import { InfoMapPageComponent } from "./InfoMapPageComponent";
import { mapPageInformation } from "./MapPageInformation";

export const InfoMapPage = () => {
    return (
        <div className="InfoMapPage">
            <InformationContainerComponent header="Карта сайта">
                <InfoMapPageComponent info={mapPageInformation} />
            </InformationContainerComponent>
        </div>
    );
};
