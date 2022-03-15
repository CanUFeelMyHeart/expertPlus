import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { InformationButtonExpand as InfoButton } from "./InformationButtonExpanded/InformationButtonExpanded";
import { ServicesButtonExpand as ServicesButton } from "./ServicesButtonExpand/ServicesButtonExpand";
import expandArrow from "../../../img/expandArrow.svg";
import "./MenuButtonsComponent.css";

export const MenuButtonsComponent = (props) => {
  const [openInfo, setOpenInfo] = React.useState(false);
  const [openServices, setOpenServices] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [infoDropdown, setInfoDropdown] = React.useState(false);
  const [servicesDropdown, setServicesDropdown] = React.useState(false);

  React.useEffect(() => {
    setOpenInfo(false);
    setOpenServices(false);
    //console.log('handle route change here', location)
  }, [location]);

  function handleClick(ref) {
    navigate(ref);
  }

  const setOpenInfoFunction = () => {
    if (window.innerWidth < 961) {
      setOpenInfo(!openInfo);
    }
  };

  const setOpenServicesFunction = () => {
    if (window.innerWidth < 961) {
      setOpenServices(!openServices);
    }
  };

  const onMouseEnterInfo = () => {
    if (window.innerWidth < 961) {
      setInfoDropdown(false);
    } else {
      setInfoDropdown(true);
      setOpenInfo(true)
    }
  };

  const onMouseLeaveInfo = () => {
    if (window.innerWidth < 961) {
      setInfoDropdown(false);
    } else {
      setInfoDropdown(false);
      setOpenInfo(false)
    }
  };

  const onMouseEnterServices = () => {
    if (window.innerWidth < 961) {
      setServicesDropdown(false);
    } else {
      setServicesDropdown(true);
      setOpenServices(true)
    }
  };

  const onMouseLeaveServices = () => {
    if (window.innerWidth < 961) {
      setServicesDropdown(false);
    } else {
      setServicesDropdown(false);
      setOpenServices(false)
    }
  };

  return (
    <>
      <div className="menuButtons">
        <div onMouseEnter={onMouseEnterInfo} onMouseLeave={onMouseLeaveInfo}>
          <button className="menuButton" onClick={() => setOpenInfoFunction()}>
            Информация
            <img className="menuButton__expandArrow" src={expandArrow} />
          </button>
          {infoDropdown && (
            <InfoButton
              openInfo={openInfo}
              informationButton={props.informationButton}
            />
          )}
        </div>
        <div
          onMouseEnter={onMouseEnterServices}
          onMouseLeave={onMouseLeaveServices}
        >
          <button className="menuButton"
          onClick={() => setOpenServicesFunction()}>
            Медуслуги
            <img className="menuButton__expandArrow" src={expandArrow} />
          </button>
          {servicesDropdown && (
            <ServicesButton
              openServices={openServices}
              servicesButton={props.servicesButton}
            />
          )}
        </div>
        {props.buttons.map((button, index) => (
          <button
            key={index}
            className="menuButton"
            onClick={(e) => handleClick(button.ref)}
          >
            <h3>{button.name}</h3>
          </button>
        ))}
      </div>
    </>
  );
};
