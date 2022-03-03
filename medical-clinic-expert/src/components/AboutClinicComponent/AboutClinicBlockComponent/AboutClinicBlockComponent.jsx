import React from "react";
import "./AboutClinicBlockComponent.css";
import testImage from '../../../img/logo.svg'

export const AboutClinicBlockComponent = () => {
    return (
        <div className="aboutClinicBlock">
            <div className="aboutClinicBlock__img"><img src={testImage}></img></div>
            <div className="aboutClinicBlock__header"></div>
            <div className="aboutClinicBlock__description"></div>
        </div>
    );
};
