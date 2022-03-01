import React from "react";

export const MenuButtonsComponent = (props) => {
    return (
        <>
            <div className={props.className}>
                {props.buttons.map((button, index) => (
                    <button key={index}>{button.name}</button>
                ))}
            </div>
        </>
    );
};
