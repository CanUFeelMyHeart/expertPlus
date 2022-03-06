import React from "react";
import { AboutClinicComponent } from "../../../components/AboutClinicComponent/AboutClinicComponent";
import { ServicesComponent } from "../../../components/ServicesComponent/ServicesComponent";
import { InformationContainerComponent } from "../../../components/InformationContainerComponent/InformationContainerComponent";
import "./InfoVacanciesPage.css";

export const InfoVacanciesPage = () => {
    return (
        <div className="InfoVacanciesPage">
            <InformationContainerComponent header="Вакансии">
                <h3 className="InfoVacanciesPage__header">
                    На данный момент в клинике открыты вакансии:
                </h3>
                <br />
                <ul className="InfoVacanciesPage_list">
                    <li>Врач эндокринолог</li>
                    <li>Врач ревматолог</li>
                    <li>Врач аллерголог пульмонолог</li>
                </ul>
            </InformationContainerComponent>
            <AboutClinicComponent />
            <ServicesComponent />
        </div>
    );
};
