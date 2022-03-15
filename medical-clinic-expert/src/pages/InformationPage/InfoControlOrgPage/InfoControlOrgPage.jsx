import React from "react";
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
                        key={index}
                        header={controlInfo.header}
                        info={controlInfo.info}
                        hr_classname={controlInfo.hr_classname}
                    />
                ))}
            </InformationContainerComponent>
        </div>
    );
};
