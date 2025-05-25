import React, {useState} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MenuButtonsPhoneComponent } from "./MenuButtonsPhoneComponent/MenuButtonsPhoneComponent";
import { MenuButtonsComponent } from "../MenuButtonsComponent/MenuButtonsComponent";
import { informationButton } from "../ButtonsInfo/informationButtonInner";
import { medicalServicesButton } from "../ButtonsInfo/medicalServicesButtonInner";
import "./HeaderComponent.css";
import logo from "../../../img/logo.svg";
import {TheModal} from "../../TheModal/TheModal";

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

export const HeaderComponent = () => {
   const navigate = useNavigate();

   const [isModalOpen, setModalOpen] = useState(false);
   const [mobileNavActive, setMobileNavActive] = React.useState(false);
   const location = useLocation();

   React.useEffect(() => {
      setMobileNavActive(false);
   }, [location]);

   const setOpenMobileNav = () => {
      document.body.classList.toggle("body--fixed");
      setMobileNavActive(!mobileNavActive);
   };

   return (
      <>
         <header className="header">
            <div className="header__inner container">
               <div className="header__title">
                  <button
                     className="header__logo"
                     onClick={(e) => navigate("/")}
                  >
                     <div className="header__titleName">ЭКСПЕРТ</div>
                     <div className="header__logoIcon">
                        <img src={logo} alt="" />
                     </div>
                  </button>
                  <div className="header__underlogo">
                     ООО «КВАЛИФИЦИРОВАННАЯ МЕДИЦИНСКАЯ ПОМОЩЬ»
                  </div>
               </div>
               <button
                  className={`menu-btn ${
                     mobileNavActive ? "menu-btn--active" : ""
                  }`}
                  onClick={() => setOpenMobileNav()}
               >
                  <span></span>
                  <span></span>
                  <span></span>
               </button>
               <div
                  className={`header__mobile-nav ${
                     mobileNavActive ? "header__mobile-nav--active" : ""
                  }`}
               >
                  <div className="header__contacts header__contacts--sm">
                     <div className="header__contacts_address">
                        400026 г. Волгоград, пр-кт Героев Сталинграда, д. 44а,
                        пом. XXV
                     </div>
                     <div className="header__contacts_phoneNumber">
                        50-88-77, 50-87-87
                     </div>
                     <div className="header__contacts_timetable">
                        Пн.–Пт.: 7:00–20:00, Сб., Вс.: 8:00–15:00
                     </div>
                  </div>
                  <MenuButtonsPhoneComponent
                     informationButton={informationButton}
                     servicesButton={medicalServicesButton}
                     buttons={buttons}
                     openInfo={mobileNavActive}
                  />
               </div>
               <div className="header__contacts header__contacts--lg">
                  <div className="header__contacts_address">
                     400026 г. Волгоград, пр-кт Героев Сталинграда, д. 44а, пом.
                     XXV
                  </div>
                  <div className="header__contacts_phoneNumber">
                     50-88-77, 50-87-87
                  </div>
                  <div className="header__contacts_timetable">
                     Пн.–Пт.: 7:00–20:00, Сб., Вс.: 8:00–15:00
                  </div>
               </div>
            </div>
         </header>
         <div className="UnderHeaderMenuComponent">
            <div className="UnderHeaderMenuComponent__inner container">
               <div className="UnderHeaderMenuComponent__inner_second">
                  <div className="menuButtonsAll">
                     <MenuButtonsComponent
                        informationButton={informationButton}
                        servicesButton={medicalServicesButton}
                        buttons={buttons}
                     />
                     <button
                         className="menuButtonsAll__makeAnAppointmentButton"
                         onClick={() => setModalOpen(true)}
                     >
                        <div>Записаться на прием</div>
                     </button>
                  </div>
               </div>
            </div>
         </div>
         <TheModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      </>
   );
};
