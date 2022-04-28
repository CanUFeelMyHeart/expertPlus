import React from "react";
import { useNavigate } from "react-router-dom";
import availableServiceArrow from "../../../img/availableServiceArrow.svg";
import "./ServicesColumnComponent.css";

export const ServicesColumnComponent = (props) => {
    const navigate = useNavigate();

    function handleClick(ref) {
        navigate(ref);
    }

    return (
        <div className="servicesColumnComponent">
            {props.services.map((service, index) => (
                <button
                    key={index}
                    className="servicesColumnComponent__serviceButton"
                    onClick={() => handleClick(service.ref)}
                >
                    <img
                        src={availableServiceArrow}
                        className="servicesColumnComponent_arrow"
                        alt=""
                    ></img>
                    <h3 className="servicesColumnComponent__service">{service.name}</h3>
                </button>
            ))}
        </div>
    );
};
