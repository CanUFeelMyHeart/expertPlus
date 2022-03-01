import React from "react";
import "./MenuButtonsComponent.css";

export const MenuButtonsComponent = (props) => {
    return (
        <>
            <div className={props.className}>
                {props.buttons.map((button, index) => (
                    <button key={index} className="menuButton">
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
