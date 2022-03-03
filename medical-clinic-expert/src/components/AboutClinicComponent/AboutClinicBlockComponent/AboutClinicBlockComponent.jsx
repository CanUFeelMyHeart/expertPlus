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
                <ul className={props.ulClassName}>
                    {props.description.map((description, index) => (
                        <li key={index}>
                            <h3>{description}</h3>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
