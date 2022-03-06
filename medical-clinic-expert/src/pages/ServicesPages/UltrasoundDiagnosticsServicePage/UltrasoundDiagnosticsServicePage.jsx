import React from "react";
import { AboutClinicComponent } from "../../../components/AboutClinicComponent/AboutClinicComponent";
import { ServicesComponent } from "../../../components/ServicesComponent/ServicesComponent";

export const UltrasoundDiagnosticsServicePage = () => {
    return (
        <div className="UltrasoundDiagnosticsServicePage">
            <h2>УЗИ block</h2>
            <AboutClinicComponent />
            <ServicesComponent />
        </div>
    );
};
