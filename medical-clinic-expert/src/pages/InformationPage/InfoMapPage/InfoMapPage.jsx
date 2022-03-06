import React from "react";
import { AboutClinicComponent } from "../../../components/AboutClinicComponent/AboutClinicComponent";
import { ServicesComponent } from "../../../components/ServicesComponent/ServicesComponent";
import { InformationContainerComponent } from "../../../components/InformationContainerComponent/InformationContainerComponent";

export const InfoMapPage = () => {
    return (
        <div className="InfoMapPage">
            <InformationContainerComponent header="Карта сайта"></InformationContainerComponent>
            <AboutClinicComponent />
            <ServicesComponent />
        </div>
    );
};
