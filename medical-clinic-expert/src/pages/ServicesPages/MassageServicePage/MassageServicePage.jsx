import React from "react";
import { AboutClinicComponent } from "../../../components/AboutClinicComponent/AboutClinicComponent";
import { ServicesComponent } from "../../../components/ServicesComponent/ServicesComponent";

export const MassageServicePage = () => {
    return (
        <div className="MassageServicePage">
            <h2>Массаж block</h2>
            <AboutClinicComponent />
            <ServicesComponent />
        </div>
    );
};
