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
    { name: "Акушер-гинеколог", ref: "/ginekolog" },
    { name: "Аллерголог-иммунолог", ref: "/allergolog-immunolog" },
    { name: "Гастроэнтеролог", ref: "/gastroenterolog" },
    { name: "Дерматолог", ref: "/dermatolog" },
    { name: "Кардиолог", ref: "/kardiolog" },
    { name: "Колопроктолог", ref: "/koloproktolog" },
    { name: "Массаж", ref: "/massage" },
    { name: "Невролог", ref: "/nevrolog" },
    { name: "Онколог", ref: "/onkolog" },
    { name: "Оториноларинголог (ЛОР)", ref: "/otorinolaringolog" },
    { name: "Процедурный кабинет", ref: "/proczedurnyij-kabinet" },
    { name: "Психолог", ref: "/psikholog" },
    { name: "Пульмонолог", ref: "/pulmonolog" },
    { name: "Ревматолог", ref: "/revmatolog" },
    { name: "Сердечно-сосудистый хирург", ref: "/serdechno-sosudistiy-hirurg" },
    { name: "Терапевт", ref: "/terapevt" },
    { name: "Травматолог-ортопед", ref: "/travmatolog-ortoped" },
    { name: "Ультразвуковая диагностика (УЗИ)", ref: "/ultrazvukovaya-diagnostika" },
    { name: "Уролог", ref: "/urolog" },
    { name: "Физиотерапия", ref: "/fizioterapiya" },
    { name: "Функциональная диагностика", ref: "/funkczionalnaya-diagnostika" },
    { name: "Хирург", ref: "/xirurg" },
    { name: "Эндокринолог", ref: "/endokrinolog" },
    { name: "Прочие услуги", ref: "/prochie-uslugi" },
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
                <button className="menuButtonsAll__makeAnAppointmentButton">
                    Записаться на прием
                </button>
            </div>
            <hr className="header__underline" />
        </>
    );
};
