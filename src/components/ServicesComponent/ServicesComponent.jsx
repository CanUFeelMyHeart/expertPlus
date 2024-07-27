import React from "react";
import { useNavigate } from "react-router-dom";
import availableServiceArrow from "img/availableServiceArrow.svg";
import mainPageServicesData from "data/servicesData.json"
import "./ServicesComponent.css";

export const ServicesComponent = () => {
   const navigate = useNavigate();

   const setGridPosition = (index, items) => {
      const columnCount = items.length / 3;
      const column = Math.floor(index / columnCount) + 1;
      const row = (index % columnCount) + 1;
      return {
         gridColumn: column,
         gridRow: row,
      };
   };

   function handleClick(ref) {
      navigate(ref);
   }

   return (
      <div className="servicesBlock container section">
         <h2 className="servicesBlock__header">Оказываемые услуги</h2>
         <h3 className="servicesBlock__description">
            В клинике практикуют высококвалифицированные специалисты в области
            гинекологии, неврологии, эндокринологии, терапии, хирургии, врачи с
            большим опытом УЗИ и функциональной (ЭЭГ, Холтер) диагностики.
         </h3>

         <div className="servicesBlock__availableServices">
            {mainPageServicesData.map((service, index) => (
               <button
                  key={index}
                  className="servicesColumnComponent__serviceButton"
                  onClick={() => handleClick(service.ref)}
                  style={setGridPosition(index, mainPageServicesData)}
               >
                  <img
                     src={availableServiceArrow}
                     className="servicesColumnComponent_arrow"
                     alt="servicesColumnComponent_arrow"
                  ></img>
                  <h3 className="servicesColumnComponent__service">
                     {service.name}
                  </h3>
               </button>
            ))}
         </div>
      </div>
   );
};
