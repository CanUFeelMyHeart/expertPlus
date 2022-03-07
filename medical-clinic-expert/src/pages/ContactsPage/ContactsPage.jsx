import React from "react";
import { InformationContainerComponent } from "../../components/InformationContainerComponent/InformationContainerComponent";
import { ContactPageInfoComponent } from "./ContactComponent";
import { contactPageInformation } from "./ContactInfo";
import "./ContactsPage.css";

export const ContactsPage = () => {
    return (
        <div className="InfoControlOrgPage">
            <InformationContainerComponent header="Контролирующие организации">
                {contactPageInformation.map((controlInfo, index) => (
                    <ContactPageInfoComponent
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
