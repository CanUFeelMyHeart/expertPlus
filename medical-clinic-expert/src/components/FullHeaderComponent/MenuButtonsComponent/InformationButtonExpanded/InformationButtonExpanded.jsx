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
                    className="infoExpandingListContainer"
                >
                    {props.informationButton.map((button, index) => (
                        <>
                            <button
                                key={index}
                                className="infoExpandingList__button"
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
