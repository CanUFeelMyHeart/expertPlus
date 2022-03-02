import React from "react";
import { AboutClinicComponent } from "../../../components/AboutClinicComponent/AboutClinicComponent";
import { ServicesComponent } from "../../../components/ServicesComponent/ServicesComponent";

export const InfoQualificationsPage = () => {
    return (
        <div className="InfoQualificationsPage">
            <h2>Сведения о квалификации мед. работников block</h2>
            <AboutClinicComponent />
            <ServicesComponent />
        </div>
    );
};
