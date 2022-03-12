import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { InformationButtonExpand as InfoButton } from "../../MenuButtonsComponent/InformationButtonExpanded/InformationButtonExpanded";
import { ServicesButtonExpand as ServicesButton } from "../../MenuButtonsComponent/ServicesButtonExpand/ServicesButtonExpand";
import expandArrow from "../../../../img/expandArrow.svg";
import "./MenuButtonsPhoneComponent.css";

export const MenuButtonsPhoneComponent = (props) => {
  const [openInfo, setOpenInfo] = React.useState(false);
  const [openServices, setOpenServices] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    setOpenInfo(false);
    setOpenServices(false);
    //console.log('handle route change here', location)
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
          <img className="menuButton__expandArrow" src={expandArrow} />
        </button>
        <InfoButton
          openInfo={openInfo}
          informationButton={props.informationButton}
        />
        <hr className="header__underline" />
        <button
          className="menuButtonPhone"
          onClick={() => setOpenServicesFunction()}
        >
          Медуслуги
          <img className="menuButton__expandArrow" src={expandArrow} />
        </button>
        <ServicesButton
          openServices={openServices}
          servicesButton={props.servicesButton}
        />
        <hr className="header__underline" />
        {props.buttons.map((button, index) => (
          <>
            <button
              key={index}
              className="menuButtonPhone"
              onClick={() => handleClick(button.ref)}
            >
              <h3>{button.name}</h3>
            </button>
            <hr className="header__underline" />
          </>
        ))}
        <button className="menuButtonPhone">
          <h3>Записаться на прием</h3>
        </button>
      </div>
      <></>
    </>
  );
};
