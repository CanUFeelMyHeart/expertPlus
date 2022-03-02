import React from "react";
import { AboutClinicComponent } from "../../../components/AboutClinicComponent/AboutClinicComponent";
import { ServicesComponent } from "../../../components/ServicesComponent/ServicesComponent";

export const InfoLegFramPage = () => {
    return (
        <div className="InfoLegFramPage">
            <h2>Законодательная база block</h2>
            <AboutClinicComponent />
            <ServicesComponent />
        </div>
    );
};
