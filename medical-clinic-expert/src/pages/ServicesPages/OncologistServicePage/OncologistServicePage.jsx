import React from "react";
import { AboutClinicComponent } from "../../../components/AboutClinicComponent/AboutClinicComponent";
import { ServicesComponent } from "../../../components/ServicesComponent/ServicesComponent";

export const OncologistServicePage = () => {
    return (
        <div className="OncologistServicePage">
            <h2>Онколог block</h2>
            <AboutClinicComponent />
            <ServicesComponent />
        </div>
    );
};
