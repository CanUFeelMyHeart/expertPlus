import React from "react";
import { AboutClinicComponent } from "../../../components/AboutClinicComponent/AboutClinicComponent";
import { ServicesComponent } from "../../../components/ServicesComponent/ServicesComponent";

export const SurgeonServicePage = () => {
    return (
        <div className="SurgeonServicePage">
            <h2>Хирург block</h2>
            <AboutClinicComponent />
            <ServicesComponent />
        </div>
    );
};
