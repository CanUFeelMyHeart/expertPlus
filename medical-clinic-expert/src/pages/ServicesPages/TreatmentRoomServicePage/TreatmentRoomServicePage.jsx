import React from "react";
import { AboutClinicComponent } from "../../../components/AboutClinicComponent/AboutClinicComponent";
import { ServicesComponent } from "../../../components/ServicesComponent/ServicesComponent";

export const TreatmentRoomServicePage = () => {
    return (
        <div className="TreatmentRoomServicePage">
            <h2>Процедурный кабинет block</h2>
            <AboutClinicComponent />
            <ServicesComponent />
        </div>
    );
};
