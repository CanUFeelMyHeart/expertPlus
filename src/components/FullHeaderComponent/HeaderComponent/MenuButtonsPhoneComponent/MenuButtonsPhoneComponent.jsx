import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { InformationButtonExpand as InfoButton } from "../../MenuButtonsComponent/InformationButtonExpanded/InformationButtonExpanded";
import { ServicesButtonExpand as ServicesButton } from "../../MenuButtonsComponent/ServicesButtonExpand/ServicesButtonExpand";
import expandArrow from "../../../../img/expandArrow.svg";
import "./MenuButtonsPhoneComponent.css";
import {TheModal} from "../../../TheModal/TheModal";

export const MenuButtonsPhoneComponent = (props) => {
   const [openInfo, setOpenInfo] = React.useState(false);
   const [isModalOpen, setModalOpen] = useState(false);
   const [openServices, setOpenServices] = React.useState(false);
   const location = useLocation();
   const navigate = useNavigate();

   React.useEffect(() => {
      setOpenInfo(false);
      setOpenServices(false);
   }, [location]);

   const setOpenInfoFunction = () => {
      setOpenInfo(!openInfo);
      setOpenServices(false);
   };

   const setOpenServicesFunction = () => {
      setOpenServices(!openServices);
      setOpenInfo(false);
   };

   function handleClick(ref) {
      navigate(ref);
      setOpenInfo(false);
      setOpenServices(false);
   }

   const handleMakeAppointment = () => {
      setModalOpen(true);
      setOpenInfo(false);
      setOpenServices(false);
   }

   return (
      <>
         <div
            className="menuButtonsPhone"
            style={{
               display: props.openInfo ? "block" : "none",
            }}
         >
            <hr className="header__underline" />
            <button
               className="menuButtonPhone"
               onClick={() => setOpenInfoFunction()}
            >
               Информация
               <img
                  className="menuButton__expandArrow"
                  src={expandArrow}
                  alt=""
               />
            </button>
            <hr className="header__underline" />
            <InfoButton
               openInfo={openInfo}
               informationButton={props.informationButton}
            />

            <button
               className="menuButtonPhone"
               onClick={() => setOpenServicesFunction()}
            >
               Медуслуги
               <img
                  className="menuButton__expandArrow"
                  src={expandArrow}
                  alt=""
               />
            </button>
            <hr className="header__underline" />
            <ServicesButton
               openServices={openServices}
               servicesButton={props.servicesButton}
            />

            {props.buttons.map((button, index) => (
               <div key={index}>
                  <button
                     className="menuButtonPhone"
                     onClick={() => handleClick(button.ref)}
                  >
                     <div>{button.name}</div>
                  </button>
                  <hr className="header__underline" />
               </div>
            ))}
            <button className="menuButtonPhone">
               <div onClick={() => handleMakeAppointment()}>Записаться на прием</div>
            </button>
         </div>
         <TheModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
         <></>
      </>
   );
};
