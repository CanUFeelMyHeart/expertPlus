import React from "react";
import { AboutClinicComponent } from "../../../components/AboutClinicComponent/AboutClinicComponent";
import { ServicesComponent } from "../../../components/ServicesComponent/ServicesComponent";

export const InfoControlOrgPage = () => {
    return (
        <div className="InfoControlOrgPage">
            <h2>Контролирующие организации block</h2>
            <AboutClinicComponent />
            <ServicesComponent />
        </div>
    );
};
