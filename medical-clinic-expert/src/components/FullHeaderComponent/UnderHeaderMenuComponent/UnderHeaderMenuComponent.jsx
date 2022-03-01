import React from "react";
import { MenuButtonsComponent } from "../MenuButtonsComponent/MenuButtonsComponent";
import expandArrow from "../../../img/expandArrow.svg";
import "./UnderHeaderMenuComponent.css";

const buttons = [
    {
        name: "Информация",
        expandArrow: expandArrow,
        ref: "/info",
    },
    {
        name: "Медуслуги",
        expandArrow: expandArrow,
        ref: "/services",
    },
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
