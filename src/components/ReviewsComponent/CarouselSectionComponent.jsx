import React from "react";
import "./ReviewsComponent.css";

export const CarouselSectionComponent = (props) => {
  return (
    <div className="carousel__slide">
      <div className="carousel__slide_text">
        <div className="carousel__slide_description">{props.description}</div>
        <br />
        <div className="carousel__slide_name">{props.name}</div>
      </div>
    </div>
  );
};
