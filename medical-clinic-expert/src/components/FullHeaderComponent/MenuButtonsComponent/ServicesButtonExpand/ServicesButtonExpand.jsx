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
                    className="servicesExpandingListContainer"
                >
                    {props.servicesButton.map((button, index) => (
                        <>
                            <button
                                key={index}
                                className="servicesExpandingList__button"
                            >
                                <h4>{button.name}</h4>
                            </button>
                            <hr className="expandedListHr" />
                        </>
                    ))}
                </div>
            </div>
        </>
    );
};
