import React from "react";
import "./InformationButtonExpand.css";

export const InformationButtonExpand = (props) => {
    return (
        <>
            <div
                className="infoExpandingList"
                style={{
                    display: props.openInfo ? "block" : "none",
                }}
                onClick={props.onClick}
            >
                <div className="infoExpandingList__container">
                    {props.informationButton.map((button, index) => (
                        <>
                            <button
                                key={index}
                                className="infoExpandingList__container_button"
                            >
                                <h3>{button.name}</h3>
                            </button>
                            <hr className="infoExpandingList__container_hr" />
                        </>
                    ))}
                </div>
            </div>
        </>
    );
};
