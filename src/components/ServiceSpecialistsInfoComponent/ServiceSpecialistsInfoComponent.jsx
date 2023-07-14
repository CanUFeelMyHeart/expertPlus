import React from "react";
import "./ServiceSpecialistsInfoComponent.css";

export const ServiceSpecialistsInfoComponent = ({ children }) => {
    return (
        <div className="ServiceSpecialistsInfoComponent">
            <div className="ServiceSpecialistsInfoComponent__container">
                <div>
                </div>
                <div className="ServiceSpecialistsInfoComponent__mainInfo">
                    {children}
                </div>
            </div>
        </div>
    );
};
