import React from "react";
import { AboutClinicComponent } from "../../../components/AboutClinicComponent/AboutClinicComponent";
import { ServicesComponent } from "../../../components/ServicesComponent/ServicesComponent";
import { InformationContainerComponent } from "../../../components/InformationContainerComponent/InformationContainerComponent";

export const InfoRegulationsPage = () => {
    return (
        <div className="InfoRegulationsPage">
            <InformationContainerComponent header="Положение о предоставлении платных медицинских услуг"></InformationContainerComponent>
            <AboutClinicComponent />
            <ServicesComponent />
        </div>
    );
};
