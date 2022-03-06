import React from "react";
import { AboutClinicComponent } from "../../../components/AboutClinicComponent/AboutClinicComponent";
import { ServicesComponent } from "../../../components/ServicesComponent/ServicesComponent";

export const TraumatologistOrthopedistServicePage = () => {
    return (
        <div className="TraumatologistOrthopedistServicePage">
            <h2>Травматолог-ортопед block</h2>
            <AboutClinicComponent />
            <ServicesComponent />
        </div>
    );
};
