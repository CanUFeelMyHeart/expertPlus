import React from "react";
import { AboutClinicComponent } from "../../../components/AboutClinicComponent/AboutClinicComponent";
import { ServicesComponent } from "../../../components/ServicesComponent/ServicesComponent";

export const GastroenterologistServicePage = () => {
    return (
        <div className="GastroenterologistServicePage">
            <h2>Гастроэнтеролог block</h2>
            <AboutClinicComponent />
            <ServicesComponent />
        </div>
    );
};
