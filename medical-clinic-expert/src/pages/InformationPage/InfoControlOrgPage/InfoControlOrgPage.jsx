import React from "react";
import { AboutClinicComponent } from "../../../components/AboutClinicComponent/AboutClinicComponent";
import { ServicesComponent } from "../../../components/ServicesComponent/ServicesComponent";
import { InformationContainerComponent } from "../../../components/InformationContainerComponent/InformationContainerComponent";
import { controlOrgInformation } from "./ControlOrgInformation";
import { ControlOrgComponent } from "./ControlOrgComponent";
import "./InfoControlOrgPage.css";

export const InfoControlOrgPage = () => {
    return (
        <div className="InfoControlOrgPage">
            <InformationContainerComponent header="Контролирующие организации">
                {controlOrgInformation.map((controlInfo, index) => (
                    <ControlOrgComponent
                        header={controlInfo.header}
                        info={controlInfo.info}
                        hr_classname={controlInfo.hr_classname}
                    />
                ))}
            </InformationContainerComponent>
            <AboutClinicComponent />
            <ServicesComponent />
        </div>
    );
};
