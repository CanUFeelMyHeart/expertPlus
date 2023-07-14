import React from "react";
import { useLocation } from "react-router-dom";
import { MenuButtonsPhoneComponent } from "./MenuButtonsPhoneComponent/MenuButtonsPhoneComponent";
import { informationButton } from "../ButtonsInfo/informationButtonInner";
import { medicalServicesButton } from "../ButtonsInfo/medicalServicesButtonInner";
import "./UnderHeaderPhoneMenuComponent.css";

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

export const UnderHeaderPhoneMenuComponent = () => {
  const [openButtons, setOpenButtons] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    setOpenButtons(false);
    //console.log('handle route change here', location)
  }, [location]);

  const setOpenMenuButtons = () => {
    setOpenButtons(!openButtons);
  };

  return (
    <div className="UnderHeaderPhoneMenuComponent">
      <div className="menuButtonsPhone">
        <button
          className="menuButtonsPhone__menu"
          onClick={() => setOpenMenuButtons()}
        >
          Меню
        </button>
        <div className="expandingMainMenuButtons">
          <MenuButtonsPhoneComponent
            informationButton={informationButton}
            servicesButton={medicalServicesButton}
            buttons={buttons}
            openInfo={openButtons}
          />
        </div>
      </div>
      <hr className="menuPhoneUnderline" />
    </div>
  );
};
