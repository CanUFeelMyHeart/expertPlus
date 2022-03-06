import React from "react";
import "./InformationContainerComponent.css";

export const InformationContainerComponent = ({ children, header }) => {
    return (
        <div className="InformationContainerComponent">
            <div>
                <h1 className="InformationContainerComponent__header">
                    {header}
                </h1>
            </div>
            <div className="InformationContainerComponent__mainInfo">
                {children}
            </div>
        </div>
    );
};
