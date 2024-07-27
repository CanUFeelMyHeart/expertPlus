import React from "react";
import { MenuButtonsComponent } from "../MenuButtonsComponent/MenuButtonsComponent";
import { informationButton } from "../ButtonsInfo/informationButtonInner";
import { medicalServicesButton } from "../ButtonsInfo/medicalServicesButtonInner";
import "./UnderHeaderMenuComponent.css";

const buttons = [
   {
      name: "Сотрудники",
      expandArrow: "",
      ref: "/doctors",
   },
   {
      name: "ДМС",
      expandArrow: "",
      ref: "/dms",
   },
   {
      name: "Контакты",
      expandArrow: "",
      ref: "/contacts",
   },
   {
      name: "Новости",
      expandArrow: "",
      ref: "/news",
   },
];

export const UnderHeaderMenuComponent = () => {
   return (
      <div className="UnderHeaderMenuComponent">
         <div className="UnderHeaderMenuComponent__inner container">
            <div className="UnderHeaderMenuComponent__inner_second">
               <div className="menuButtonsAll">
                  <MenuButtonsComponent
                     informationButton={informationButton}
                     servicesButton={medicalServicesButton}
                     buttons={buttons}
                  />
                  <button className="menuButtonsAll__makeAnAppointmentButton">
                     <div>Записаться на прием</div>
                  </button>
               </div>
            </div>
            {/* <hr className="header__underline" /> */}
         </div>
      </div>
   );
};
