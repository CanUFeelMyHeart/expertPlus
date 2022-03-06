import React from "react";
import { AboutClinicComponent } from "../../../components/AboutClinicComponent/AboutClinicComponent";
import { ServicesComponent } from "../../../components/ServicesComponent/ServicesComponent";

export const OtorhinolaryngologistServicePage = () => {
    return (
        <div className="OtorhinolaryngologistServicePage">
            <h2>ЛОР block</h2>
            <AboutClinicComponent />
            <ServicesComponent />
        </div>
    );
};
