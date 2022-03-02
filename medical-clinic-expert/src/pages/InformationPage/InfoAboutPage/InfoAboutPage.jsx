import React from "react";
import { AboutClinicComponent } from "../../../components/AboutClinicComponent/AboutClinicComponent";
import { ServicesComponent } from "../../../components/ServicesComponent/ServicesComponent";

export const InfoAboutPage = () => {
    return (
        <div className="InfoAboutPage">
            <h2>О клинике block</h2>
            <AboutClinicComponent />
            <ServicesComponent />
        </div>
    );
};
