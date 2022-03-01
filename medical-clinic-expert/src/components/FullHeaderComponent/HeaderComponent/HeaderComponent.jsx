import React from "react";
import "./HeaderComponent.css";
import logo from "../../../img/logo.svg";

export const HeaderComponent = () => {
    return (
        <>
            <div className="header">
                <div className="headerMainButton">
                    <button className="expertButton">
                        ЭКСПЕРТ
                        <img className="expertButton_logo" src={logo} />
                    </button>
                    <h4 className="expButtonDescription">
                        ООО «КВАЛИФИЦИРОВАННАЯ МЕДИЦИНСКАЯ ПОМОЩЬ»
                    </h4>
                </div>
                <div className="headerInformation">
                    <h4 className="headerAddress">
                        400026 г. Волгоград, пр-кт Героев Сталинграда, д. 44а,
                        пом. XXV
                    </h4>
                    <h1 className="headerPhone">50-88-77, 50-87-87</h1>
                    <h4 className="headerTimetable">
                        Пн.–Пт.: 7:00–20:00, Сб., Вс.: 8:00–18:00
                    </h4>
                </div>
            </div>
            <div className="headerUnderlineContainer">
                <hr className="headerUnderline" />
            </div>
        </>
    );
};
