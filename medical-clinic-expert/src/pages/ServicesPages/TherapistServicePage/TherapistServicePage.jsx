import React from "react";
import { AboutClinicComponent } from "../../../components/AboutClinicComponent/AboutClinicComponent";
import { ServicesComponent } from "../../../components/ServicesComponent/ServicesComponent";

export const TherapistServicePage = () => {
    return (
        <div className="TherapistServicePage">
            <h2>Терапевт block</h2>
            <AboutClinicComponent />
            <ServicesComponent />
        </div>
    );
};