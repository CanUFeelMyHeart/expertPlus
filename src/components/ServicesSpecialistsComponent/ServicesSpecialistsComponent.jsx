import React from "react";
import "./ServicesSpecialistsComponent.css";

export const ServicesSpecialistsComponent = (props) => {
    return (
        <div className="ServicesSpecialistsComponent">
            <div className="block-header">Специалисты</div>
            <ul className="ServicesSpecialistsComponent__ul">
                {props.specialists.map((specialist, index) => (
                    <li key={index}>
                        <span className="text">{specialist}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};
