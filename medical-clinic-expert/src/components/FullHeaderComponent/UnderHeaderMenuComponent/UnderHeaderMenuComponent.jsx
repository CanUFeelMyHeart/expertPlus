import React from "react";
import { MenuButtonsComponent } from "../MenuButtonsComponent/MenuButtonsComponent";
import "./UnderHeaderMenuComponent.css";

const informationButton = [
    { name: "О клинике", ref: "" },
    { name: "Лицензии", ref: "" },
    { name: "Вакансии", ref: "" },
    { name: "Законодательная база", ref: "" },
    { name: "Сведения о квалификации медицинских работников", ref: "" },
    { name: "Контролирующие организации", ref: "" },
    { name: "Официальные документы", ref: "" },
    { name: "Положение о предоставлении платных мед. услуг", ref: "" },
    { name: "Карта сайта", ref: "" },
];
const medicalServicesButton = [
    { name: "О клинике", ref: "" },
    { name: "Лицензии", ref: "" },
    { name: "Вакансии", ref: "" },
    { name: "Законодательная база", ref: "" },
    { name: "Сведения о квалификации медицинских работников", ref: "" },
    { name: "Контролирующие организации", ref: "" },
    { name: "Официальные документы", ref: "" },
    { name: "Положение о предоставлении платных мед. услуг", ref: "" },
    { name: "Карта сайта", ref: "" },
];

const buttons = [
    {
        name: "Сотрудники",
        expandArrow: "",
        ref: "/doctors",
    },
    {
        name: "ДМС",
        expandArrow: "",
        ref: "/dms",
    },
    {
        name: "Контакты",
        expandArrow: "",
        ref: "/contacts",
    },
];

export const UnderHeaderMenuComponent = () => {
    return (
        <>
            <div className="menuButtonsAll">
                <MenuButtonsComponent
                    informationButton={informationButton}
                    medicalServicesButton={medicalServicesButton}
                    buttons={buttons}
                    className="menuButtons"
                />
                <button className="makeAnAppointmentButton">
                    Записаться на прием
                </button>
            </div>
            <div className="headerUnderlineContainer">
                <hr className="headerUnderline" />
            </div>
        </>
    );
};
