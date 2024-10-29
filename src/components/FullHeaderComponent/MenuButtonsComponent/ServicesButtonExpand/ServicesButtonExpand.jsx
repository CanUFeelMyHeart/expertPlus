import React from "react";
import { useNavigate } from "react-router-dom";
import "./ServicesButtonExpand.css";

export const ServicesButtonExpand = (props) => {
   const navigate = useNavigate();

   function handleClick(ref) {
      navigate(ref);
   }

   return (
      <>
         <div
            className="servicesExpandingList"
            id="servicesExpandingList"
            style={{
               display: props.openServices ? "block" : "none",
            }}
            onClick={props.onClick}
         >
            {props.servicesButton.map((button, index) => (
               <button
                  className="servicesExpandingList__container_button"
                  onClick={() => handleClick(button.ref)}
                  key={index}
               >
                  <div>{button.name}</div>
               </button>
            ))}
         </div>
      </>
   );
};
