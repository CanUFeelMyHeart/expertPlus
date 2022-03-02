import React from "react";
import { AboutClinicComponent } from "../../../components/AboutClinicComponent/AboutClinicComponent";
import { ServicesComponent } from "../../../components/ServicesComponent/ServicesComponent";

export const DermatologistServicePage = () => {
    return (
        <div className="DermatologistServicePage">
            <h2>Дерматолог block</h2>
            <AboutClinicComponent />
            <ServicesComponent />
        </div>
    );
};
