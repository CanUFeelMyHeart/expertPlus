import React from "react";
import { useNavigate } from "react-router-dom";
import { InformationButtonExpand as InfoButton } from "./InformationButtonExpanded/InformationButtonExpanded";
import "./MenuButtonsComponent.css";

export const MenuButtonsComponent = (props) => {
    const [openInfo, setOpenInfo] = React.useState(false);

    const setOpenInfoFunction = () => {
        setOpenInfo(!openInfo);
    };

    const navigate = useNavigate();

    function handleClick(ref) {
        navigate(ref);
        setOpenInfo(false);
    }

    return (
        <>
            <div className={props.className}>
                <button onClick={() => setOpenInfoFunction()}>Информация</button>
                {props.buttons.map((button, index) => (
                    <button
                        key={index}
                        className="menuButton"
                        onClick={(e) => handleClick(button.ref)}
                    >
                        <h4>{button.name}</h4>
                    </button>
                ))}
            </div>
            <InfoButton
                openInfo={openInfo}
                informationButton={props.informationButton}
            />
        </>
    );
};