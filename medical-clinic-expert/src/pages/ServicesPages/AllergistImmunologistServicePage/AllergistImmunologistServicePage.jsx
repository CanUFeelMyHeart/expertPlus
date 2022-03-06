import React from "react";
import { AboutClinicComponent } from "../../../components/AboutClinicComponent/AboutClinicComponent";
import { ServicesComponent } from "../../../components/ServicesComponent/ServicesComponent";

export const AllergistImmunologistServicePage = () => {
    return (
        <div className="AllergistImmunologistServicePage">
            <h2>Аллерголог-иммунолог block</h2>
            <AboutClinicComponent />
            <ServicesComponent />
        </div>
    );
};
