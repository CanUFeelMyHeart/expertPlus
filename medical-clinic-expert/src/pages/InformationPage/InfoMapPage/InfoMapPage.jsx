import React from "react";
import { AboutClinicComponent } from "../../../components/AboutClinicComponent/AboutClinicComponent";
import { ServicesComponent } from "../../../components/ServicesComponent/ServicesComponent";

export const InfoMapPage = () => {
    return (
        <div className="InfoMapPage">
            <h2>Карта сайта block</h2>
            <AboutClinicComponent />
            <ServicesComponent />
        </div>
    );
};
