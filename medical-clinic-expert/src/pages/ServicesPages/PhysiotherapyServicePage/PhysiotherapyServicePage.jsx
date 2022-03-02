import React from "react";
import { AboutClinicComponent } from "../../../components/AboutClinicComponent/AboutClinicComponent";
import { ServicesComponent } from "../../../components/ServicesComponent/ServicesComponent";

export const PhysiotherapyServicePage = () => {
    return (
        <div className="PhysiotherapyServicePage">
            <h2>Физиотерапия block</h2>
            <AboutClinicComponent />
            <ServicesComponent />
        </div>
    );
};
