import React from "react";
import { AboutClinicComponent } from "../../../components/AboutClinicComponent/AboutClinicComponent";
import { ServicesComponent } from "../../../components/ServicesComponent/ServicesComponent";

export const PsychologistServicePage = () => {
    return (
        <div className="PsychologistServicePage">
            <h2>Психолог block</h2>
            <AboutClinicComponent />
            <ServicesComponent />
        </div>
    );
};
