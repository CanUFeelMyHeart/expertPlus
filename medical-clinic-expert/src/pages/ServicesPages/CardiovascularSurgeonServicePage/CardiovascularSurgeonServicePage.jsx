import React from "react";
import { AboutClinicComponent } from "../../../components/AboutClinicComponent/AboutClinicComponent";
import { ServicesComponent } from "../../../components/ServicesComponent/ServicesComponent";

export const CardiovascularSurgeonServicePage = () => {
    return (
        <div className="CardiovascularSurgeonServicePage">
            <h2>Сердечно-сосудистый хирург block</h2>
            <AboutClinicComponent />
            <ServicesComponent />
        </div>
    );
};
