import React from "react";
import { AboutClinicComponent } from "../../../components/AboutClinicComponent/AboutClinicComponent";
import { ServicesComponent } from "../../../components/ServicesComponent/ServicesComponent";
import { InformationContainerComponent } from "../../../components/InformationContainerComponent/InformationContainerComponent";

export const InfoOffDocumentsPage = () => {
    return (
        <div className="InfoOffDocumentsPage">
            <InformationContainerComponent header="Официальные документы"></InformationContainerComponent>
            <AboutClinicComponent />
            <ServicesComponent />
        </div>
    );
};
