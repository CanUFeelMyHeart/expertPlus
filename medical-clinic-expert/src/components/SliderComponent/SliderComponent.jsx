import React from "react";
import { pictures } from "./SliderInfo";
import SimpleImageSlider from "react-simple-image-slider";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./SliderComponent.css";

export const SliderComponent = () => {
  const properties = {
    duration: 3000,
    indicators: true,
    transitionDuration: 1500,
    indicators: (i) => <div className="indicator"></div>,
  };

  return (
    <div className="sliderComponent__block">
      <div className="sectionComponent__block_carousel">
        <Slide {...properties}>
          {pictures.map((slideImage, index) => (
            <div className="each-slide" key={index}>
              <div
                className="each-slide-img"
                style={{ backgroundImage: `url(${slideImage.url})` }}
              ></div>
            </div>
          ))}
        </Slide>
      </div>
      <hr className="aboutClinic__hr" />
    </div>
  );
};
