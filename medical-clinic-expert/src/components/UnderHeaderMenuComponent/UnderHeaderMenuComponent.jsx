import React from "react";
import { MenuButtonsComponent } from "../MenuButtonsComponent/MenuButtonsComponent";
import './UnderHeaderMenuComponent.css'

const buttons = [
    {
        name: "Информация",
        className: "menuButtons_information",
    },
    {
        name: "Медуслуги",
        className: "menuButtons_med",
    },
    {
        name: "Сотрудники",
        className: "menuButtons_doctors",
    },
    {
        name: "ДМС",
        className: "menuButtons_dms",
    },
    {
        name: "Контакты",
        className: "menuButtons_contacts",
    },
];

export const UnderHeaderMenuComponent = (props) => {
    return (
        <>
            <div className="menuButtonsAll">
                <MenuButtonsComponent
                    buttons={buttons}
                    className="menuButtons"
                />
                <button>Записаться на прием</button>
            </div>
        </>
    );
};
