import React from "react";
import { MenuButtonsComponent } from "../MenuButtonsComponent/MenuButtonsComponent";
import "./UnderHeaderMenuComponent.css";

const informationButton = [
    { name: "О клинике", ref: "/info/about" },
    { name: "Лицензии", ref: "/info/licence" },
    { name: "Вакансии", ref: "/info/jobs" },
    { name: "Законодательная база", ref: "/info/docs" },
    { name: "Сведения о квалификации медицинских работников", ref: "/info/svedeniya-o-kvalifikaczii-mediczinskix-rabotnikov" },
    { name: "Контролирующие организации", ref: "/info/control-org" },
    { name: "Официальные документы", ref: "/info/oficialnyie-dokumenty" },
    { name: "Положение о предоставлении платных мед. услуг", ref: "/info/polozhenie-o-predostavlenii-platnyix-mediczinskix-uslug" },
    { name: "Карта сайта", ref: "/info/sitemap" },
];
const medicalServicesButton = [
    { name: "Акушер-гинеколог", ref: "/services/ginekolog" },
    { name: "Аллерголог-иммунолог", ref: "/services/allergolog-immunolog" },
    { name: "Гастроэнтеролог", ref: "/services/gastroenterolog" },
    { name: "Дерматолог", ref: "/services/dermatolog" },
    { name: "Кардиолог", ref: "/services/kardiolog" },
    { name: "Колопроктолог", ref: "/services/koloproktolog" },
    { name: "Массаж", ref: "/services/massage" },
    { name: "Невролог", ref: "/services/nevrolog" },
    { name: "Онколог", ref: "/services/onkolog" },
    { name: "Оториноларинголог (ЛОР)", ref: "/services/otorinolaringolog" },
    { name: "Процедурный кабинет", ref: "/services/proczedurnyij-kabinet" },
    { name: "Психолог", ref: "/services/psikholog" },
    { name: "Пульмонолог", ref: "/services/pulmonolog" },
    { name: "Ревматолог", ref: "/services/revmatolog" },
    { name: "Сердечно-сосудистый хирург", ref: "/services/serdechno-sosudistiy-hirurg" },
    { name: "Терапевт", ref: "/services/terapevt" },
    { name: "Травматолог-ортопед", ref: "/services/travmatolog-ortoped" },
    { name: "Ультразвуковая диагностика (УЗИ)", ref: "/services/ultrazvukovaya-diagnostika" },
    { name: "Уролог", ref: "/services/urolog" },
    { name: "Физиотерапия", ref: "/services/fizioterapiya" },
    { name: "Функциональная диагностика", ref: "/services/funkczionalnaya-diagnostika" },
    { name: "Хирург", ref: "/services/xirurg" },
    { name: "Эндокринолог", ref: "/services/endokrinolog" },
    { name: "Прочие услуги", ref: "/services/prochie-uslugi" },
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
                    <h3>Записаться на прием</h3>
                </button>
            </div>
            <hr className="header__underline" />
        </>
    );
};
