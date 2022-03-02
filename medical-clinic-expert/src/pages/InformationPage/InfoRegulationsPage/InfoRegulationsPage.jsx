import React from "react";
import { AboutClinicComponent } from "../../../components/AboutClinicComponent/AboutClinicComponent";
import { ServicesComponent } from "../../../components/ServicesComponent/ServicesComponent";

export const InfoRegulationsPage = () => {
    return (
        <div className="InfoRegulationsPage">
            <h2>Положение о предоставлении платных мед. услуг block</h2>
            <AboutClinicComponent />
            <ServicesComponent />
        </div>
    );
};
