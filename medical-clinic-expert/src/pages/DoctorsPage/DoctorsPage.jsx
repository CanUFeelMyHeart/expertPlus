import React from "react";
import { AboutClinicComponent as AboutClinic } from "../../components/AboutClinicComponent/AboutClinicComponent";
import { ServicesComponent } from "../../components/ServicesComponent/ServicesComponent";

export const DoctorsPage = () => {
    return (
        <>
            <div>doctors page</div>
            <AboutClinic />
            <ServicesComponent />
        </>
    );
};
