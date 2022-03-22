import React from "react";
import "./InformationContainerComponent.css";

export const InformationContainerComponent = ({ children, header }) => {
  return (
    <div className="InformationContainerComponent">
      <div className="InformationContainerComponent__container">
        <div>
          <div className="InformationContainerComponent__header">
            <h1 className="InformationContainerComponent__header_inner">
              {header}
            </h1>
          </div>
        </div>
        <div className="InformationContainerComponent__mainInfo">
          {children}
        </div>
      </div>
    </div>
  );
};
