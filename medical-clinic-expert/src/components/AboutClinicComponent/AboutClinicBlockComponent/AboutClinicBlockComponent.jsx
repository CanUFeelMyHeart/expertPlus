import React from "react";
import "./AboutClinicBlockComponent.css";
import testImage from "../../../img/logo.svg";

export const AboutClinicBlockComponent = () => {
    return (
        <div className="aboutClinicBlock">
            <div className="aboutClinicBlock__img">
                <img src={testImage}></img>
            </div>
            <div className="aboutClinicBlock__header">
                <h2>Спец узкого профиля</h2>
            </div>
            <div className="aboutClinicBlock__description">
                <h3>
                    Онколог-маммолог Аллерголог-иммунолог, пульмонолог •
                    Колопроктолог • Дерматолог • Сердечно-сосудистый хирург
                </h3>
            </div>
        </div>
    );
};
