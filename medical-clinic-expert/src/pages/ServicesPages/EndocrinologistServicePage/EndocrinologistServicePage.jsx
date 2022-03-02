import React from "react";
import { AboutClinicComponent } from "../../../components/AboutClinicComponent/AboutClinicComponent";
import { ServicesComponent } from "../../../components/ServicesComponent/ServicesComponent";

export const EndocrinologistServicePage = () => {
    return (
        <div className="EndocrinologistServicePage">
            <h2>Эндокринолог block</h2>
            <AboutClinicComponent />
            <ServicesComponent />
        </div>
    );
};
