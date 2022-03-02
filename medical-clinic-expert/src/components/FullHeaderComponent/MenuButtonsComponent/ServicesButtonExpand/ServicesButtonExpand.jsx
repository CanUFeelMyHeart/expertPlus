import React from "react";
import { useNavigate } from "react-router-dom";
import "./ServicesButtonExpand.css";

export const ServicesButtonExpand = (props) => {
    const navigate = useNavigate();

    function handleClick(ref) {
        navigate(ref);
    }

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
                                onClick={() => handleClick(button.ref)}
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
