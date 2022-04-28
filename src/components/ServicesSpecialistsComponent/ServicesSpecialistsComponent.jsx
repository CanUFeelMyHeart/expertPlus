import React from "react";
import "./ServicesSpecialistsComponent.css";

export const ServicesSpecialistsComponent = (props) => {
    return (
        <div className="ServicesSpecialistsComponent">
            <h2 className="ServicesSpecialistsComponent_header">Специалисты</h2>
            <ul className="ServicesSpecialistsComponent__ul">
                {props.specialists.map((specialist, index) => (
                    <li key={index}>
                        <h3 className="ServicesSpecialistsComponent__li">{specialist}</h3>
                    </li>
                ))}
            </ul>
        </div>
    );
};
