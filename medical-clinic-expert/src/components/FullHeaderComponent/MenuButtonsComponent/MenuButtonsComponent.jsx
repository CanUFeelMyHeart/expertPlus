import React from "react";
import { useNavigate } from "react-router-dom";
import "./MenuButtonsComponent.css";

export const MenuButtonsComponent = (props) => {
    const navigate = useNavigate();

    function handleClick(ref) {
        navigate(ref);
    }

    return (
        <>
            <div className={props.className}>
                {props.buttons.map((button, index) => (
                    <button
                        key={index}
                        className="menuButton"
                        onClick={(e) => handleClick(button.ref)}
                    >
                        <h4>{button.name}</h4>
                        <img
                            src={button.expandArrow}
                            className="menuButtonExpandArrow"
                        />
                    </button>
                ))}
            </div>
        </>
    );
};
