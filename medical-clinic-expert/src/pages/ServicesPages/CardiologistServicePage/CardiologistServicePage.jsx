import React from "react";
import { AboutClinicComponent } from "../../../components/AboutClinicComponent/AboutClinicComponent";
import { ServicesComponent } from "../../../components/ServicesComponent/ServicesComponent";

export const CardiologistServicePage = () => {
    return (
        <div className="CardiologistServicePage">
            <h2>Кардиолог block</h2>
            <AboutClinicComponent />
            <ServicesComponent />
        </div>
    );
};
