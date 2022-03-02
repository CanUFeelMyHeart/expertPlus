import React from "react";
import { AboutClinicComponent } from "../../../components/AboutClinicComponent/AboutClinicComponent";
import { ServicesComponent } from "../../../components/ServicesComponent/ServicesComponent";

export const InfoLicencePage = () => {
    return (
        <div className="InfoLicencePage">
            <h2>Лицензии block</h2>
            <AboutClinicComponent />
            <ServicesComponent />
        </div>
    );
};
