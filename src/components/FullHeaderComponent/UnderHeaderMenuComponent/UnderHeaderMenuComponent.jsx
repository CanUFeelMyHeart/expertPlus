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
        
      </div>
   );
};
