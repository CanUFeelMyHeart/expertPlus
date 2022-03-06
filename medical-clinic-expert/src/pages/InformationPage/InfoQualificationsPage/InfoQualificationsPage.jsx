import React from "react";
import { AboutClinicComponent } from "../../../components/AboutClinicComponent/AboutClinicComponent";
import { ServicesComponent } from "../../../components/ServicesComponent/ServicesComponent";
import { InformationContainerComponent } from "../../../components/InformationContainerComponent/InformationContainerComponent";

export const InfoQualificationsPage = () => {
    return (
        <div className="InfoQualificationsPage">
            <InformationContainerComponent header="Сведения о квалификации медицинских работников, участвующих в предоставлении платных медицинских услуг"></InformationContainerComponent>
            <AboutClinicComponent />
            <ServicesComponent />
        </div>
    );
};
