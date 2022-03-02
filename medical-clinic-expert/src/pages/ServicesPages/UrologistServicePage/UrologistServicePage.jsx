import React from "react";
import { AboutClinicComponent } from "../../../components/AboutClinicComponent/AboutClinicComponent";
import { ServicesComponent } from "../../../components/ServicesComponent/ServicesComponent";

export const UrologistServicePage = () => {
    return (
        <div className="UrologistServicePage">
            <h2>Уролог block</h2>
            <AboutClinicComponent />
            <ServicesComponent />
        </div>
    );
};
