import React from "react";
import { AboutClinicComponent } from "../../../components/AboutClinicComponent/AboutClinicComponent";
import { ServicesComponent } from "../../../components/ServicesComponent/ServicesComponent";

export const RheumatologistServicePage = () => {
    return (
        <div className="RheumatologistServicePage">
            <h2>Ревматолог block</h2>
            <AboutClinicComponent />
            <ServicesComponent />
        </div>
    );
};
