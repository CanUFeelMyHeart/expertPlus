import React from "react";
import { AboutClinicComponent } from "../../../components/AboutClinicComponent/AboutClinicComponent";
import { ServicesComponent } from "../../../components/ServicesComponent/ServicesComponent";

export const GynecologistServicePage = () => {
    return (
        <div className="GynecologistServicePage">
            <h2>Гинеколог block</h2>
            <AboutClinicComponent />
            <ServicesComponent />
        </div>
    );
};
