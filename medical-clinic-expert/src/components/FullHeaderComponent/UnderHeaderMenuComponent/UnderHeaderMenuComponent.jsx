import React from "react";
import { MenuButtonsComponent } from "../MenuButtonsComponent/MenuButtonsComponent";
import expandArrow from "../../../img/expandArrow.svg";
import "./UnderHeaderMenuComponent.css";

const buttons = [
    {
        name: "Информация",
        expandArrow: expandArrow,
    },
    {
        name: "Медуслуги",
        expandArrow: expandArrow,
    },
    {
        name: "Сотрудники",
        expandArrow: "",
    },
    {
        name: "ДМС",
        expandArrow: "",
    },
    {
        name: "Контакты",
        expandArrow: "",
    },
];

export const UnderHeaderMenuComponent = () => {
    return (
        <>
            <div className="menuButtonsAll">
                <MenuButtonsComponent
                    buttons={buttons}
                    expandArrow={expandArrow}
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
