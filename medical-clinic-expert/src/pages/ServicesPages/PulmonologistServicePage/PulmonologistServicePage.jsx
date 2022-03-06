import React from "react";
import { AboutClinicComponent } from "../../../components/AboutClinicComponent/AboutClinicComponent";
import { ServicesComponent } from "../../../components/ServicesComponent/ServicesComponent";

export const PulmonologistServicePage = () => {
    return (
        <div className="PulmonologistServicePage">
            <h2>Пульмонолог block</h2>
            <AboutClinicComponent />
            <ServicesComponent />
        </div>
    );
};
