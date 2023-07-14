import React from "react";
import { useNavigate } from "react-router-dom";
import "./InfoMapPage.css";

export const InfoMapPageComponent = (props) => {
    const navigate = useNavigate();

    function handleClick(ref) {
        navigate(ref);
    }

    return (
        <div>
            {props.info.map((information, index) => (
                <>
                    <button
                        key={index}
                        className="infoMapPageButton"
                        onClick={(e) => handleClick(information.ref)}
                    >
                        <h3 className="infoMapPageButton__h3">
                            {information.name}
                        </h3>
                    </button>
                    <ul className="infoMapPageButton__ul">
                        {information.innerInfo.map((innerInfo, index) => (
                            <li key={index}>
                                <button
                                    className="infoMapPageButton"
                                    onClick={(e) => handleClick(innerInfo.ref)}
                                >
                                    <h3 className="infoMapPageButton__h3">
                                        {innerInfo.name}
                                    </h3>
                                </button>
                            </li>
                        ))}
                    </ul>
                </>
            ))}
        </div>
    );
};
