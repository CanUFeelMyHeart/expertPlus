import React from "react";
import "./ServicesButtonExpand.css";

export const ServicesButtonExpand = (props) => {
    return (
        <>
            <div
                className="servicesExpandingList"
                style={{
                    display: props.openServices ? "block" : "none",
                }}
            >
                <div
                    style={{
                        display: props.openServices ? "flex" : "none",
                    }}
                    className="servicesExpandingList__container"
                >
                    {props.servicesButton.map((button, index) => (
                        <>
                            <button
                                key={index}
                                className="servicesExpandingList__container_button"
                            >
                                <h3>{button.name}</h3>
                            </button>
                            <hr className="servicesExpandingList__container_hr" />
                        </>
                    ))}
                </div>
            </div>
        </>
    );
};
