import React from "react";
import { useNavigate } from "react-router-dom";
import "./AboutClinicBlockComponent.css";

export const AboutClinicBlockComponent = (props) => {
  const navigate = useNavigate();

  function HandleClick(ref) {
    navigate(ref);
    window.scrollTo(0, 0);
  }

  return (
    <button
      className="aboutClinicBlock"
      onClick={() => HandleClick(props.reff)}
    >
      <div className="aboutClinicBlock__img">
        <img src={props.image} alt=""></img>
      </div>
      <div className="aboutClinicBlock__header">
        <h2>{props.header}</h2>
      </div>
      <div className="aboutClinicBlock__description">
        <ul className={props.ulClassName}>
          {props.description.map((description, index) => (
            <li key={index}>
              <h3>{description}</h3>
            </li>
          ))}
        </ul>
      </div>
    </button>
  );
};
