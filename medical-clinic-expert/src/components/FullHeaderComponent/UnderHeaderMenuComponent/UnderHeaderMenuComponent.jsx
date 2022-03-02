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
    { name: "Акушер-гинеколог", ref: "" },
    { name: "Аллерголог-иммунолог", ref: "" },
    { name: "Гастроэнтеролог", ref: "" },
    { name: "Дерматолог", ref: "" },
    { name: "Кардиолог", ref: "" },
    { name: "Колопроктолог", ref: "" },
    { name: "Массаж", ref: "" },
    { name: "Невролог", ref: "" },
    { name: "Онколог", ref: "" },
    { name: "Оториноларинголог (ЛОР)", ref: "" },
    { name: "Процедурный кабинет", ref: "" },
    { name: "Психолог", ref: "" },
    { name: "Пульмонолог", ref: "" },
    { name: "Ревматолог", ref: "" },
    { name: "Сердечно-сосудистый хирург", ref: "" },
    { name: "Терапевт", ref: "" },
    { name: "Травматолог-ортопед", ref: "" },
    { name: "Ультразвуковая диагностика (УЗИ)", ref: "" },
    { name: "Уролог", ref: "" },
    { name: "Физиотерапия", ref: "" },
    { name: "Функциональная диагностика", ref: "" },
    { name: "Хирург", ref: "" },
    { name: "Эндокринолог", ref: "" },
    { name: "Прочие услуги", ref: "" },
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
                    servicesButton={medicalServicesButton}
                    buttons={buttons}
                />
                <button className="makeAnAppointmentButton">
                    Записаться на прием
                </button>
            </div>
            <div className="headerUnderlineContainer">
                <hr className="header__underline" />
            </div>
        </>
    );
};
