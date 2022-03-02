import React from "react";
import { AboutClinicComponent } from "../../../components/AboutClinicComponent/AboutClinicComponent";
import { ServicesComponent } from "../../../components/ServicesComponent/ServicesComponent";

export const InfoOffDocumentsPage = () => {
    return (
        <div className="InfoOffDocumentsPage">
            <h2>Официальные документы block</h2>
            <AboutClinicComponent />
            <ServicesComponent />
        </div>
    );
};
