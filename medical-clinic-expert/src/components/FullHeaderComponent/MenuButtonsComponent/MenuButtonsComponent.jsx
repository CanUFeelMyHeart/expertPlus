import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { InformationButtonExpand as InfoButton } from "./InformationButtonExpanded/InformationButtonExpanded";
import { ServicesButtonExpand as ServicesButton } from "./ServicesButtonExpand/ServicesButtonExpand";
import expandArrow from "../../../img/expandArrow.svg";
import "./MenuButtonsComponent.css";

export const MenuButtonsComponent = (props) => {
    const [openInfo, setOpenInfo] = React.useState(false);
    const [openServices, setOpenServices] = React.useState(false);
    const location = useLocation()
    const navigate = useNavigate();

    React.useEffect(() => {
        setOpenInfo(false);
        setOpenServices(false);
        //console.log('handle route change here', location)
      }, [location])

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
            <div className="menuButtons">
                <button
                    className="menuButton"
                    onClick={() => setOpenInfoFunction()}
                >
                    Информация
                    <img className="menuButton__expandArrow" src={expandArrow} />
                </button>
                <button
                    className="menuButton"
                    onClick={() => setOpenServicesFunction()}
                >
                    Медуслуги
                    <img className="menuButton__expandArrow" src={expandArrow} />
                </button>
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
            <>
            <InfoButton
                openInfo={openInfo}
                informationButton={props.informationButton}
            /></>
            <ServicesButton
                openServices={openServices}
                servicesButton={props.servicesButton}
            />
        </>
    );
};
