import React from "react";
import "./AboutClinicBlockComponent.css";

export const AboutClinicBlockComponent = (props) => {
    return (
        <div className="aboutClinicBlock">
            <div className="aboutClinicBlock__img">
                <img src={props.image}></img>
            </div>
            <div className="aboutClinicBlock__header">
                <h2>{props.header}</h2>
            </div>
            <div className="aboutClinicBlock__description">
                <h3>
                    {props.description}
                </h3>
            </div>
        </div>
    );
};
