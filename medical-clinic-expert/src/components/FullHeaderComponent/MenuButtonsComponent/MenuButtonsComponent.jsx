import React from "react";
import "./MenuButtonsComponent.css";

export const MenuButtonsComponent = (props) => {
    return (
        <>
            <div className={props.className}>
                {props.buttons.map((button, index) => (
                    <button key={index} className="menuButton">
                        {button.name}
                        <img src={button.expandArrow} />
                    </button>
                ))}
            </div>
        </>
    );
};
