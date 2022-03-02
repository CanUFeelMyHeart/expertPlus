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
            >
                <div
                    style={{
                        display: props.openInfo ? "flex" : "none",
                    }}
                    className="infoExpandingList__container"
                >
                    {props.informationButton.map((button, index) => (
                        <>
                            <button
                                key={index}
                                className="infoExpandingList__container_button"
                            >
                                <h4>{button.name}</h4>
                            </button>
                            <hr className="infoExpandingList__container_hr" />
                        </>
                    ))}
                </div>
            </div>
        </>
    );
};
