import React from "react";
import "./CardComponent.css";

export const CardComponent = ({ children }) => {
   return (
      <div className="card">
         {children}
      </div>
   );
};
