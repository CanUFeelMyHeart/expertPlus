import React from "react";
import { AboutClinicComponent as AboutClinic } from "../../components/AboutClinicComponent/AboutClinicComponent";
import { ServicesComponent } from "../../components/ServicesComponent/ServicesComponent";

export const ContactsPage = () => {
    return (
        <>
            <div>contacts page</div>
            <AboutClinic />
            <ServicesComponent />
        </>
    );
};
