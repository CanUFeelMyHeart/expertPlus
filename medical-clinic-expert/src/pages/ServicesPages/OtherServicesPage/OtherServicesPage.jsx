import React from "react";
import { AboutClinicComponent } from "../../../components/AboutClinicComponent/AboutClinicComponent";
import { ServicesComponent } from "../../../components/ServicesComponent/ServicesComponent";

export const OtherServicesPage = () => {
    return (
        <div className="OtherServicesPage">
            <h2>Прочие услуги block</h2>
            <AboutClinicComponent />
            <ServicesComponent />
        </div>
    );
};
