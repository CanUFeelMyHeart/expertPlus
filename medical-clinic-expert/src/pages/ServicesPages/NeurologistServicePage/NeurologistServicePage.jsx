import React from "react";
import { AboutClinicComponent } from "../../../components/AboutClinicComponent/AboutClinicComponent";
import { ServicesComponent } from "../../../components/ServicesComponent/ServicesComponent";

export const NeurologistServicePage = () => {
    return (
        <div className="NeurologistServicePage">
            <h2>Невролог block</h2>
            <AboutClinicComponent />
            <ServicesComponent />
        </div>
    );
};
