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
                id="servicesExpandingList"
                style={{
                    display: props.openServices ? "block" : "none",
                }}
                onClick={props.onClick}
            >
                <div className="servicesExpandingList__container">
                    {props.servicesButton.map((button, index) => (
                        <div key={index}>
                            <button
                                className="servicesExpandingList__container_button"
                                onClick={() => handleClick(button.ref)}
                            >
                                <h3>{button.name}</h3>
                            </button>
                            <hr className="servicesExpandingList__container_hr" />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
