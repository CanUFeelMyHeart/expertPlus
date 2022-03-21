import React from "react";
import "./SliderComponent.css";

export const SliderSectionComponent = (props) => {
  return (
    <li id={props.id} tabIndex="0" className="slider__slide">
      <div className="carousel__snapper">
        <a href={props.href_prev} className="carousel__prev">
          Go to last slide
        </a>

        <a href={props.href_next} className="carousel__next">
          Go to next slide
        </a>
      </div>
      <div className="carousel__slide_text">
        <img src={props.image} alt="" />
      </div>
    </li>
  );
};
