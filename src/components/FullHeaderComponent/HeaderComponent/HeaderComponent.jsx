import React from "react";
import { useNavigate } from "react-router-dom";
import "./HeaderComponent.css";
import logo from "../../../img/logo.svg";

export const HeaderComponent = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="mainHeaderComponent">
        <div className="header">
          <div className="header__mainButtonContainer">
            <button
              className="header__expertButton"
              onClick={(e) => navigate("/")}
            >
              <h3 className="header__expertLogo">ЭКСПЕРТ</h3>
              <img className="header__expertButton_logo" src={logo} alt="" />
            </button>
            <h4 className="header__expertButton_description">
              ООО «КВАЛИФИЦИРОВАННАЯ МЕДИЦИНСКАЯ ПОМОЩЬ»
            </h4>
          </div>
          <div className="header__informationContainer">
            <h4 className="header__informationContainer_address">
              400026 г. Волгоград, пр-кт Героев Сталинграда, д. 44а, пом. XXV
            </h4>
            <h1 className="header__informationContainer_phoneNumber">
              50-88-77, 50-87-87
            </h1>
            <h4 className="header__informationContainer_timetable">
              Пн.–Пт.: 7:00–20:00, Сб., Вс.: 8:00–18:00
            </h4>
          </div>
        </div>
        <hr className="header__underline" />
      </div>
    </>
  );
};
