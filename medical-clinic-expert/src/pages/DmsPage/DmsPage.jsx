import React from "react";
import { AboutClinicComponent as AboutClinic } from "../../components/AboutClinicComponent/AboutClinicComponent";
import { ServicesComponent } from "../../components/ServicesComponent/ServicesComponent";
import { InformationContainerComponent } from "../../components/InformationContainerComponent/InformationContainerComponent";

export const DmsPage = () => {
    return (
        <>
            <InformationContainerComponent header="Добровольное медицинское страхование">
                
            </InformationContainerComponent>
            <AboutClinic />
            <ServicesComponent />
        </>
    );
};
