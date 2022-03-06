import React from "react";
import { AboutClinicComponent } from "../../../components/AboutClinicComponent/AboutClinicComponent";
import { ServicesComponent } from "../../../components/ServicesComponent/ServicesComponent";
import { InformationContainerComponent } from "../../../components/InformationContainerComponent/InformationContainerComponent";
import { qualificationsInfo } from "./QualificationsInfo";
import "./InfoQualificationsPage.css";

export const InfoQualificationsPage = () => {
    return (
        <div className="InfoQualificationsPage">
            <InformationContainerComponent header="Сведения о квалификации медицинских работников, участвующих в предоставлении платных медицинских услуг">
                <table>
                    <thead>
                        <tr className="InfoQualificationsPage__thead">
                            <td>Ф.И.О. врача</td>
                            <td>Специальность</td>
                            <td>Год выдачи, город</td>
                            <td>Срок действия сертификата</td>
                        </tr>
                    </thead>
                    <tbody>
                        {qualificationsInfo.map((info, index) => (
                            <>
                                <tr
                                    key={index}
                                    className="InfoQualificationsPage__trow"
                                >
                                    <td className="InfoQualificationsPage__trow_td name">
                                        {info.name}
                                    </td>
                                    <td className="InfoQualificationsPage__trow_td">
                                        {info.speciality}
                                    </td>
                                    <td className="InfoQualificationsPage__trow_td">
                                        {info.yearSity}
                                    </td>
                                    <td className="InfoQualificationsPage__trow_td">
                                        {info.time}
                                    </td>
                                </tr>
                            </>
                        ))}
                    </tbody>
                </table>
            </InformationContainerComponent>
            <AboutClinicComponent />
            <ServicesComponent />
        </div>
    );
};
