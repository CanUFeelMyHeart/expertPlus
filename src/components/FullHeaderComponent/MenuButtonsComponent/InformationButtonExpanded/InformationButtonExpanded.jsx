import React from "react";
import { useNavigate } from "react-router-dom";
import "./InformationButtonExpand.css";

export const InformationButtonExpand = (props) => {
   const navigate = useNavigate();

   function handleClick(ref) {
      navigate(ref);
   }

   return (
      <>
         <div
            className="infoExpandingList"
            style={{
               display: props.openInfo ? "block" : "none",
            }}
            onClick={props.onClick}
         >
            {props.informationButton.map((button, index) => (
               <button
                  className="infoExpandingList__container_button"
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
