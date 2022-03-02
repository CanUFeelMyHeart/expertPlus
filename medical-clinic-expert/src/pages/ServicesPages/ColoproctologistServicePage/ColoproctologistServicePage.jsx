import React from "react";
import { AboutClinicComponent } from "../../../components/AboutClinicComponent/AboutClinicComponent";
import { ServicesComponent } from "../../../components/ServicesComponent/ServicesComponent";

export const ColoproctologistServicePage = () => {
    return (
        <div className="ColoproctologistServicePage">
            <h2>Колопроктолог block</h2>
            <AboutClinicComponent />
            <ServicesComponent />
        </div>
    );
};
