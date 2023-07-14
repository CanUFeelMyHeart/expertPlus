import React from "react";
import { useNavigate } from "react-router-dom";
import "./InformationButtonExpand.css";

export const InformationButtonExpand = (props) => {
  const navigate = useNavigate();

  function handleClick(ref) {
    navigate(ref);
  }

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
            <div key={index}>
              <button
                className="infoExpandingList__container_button"
                onClick={() => handleClick(button.ref)}
              >
                <h3>{button.name}</h3>
              </button>
              <hr className="infoExpandingList__container_hr" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
