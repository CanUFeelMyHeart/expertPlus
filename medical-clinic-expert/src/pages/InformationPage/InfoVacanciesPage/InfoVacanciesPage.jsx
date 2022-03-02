import React from "react";
import { AboutClinicComponent } from "../../../components/AboutClinicComponent/AboutClinicComponent";
import { ServicesComponent } from "../../../components/ServicesComponent/ServicesComponent";

export const InfoVacanciesPage = () => {
    return (
        <div className="InfoVacanciesPage">
            <h2>Вакансии block</h2>
            <AboutClinicComponent />
            <ServicesComponent />
        </div>
    );
};
